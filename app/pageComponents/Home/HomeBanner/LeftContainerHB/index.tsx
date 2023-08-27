import Button from "@mui/material/Button";

import { montserratFont } from "@/utils/fonts";

import styles from "./style.module.css";

const LeftContainerHB = () => {
  return (
    <div className={styles.leftContainer}>
      <div className={styles.insideLeftContainer}>
        <div className={styles.dash_line}></div>
        <h3 className={`${styles.heading} ${montserratFont.variable}`}>
          Aluminium curtain wall, windows and doors are our speciality.
        </h3>
        <h3 className={`${styles.subHeading} ${montserratFont.variable}`}>
          Glazing solutions are our passion.
        </h3>
        <Button className={styles.readMoreButton}>Read more</Button>
      </div>
    </div>
  );
};
export default LeftContainerHB;
