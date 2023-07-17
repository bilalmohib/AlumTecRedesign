import React, { useEffect, useState } from "react";

import styles from "./style.module.css";

interface HBCSliderProps {}

const HBCSlider = (props: HBCSliderProps) => {
  const [progress, setProgres] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgres((prev) => (prev + 1) % 5);
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.controls_slider_container}>
      <div className={styles.next_txt}>Next</div>
      <div
        className={`${styles.line_slider} ${isAnimating ? styles.animate : ""}`}
        style={{
          background: `linear-gradient(to right, #113f94 ${
            progress * 20
          }%, #113f9449 ${progress * 20}%)`,
          width: 100,
        }}
      />
      <div className={styles.previous_txt}>Previous</div>
    </div>
  );
};
export default HBCSlider;
