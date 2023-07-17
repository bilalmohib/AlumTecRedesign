import styles from "./style.module.css";

interface HomeBlogsListProps {}

const HomeBlogsList = (blogs: HomeBlogsListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <img
          className={styles.patterns}
          alt="Patterns"
          src="https://generation-sessions.s3.amazonaws.com/03d30fdde0ea5425af3c0103a7d5bf3c/img/patterns-1@2x.png"
        />
        <img
          className={styles.img}
          alt="Patterns"
          src="https://generation-sessions.s3.amazonaws.com/03d30fdde0ea5425af3c0103a7d5bf3c/img/patterns-1@2x.png"
        />
        <div className={styles.rectangle_2} />
        <div className={styles.rectangle_3} />
        <img
          className={styles.mask_group}
          alt="Mask group"
          src="https://generation-sessions.s3.amazonaws.com/03d30fdde0ea5425af3c0103a7d5bf3c/img/mask-group-1@2x.png"
        />
        <div className={styles.right_content}>
          <p className={styles.the_startup_ultimate}>
            The Startup Ultimate
            <br />
            Guide to Grow your
            <br />
            Business.
          </p>
          <div className={styles.text_wrapper_4}>by Admin</div>
          <div className={styles.group_2}>
            <div className={styles.text_wrapper_5}>26</div>
            <div className={styles.text_wrapper_6}>July</div>
          </div>
          <div className={styles.button}>
            <div className={styles.text_wrapper_7}>Learn More</div>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rectangle_4} />
        <div className={styles.rectangle_5} />
        <img
          className={styles.mask_group_2}
          alt="Mask group"
          src="https://generation-sessions.s3.amazonaws.com/03d30fdde0ea5425af3c0103a7d5bf3c/img/mask-group@2x.png"
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
      </div>
    </div>
  );
};
export default HomeBlogsList;
