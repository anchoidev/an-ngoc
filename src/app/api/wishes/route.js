import { NextResponse } from "next/server";
import { execFile } from "node:child_process";

function formatIsAttend(isAttend) {
  if (isAttend === "yes") return "Sẽ đến dự tiệc";
  if (isAttend === "no") return "Không thể đến dự";
  return "Không biết";
}

async function sendTelegramMessage(payload) {
  const botToken = '8295498183:AAFNHcckA7h5WTXgRBQcGKb-3njfDTDVPPc';
  const chatId = '7065130108';
  if (!botToken || !chatId) return false;

  const message = [
    "Lời chúc mọi người dành cho An - Ngọc",
    `Tên: ${payload?.name ?? ""}`,
    `Lời chúc: ${payload?.wish ?? ""}`,
    `Tham dự: ${formatIsAttend(payload?.isAttend)}`,
  ].join("\n");

  // Telegram Bot API: https://core.telegram.org/bots/api#sendmessage
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  // Try Node fetch first (in case network allows this process).
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          disable_web_page_preview: true,
        }),
        signal: controller.signal,
      });
      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Telegram API error: ${res.status} ${text}`.trim());
      }
      return true;
    } finally {
      clearTimeout(timeout);
    }
  } catch (err) {
    // Fallback for Windows environments where Node outbound is blocked
    // but PowerShell outbound is allowed.
    const ok = await sendTelegramMessageViaPowerShell({
      url,
      chatId,
      message,
    });
    if (!ok) throw new Error("Telegram PowerShell fallback failed");
    return ok;
  }
}

function escapePowerShellSingleQuotedString(value) {
  return String(value ?? "")
    .replace(/\r?\n/g, " ")
    .replace(/'/g, "''");
}

async function sendTelegramMessageViaPowerShell({ url, chatId, message }) {
  const psUrl = escapePowerShellSingleQuotedString(url);
  const psChatId = escapePowerShellSingleQuotedString(chatId);
  const psText = escapePowerShellSingleQuotedString(message);

  // Use form-encoded body (works with Telegram Bot API).
  const command = `
    $ErrorActionPreference='Stop';
    $payload=@{chat_id='${psChatId}'; text='${psText}'};
    $r=Invoke-RestMethod -Uri '${psUrl}' -Method Post -Body $payload -TimeoutSec 15;
    $r | ConvertTo-Json -Depth 6
  `.trim();

  return await new Promise((resolve, reject) => {
    execFile(
      "powershell.exe",
      [
        "-NoProfile",
        "-ExecutionPolicy",
        "Bypass",
        "-Command",
        command,
      ],
      { windowsHide: true, timeout: 20000 },
      (err, stdout, stderr) => {
        if (err) return reject(err);
        const out = String(stdout ?? "").trim();
        if (!out) return reject(new Error(String(stderr ?? "PowerShell returned empty output").trim()));
        try {
          const lastLine = out.split(/\r?\n/).filter(Boolean).pop();
          const json = JSON.parse(lastLine);
          resolve(Boolean(json?.ok));
        } catch {
          reject(new Error(`PowerShell output is not valid JSON: ${out.slice(0, 300)}`));
        }
      }
    );
  });
}

export async function GET() {
  // Không còn Google Sheets => không có dữ liệu để render trên trang "wish".
  return NextResponse.json([]);
}

export async function POST(req) {
  try {
    // NextRequest body can only be read once; use text then JSON.parse to avoid "Body has already been read".
    const raw = await req.text();
    if (!raw) {
      return NextResponse.json(
        { ok: false, error: "Request body is empty" },
        { status: 400 }
      );
    }

    let body;
    try {
      body = JSON.parse(raw);
    } catch {
      return NextResponse.json(
        {
          ok: false,
          error: "Request body is not valid JSON",
          rawSnippet: raw.slice(0, 200),
        },
        { status: 400 }
      );
    }

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const sent = await sendTelegramMessage(body);
    if (!sent) {
      return NextResponse.json(
        { ok: false, error: "Telegram not configured or send failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Typically happens when body is not valid JSON (req.json() fails).
    // Returning error details to help debug client-side 400.
    console.error("POST /api/wishes error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Server error" },
      { status: 500 }
    );
  }
}

