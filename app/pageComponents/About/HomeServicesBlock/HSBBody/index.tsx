import HSBBodyLeftSide from "./HSBBodyLeftSide";
import HSBBodyRightSide from "./HSBBodyRightSide";

import styles from "./style.module.css";

const HSBBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <HSBBodyLeftSide />
      </div>
      <div className={styles.rightContainer}>
        <HSBBodyRightSide />
      </div>
    </div>
  );
};
export default HSBBody;
