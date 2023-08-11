import { useState, useEffect } from "react";
import Image from "next/image";

import { getNextImageIndex } from "../methods";
import { sliderImages } from "../data";

import styles from "./style.module.css";

const RightContainerHB = () => {
  // The following code is for the slider arrows
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentMiddleImage, setCurrentMiddleImage] = useState(1);
  const [currentRightImage, setCurrentRightImage] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextLeftImageIndex = getNextImageIndex(currentLeftImage, -1);
      const nextMiddleImageIndex = getNextImageIndex(currentMiddleImage, -1);
      const nextRightImageIndex = getNextImageIndex(currentRightImage, -1);

      setCurrentLeftImage(nextLeftImageIndex);
      setCurrentMiddleImage(nextMiddleImageIndex);
      setCurrentRightImage(nextRightImageIndex);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentLeftImage, currentMiddleImage, currentRightImage]);

  const leftImage = sliderImages[currentLeftImage].src;
  const middleImage = sliderImages[currentMiddleImage].src;
  const rightImage = sliderImages[currentRightImage].src;
  // The following code is for the slider arrows

  return (
    <div className={styles.rightContainer}>
      <div className={styles.spaceUpPattern} />
      <div className={styles.sliderOuterContainer}>
        <div className={styles.box}>
          <Image
            className={styles.frameImageDesktop}
            src="/Images/Home/Slider/Frame.png"
            alt="FRAMING"
            width={822.07}
            height={638.66}
            loading="eager"
            title="Alum Tec"
          />
          <div className={styles.frameImageMobile} title="Alum Tec" />
        </div>
        <div className={`${styles.box} ${styles.overlay}`}>
          <div className={styles.sliderOuterContainer}>
            <div className={styles.box}>
              <Image
                className={`${styles.middleImage} ${styles.active}`}
                src={middleImage}
                alt="2"
                width={618}
                height={552}
                loading="eager"
                title="2"
              />
            </div>
            <div className={`${styles.box} ${styles.overlay}`}>
              <Image
                className={`${styles.leftImage} ${styles.active}`}
                src={leftImage}
                alt="1"
                width={201}
                height={212}
                loading="eager"
                title="1"
              />
            </div>
            <div className={`${styles.box} ${styles.overlay}`}>
              <Image
                className={`${styles.rightImage} ${styles.active}`}
                src={rightImage}
                alt="3"
                width={201}
                height={212}
                loading="eager"
                title="3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RightContainerHB;
