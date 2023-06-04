import HBBHeader from "../HomeBlogsBlock/HBBHeader";
import HomeBlogsList from "./HomeBlogsList";

import styles from "./style.module.css";

const HomeBlogsBlock = () => {
  return (
    <div className={styles.container}>
      <HBBHeader />

      <HomeBlogsList />
    </div>
  );
};
export default HomeBlogsBlock;
