import styles from "./style.module.css";

const HomeBlogsList = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles.next3}>Next</div>
      <div className={styles.blogsChild} />
      <div className={styles.previous3}>Previous</div>
      <div className={styles.blogsItem} />
      <div className={styles.blogs1}>
        <div className={styles.blogsParent}>
          <div className={styles.blogs2}>BLOGS</div>
          <div className={styles.ourBlogs}>OUR BLOGS</div>
        </div>
        <img className={styles.patternsIcon4} alt="" src="/patterns4.svg" />
        <img className={styles.patternsIcon5} alt="" src="/patterns5.svg" />
        <div className={styles.blogsInner} />
        <div className={styles.rectangleDiv} />
        <div className={styles.blogsChild1} />
        <img
          className={styles.maskGroupIcon3}
          alt=""
          src="/mask-group3@2x.png"
        />
        <div className={styles.rightContent}>
          <b className={styles.theStartupUltimateContainer}>
            <p className={styles.aluminiumCurtainWall}>The Startup Ultimate</p>
            <p className={styles.aluminiumCurtainWall}>Guide to Grow your</p>
            <p className={styles.aluminiumCurtainWall}>Business.</p>
          </b>
          <div className={styles.byAdmin}>by Admin</div>
          <div className={styles.parent}>
            <div className={styles.div}>26</div>
            <div className={styles.july}>July</div>
          </div>
          <div className={styles.button}>
            <div className={styles.learnMore1}>Learn More</div>
          </div>
        </div>
        <div className={styles.blogsChild2} />
        <img
          className={styles.maskGroupIcon4}
          alt=""
          src="/mask-group4@2x.png"
        />
        <div className={styles.rightContent1}>
          <b className={styles.theStartupUltimateContainer}>
            <p className={styles.aluminiumCurtainWall}>The Startup Ultimate</p>
            <p className={styles.aluminiumCurtainWall}>Guide to Grow your</p>
            <p className={styles.aluminiumCurtainWall}>Business.</p>
          </b>
          <div className={styles.byAdmin}>by Admin</div>
          <div className={styles.group}>
            <div className={styles.div}>12</div>
            <div className={styles.july1}>July</div>
          </div>
          <div className={styles.button}>
            <div className={styles.learnMore1}>Learn More</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeBlogsList;
