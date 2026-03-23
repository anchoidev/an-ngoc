"use client";
import styles from "./disk.module.scss";
import classNames from "classnames/bind";
import { useEffect, useRef, useContext } from "react";
import sound from "@/app/static/sound.mp3";
import { MultiContext } from "@/app/context";

const cx = classNames.bind(styles);

function Disk() {
  const ref = useRef(null);

  const { state, dispatch } = useContext(MultiContext);

  const { isOpenMusic } = state;

  const handleOpenAudio = () => {
    if (isOpenMusic === false) {
      dispatch({ type: "TURN_ON" });
      ref.current.play();
    } else {
      dispatch({ type: "TURN_OFF" });
      ref.current.pause();
    }
  };

  useEffect(() => {
    if (ref.current && isOpenMusic && ref.current.paused) {
      ref.current.play();
    }
  }, [isOpenMusic]);

  // Auto play on mount
  useEffect(() => {
    const playAudio = async () => {
      if (ref.current) {
        try {
          await ref.current.play();
          dispatch({ type: "TURN_ON" });
        } catch (error) {
          // Autoplay was prevented, user interaction required
          console.log("Autoplay prevented, waiting for user interaction");
        }
      }
    };
    
    // Try to play after a short delay
    const timer = setTimeout(() => {
      playAudio();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cx("music", isOpenMusic && "rotate")}
      onClick={handleOpenAudio}
    >
      <audio src={sound} ref={ref} loop />
    </div>
  );
}

export default Disk;
