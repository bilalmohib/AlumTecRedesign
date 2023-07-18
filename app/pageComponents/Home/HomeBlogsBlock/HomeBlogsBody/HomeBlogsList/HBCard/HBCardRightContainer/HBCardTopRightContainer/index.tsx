import styles from "./style.module.css";

const HBCardTopRightContainer = () => {
  return (
    <div className={styles.top_right_container}>
      <div className={styles.blog_by_text}>by Admin</div>
      <div className={styles.container_blog_posted_date}>
        <div className={styles.text_blog_posted_day}>26</div>
        <div className={styles.text_blog_posted_month}>July</div>
      </div>
    </div>
  );
};
export default HBCardTopRightContainer;