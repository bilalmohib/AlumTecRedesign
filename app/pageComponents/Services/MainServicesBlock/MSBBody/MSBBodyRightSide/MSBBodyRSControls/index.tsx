import { useState } from "react";

import Image from "next/image";

import styles from "./style.module.css";

const MSBBodyRSControls = () => {
    const [isActiveSliderArrow, setIsActiveSliderArrow] = useState<string>("");

    return (
        <div
            className={styles.servicesSliderArrowContainer}
        >
            <div
                className={styles.leftAC}
            >
                <Image
                    priority
                    src="/Images/Home/Services/ServicesSlider/Left.svg"
                    width={20}
                    height={20}
                    className={
                        `${styles.sliderArrowLeft} ${(isActiveSliderArrow === "left" ? styles.sliderArrowActive : styles.sliderArrowDeActive)}`
                    }
                    alt="Left"
                />

                <p className={
                    `${styles.sliderArrowTextLeft}
                    ${(isActiveSliderArrow === "left" ? styles.sliderArrowTextActive : styles.sliderArrowTextDeActive)}
                    `
                }
                >
                    Previous
                </p>
            </div>

            <div
                className={styles.rightAC}
            >
                <p className={
                    `${styles.sliderArrowTextRight}
                    ${(isActiveSliderArrow === "right" ? styles.sliderArrowTextActive : styles.sliderArrowTextDeActive)}
                    `
                }
                >
                    Next
                </p>

                <Image
                    priority
                    src="/Images/Home/Services/ServicesSlider/Right.svg"
                    width={20}
                    height={20}
                    className={
                        `${styles.sliderArrowRight} ${(isActiveSliderArrow === "right" ? styles.sliderArrowActive : styles.sliderArrowDeActive)}`
                    }
                    alt="Right"
                />
            </div>
        </div>
    )
}
export default MSBBodyRSControls;