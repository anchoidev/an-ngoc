import classNames from "classnames/bind";
import styles from "./weddingInfo.module.scss";

const cx = classNames.bind(styles);

function toGoogleDate(d) {
  return d.toISOString().replace(/[-:]/g, "").replace(".000", "");
}

function getDow(dayNum, monthNum, yearNum) {
  if (!dayNum || !monthNum || !yearNum) return "";
  const dowMap = [
    "CHỦ NHẬT",
    "THỨ HAI",
    "THỨ BA",
    "THỨ TƯ",
    "THỨ NĂM",
    "THỨ SÁU",
    "THỨ BẢY",
  ];
  const dt = new Date(yearNum, monthNum - 1, dayNum);
  return dowMap[dt.getDay()] || "";
}

function buildGoogleCalendarLink({ time, street, address }) {
  try {
    const rawDate = time?.date || "";
    const [dayStr, monthStr] = rawDate.split("/");
    const dayNum = Number(dayStr);
    const monthNum = Number(monthStr);
    const yearNum = Number(time?.year);

    const khaiTiecTime = time?.time || "";
    const timeParts = String(khaiTiecTime).split(":");
    const hh = Number(timeParts[0]);
    const mm = Number(timeParts[1]);

    if (
      !dayNum ||
      !monthNum ||
      !yearNum ||
      Number.isNaN(hh) ||
      Number.isNaN(mm)
    ) {
      return "";
    }

    const startLocal = new Date(yearNum, monthNum - 1, dayNum, hh, mm, 0);
    const endLocal = new Date(startLocal.getTime() + 2 * 60 * 60 * 1000);

    const details = `Tiệc cưới của chúng mình tại: ${street}`;
    const location = address || street || "";

    return (
      "https://www.google.com/calendar/render?action=TEMPLATE" +
      `&text=${encodeURIComponent("Đám cưới")}` +
      `&dates=${toGoogleDate(startLocal)}/${toGoogleDate(endLocal)}` +
      "&ctz=Asia/Ho_Chi_Minh" +
      `&details=${encodeURIComponent(details)}` +
      `&location=${encodeURIComponent(location)}`
    );
  } catch {
    return "";
  }
}

function WeddingInfo({ time, address, street, familyTitle = "TIỆC CƯỚI" }) {
  const rawDate = time?.date || "";
  const [dayStrRaw, monthStrRaw] = rawDate.split("/");

  const dayNum = Number(dayStrRaw);
  const monthNum = Number(monthStrRaw);
  const yearNum = Number(time?.year);

  const dayNumPadded = String(dayNum);
  const monthNumPadded = String(monthNum).padStart(2, "0");

  const khaiTiecTime = time?.time || "";
  const donKhachTime = time?.donKhachTime || khaiTiecTime;

  const dow = getDow(dayNum, monthNum, yearNum);

  const googleCalendarLink = buildGoogleCalendarLink({
    time,
    street,
    address,
  });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("sectionHeader")}>
        <h2 className={cx("sectionTitle")}>
          <span>{familyTitle}</span>
        </h2>
      </div>

      <div className={cx("timeCard")}>
        <div className={cx("timeBg")} />
        <div className={cx("timeContent")}>
          <h3 className={cx("timeLabel")}>
            <span>Tiệc cưới sẽ diễn ra vào lúc:</span>
          </h3>
          <div className={cx("timeMain")}>{khaiTiecTime}</div>

          <div className={cx("dateRow")}>
            <span className={cx("dateSideText")}>{dow}</span>
            <span className={cx("dateDivider")} />
            <span className={cx("dateDay")}>{dayNumPadded}</span>
            <span className={cx("dateDivider")} />
            <span className={cx("dateSideText")}>
              THÁNG {monthNumPadded}
            </span>
          </div>

          <div className={cx("dateYear")}>{yearNum ? yearNum : ""}</div>
          {time?.full ? (
            <div className={cx("dateLunar")}>({time.full})</div>
          ) : null}

          <div className={cx("scheduleRow")}>
            <div className={cx("scheduleItem")}>
              <span className={cx("scheduleName")}>Đón khách</span>
              <span className={cx("scheduleTime")}>{donKhachTime}</span>
            </div>
            <div className={cx("scheduleItem")}>
              <span className={cx("scheduleName")}>Khai tiệc</span>
              <span className={cx("scheduleTime")}>{khaiTiecTime}</span>
            </div>
          </div>

            <div
              className={cx("calendarLink")}
            >
             {address}
            </div>
        </div>
      </div>

    </div>
  );
}

export default WeddingInfo;

