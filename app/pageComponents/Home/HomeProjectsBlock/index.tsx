import HPBHeader from "./HPBHeader";
import HomeProductsList from "./HomeProductsList";

import styles from "./style.module.css";

const HomeProjectsBlock = () => {
  return (
    <div className={styles.container}>
      <HPBHeader />
      
      <HomeProductsList />
    </div>
  );
};
export default HomeProjectsBlock;
