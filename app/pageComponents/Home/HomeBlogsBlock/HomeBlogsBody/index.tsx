import { useEffect, useState } from "react";
import styles from "./style.module.css";
import HBCSlider from "./HBCSlider";
import HomeBlogsList from "./HomeBlogsList";

const HomeBlogsBody = () => {
  return (
    <div className={styles.container}>
      <HomeBlogsList />
      <HBCSlider />
    </div>
  );
};

export default HomeBlogsBody;
