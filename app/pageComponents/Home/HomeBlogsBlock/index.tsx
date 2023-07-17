import HBBHeader from "../HomeBlogsBlock/HBBHeader";
import HomeBlogsBody from "./HomeBlogsBody";

import styles from "./style.module.css";

const HomeBlogsBlock = () => {
  return (
    <div className={styles.container}>
      <HBBHeader />

      <HomeBlogsBody />
    </div>
  );
};
export default HomeBlogsBlock;
