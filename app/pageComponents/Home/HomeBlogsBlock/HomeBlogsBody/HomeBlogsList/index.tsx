import Image from "next/image";

import styles from "./style.module.css";
import HBCard from "./HBCard";

interface HomeBlogsListProps {}

const HomeBlogsList = (blogs: HomeBlogsListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Image
          className={styles.leftPatternsImage}
          alt="Left Patterns Image"
          src="/Images/Home/Blogs/Patterns.png"
          width={112}
          height={152}
          loading="eager"
        />
        <Image
          className={styles.rightPatternsImage}
          alt="Right Patterns Image"
          src="/Images/Home/Blogs/Patterns.png"
          width={112}
          height={152}
          loading="eager"
        />
        <div className={styles.frameLeftBlogImage} />
        <div className={styles.leftHBCard}>
          <HBCard />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.frameRightBlogImage} />
        <div className={styles.rightHBCard}>
          <HBCard />
        </div>
      </div>
      {/* <div className={styles.rightContainer}>
        <div className={styles.rectangle_4} />
        <div className={styles.rectangle_5} />
        <Image
          className={styles.mask_group_2}
          alt="Mask group"
          title="Second Mask"
          width={270}
          height={400}
          src="/Images/Home/Blogs/blog2.png"
        />
        <div className={styles.right_content_2}>
          <p className={styles.the_startup_ultimate}>
            The Startup Ultimate
            <br />
            Guide to Grow your
            <br />
            Business.
          </p>
          <div className={styles.text_wrapper_4}>by Admin</div>
          <div className={styles.group_3}>
            <div className={styles.text_wrapper_5}>12</div>
            <div className={styles.text_wrapper_8}>July</div>
          </div>
          <div className={styles.button}>
            <div className={styles.text_wrapper_7}>Learn More</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default HomeBlogsList;
