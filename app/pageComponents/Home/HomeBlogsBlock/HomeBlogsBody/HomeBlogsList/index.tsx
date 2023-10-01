import Image from "next/image";

import styles from "./style.module.css";
import HBCard from "./HBCard";

interface HomeBlogsListProps {}

const HomeBlogsList = (blogs: HomeBlogsListProps) => {
  return (
    <div className={styles.container}>
      <div className="h-auto relative w-full">
        <HBCard />
      </div>
      <div className="h-auto relative w-full ml-12">
        <HBCard />
      </div>
    </div>
  );
};
export default HomeBlogsList;
