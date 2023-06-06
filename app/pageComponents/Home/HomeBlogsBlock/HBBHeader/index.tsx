import styles from "./style.module.css";

const HBBHeader = () => {
  return (
    <div className={styles.headingContainer}>
      <div className={styles.sliderOuterContainer}>
        <div className={styles.box}>
          <h2 className={styles.headingOverlay}>BLOGS</h2>
        </div>
        <div className={`${styles.box} ${styles.overlay}`}>
          <h2 className={styles.heading}>OUR BLOGS</h2>
        </div>
      </div>
    </div>
  );
};
export default HBBHeader;
