import Image from "next/image";

import styles from "./style.module.css";

const AMBBodyLeftSide = () => {
  return (
    <div className={`${styles.sliderOuterContainer} ${styles.container}`}>
      <div className={styles.box}>
        <div className={styles.containerTlPatternImage}>
          <Image
            className={styles.tlPatternImage}
            src="/Images/Home/Services/Patterns.png"
            alt="Pattern Left"
            width={112}
            height={152}
            loading="eager"
          />
        </div>
        <div className={styles.containerBrPatternImage}>
          <Image
            className={styles.brPatternImage}
            src="/Images/Home/Services/Patterns.png"
            alt="Pattern Right"
            width={112}
            height={152}
            loading="eager"
          />
        </div>
      </div>
      <div className={`${styles.box} ${styles.overlay}`}>
        {/* Image overlay  */}
        <div className={styles.sliderOuterContainer}>
          <div className={styles.box}>
            <Image
              className={styles.borderServicesImage}
              src="/Images/Home/Services/Frame.png"
              alt="Pattern Right"
              width={431}
              height={476}
              loading="eager"
            />
          </div>
          <div className={`${styles.box} ${styles.overlay}`}>
            <div>
              <Image
                className={styles.ServicesImage}
                src="/Images/Home/Services/Design.png"
                alt="Design Image"
                width={489}
                height={500}
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AMBBodyLeftSide;
