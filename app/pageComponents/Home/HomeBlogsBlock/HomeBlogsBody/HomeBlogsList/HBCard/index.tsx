import Image from "next/image";

import HBCardRightContainer from "./HBCardRightContainer";

import styles from "./style.module.css";
import HBCardLeftContainer from "./HBCardLeftContainer";

const HBCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSideContainer}>
        <HBCardLeftContainer />
      </div>
      <div className={styles.rightSideContainer}>
        <HBCardRightContainer />
      </div>
    </div>
  );
};
export default HBCard;
