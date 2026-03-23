"use client";
import styles from "./album.module.scss";
import classNames from "classnames/bind";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { albumSection } from "@/app/configs/ui";
import Link from "next/link";

const cx = classNames.bind(styles);

function Album({ name }) {
  const viewRef = useRef();
  const isInView = useInView(viewRef, { once: true });

  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <div className={cx("side-img-wrap")} ref={viewRef}>
          <img
            src={albumSection.images[2]}
            className={cx("side-img")}
          />
        </div>
        <div className={cx("content")}>
          <div className={cx("title")}>
            <span className={cx("text")}>Share</span>
            <span className={cx("text")}>the</span>
            <span className={cx("text")}>Love</span>
          </div>
          <div className={cx("main-img-wrap")}>
            <img
              className={cx("main-img")}
              src={albumSection.images[5]}
              style={{
                transform: isInView
                  ? "translateX(0) rotate(0deg)"
                  : " translate(200px, -100px) rotate(100deg)",
                opacity: isInView ? 1 : 0,
                transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              }}
            />
          </div>
        </div>
      </div>
      <div className={cx("container")}>
        <Slider
          className={cx("slide-monitor")}
          autoplay
          speed={2000}
          autoplaySpeed={3000}
          pauseOnHover
          arrows={false}
          pauseOnFocus
          adaptiveHeight
        >
          {albumSection.images.map((src) => {
            return (
              <div className={cx("monitor")} key={src}>
                <img className={cx("monitor-img")} src={src} />
              </div>
            );
          })}
        </Slider>
      </div>

      <Link className={cx("btn")} href={`/albums?name=${name}`}>
        Xem hết album
      </Link>
    </div>
  );
}

export default Album;
