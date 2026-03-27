import GlobalContext from "./context";
import "./globals.css";
import Sublayout from "./subLayout";

// metadataBase used by Next.js to build absolute URLs for metadata when needed.
export const metadataBase = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://ngoc-an-minh-ngoc.vercel.app"
);

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <GlobalContext>
          <Sublayout>{children}</Sublayout>
        </GlobalContext>
      </body>
    </html>
  );
}
