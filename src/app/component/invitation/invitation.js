"use client";
import styles from "./invitation.module.scss";
import classNames from "classnames/bind";
import Days from "./days/days";
import Infomation from "./infomation";
import WeddingInfo from "./weddingInfo/weddingInfo";
import { weddingInfo, invitationSection } from "@/app/configs/ui";
import { useRef } from "react";
import { useInView } from "framer-motion";

const cx = classNames.bind(styles);

function Invitation() {
  const wedInfo = weddingInfo[0];
  const wedInfo2 = weddingInfo[1];
  const wedInfo3 = weddingInfo[2];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div className={cx("wrapper")}>
      <h2 className={cx("title")}>Invitation</h2>
      <p className={cx("des")}>Đến dự đám cưới của chúng mình</p>
      <div className={cx("img-list")} ref={ref}>
        <div
          className={cx("img-wrap")}
          style={{
            transform: isInView ? "translateX(0)" : "translateX(80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          <img className={cx("img")} src={invitationSection[1]} />
        </div>
        <div className={cx("img-wrap", "center-img")}>
          <img className={cx("img")} src={invitationSection[0]} />
        </div>
        <div
          className={cx("img-wrap")}
          style={{
            transform: isInView ? "translateX(0)" : "translateX(-80px)",
            opacity: isInView ? 1 : 0,
            transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s  ",
          }}
        >
          <img className={cx("img")} src={invitationSection[2]} />
        </div>
      </div>
      <Days title="Tháng 4" activeDay={invitationSection.activeDay} />

      <WeddingInfo
        familyTitle="TIỆC CƯỚI NHÀ TRAI"
        time={wedInfo.time}
        address={wedInfo.address}
        street={wedInfo.street}
      />

      <WeddingInfo
        familyTitle="TIỆC CƯỚI NHÀ GÁI"
        time={{ ...wedInfo2.time}}
        address={wedInfo2.address}
        street={wedInfo2.street}
      />

      <Infomation
        img={wedInfo3.img}
        title={wedInfo3.title}
        date={wedInfo3.date}
        time={{ ...wedInfo3.time}}
        address={wedInfo3.address}
        street={wedInfo3.street}
        phone={wedInfo3.phone}
        posision={wedInfo3.posision}
      />
    </div>
  );
}

export default Invitation;
