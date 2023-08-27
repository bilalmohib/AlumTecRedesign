import AMBBodyLeftSide from "./AMBBodyLeftSide";
import AMBBodyRightSide from "./AMBBodyRightSide";
import AMBBodyRSControls from "./AMBBodyRightSide/AMBBodyRSControls";

import styles from "./style.module.css";

const AMBBody = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <AMBBodyLeftSide />
      </div>
      <div className={styles.rightContainer}>
        <AMBBodyRightSide />
        
      </div>
    </div>
  );
};
export default AMBBody;
