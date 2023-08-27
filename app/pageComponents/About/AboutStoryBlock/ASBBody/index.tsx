import ASBBodyLeftSide from "./ASBBodyLeftSide";
import ASBBodyRightSide from "./ASBBodyRightSide";

import styles from "./style.module.css";

const ASBBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <ASBBodyLeftSide />
      </div>
      <div className={styles.rightContainer}>
        <ASBBodyRightSide />
      </div>
    </div>
  );
};
export default ASBBody;
