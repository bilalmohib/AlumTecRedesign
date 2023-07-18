import HBCardTopRightContainer from "./HBCardTopRightContainer";

import styles from "./style.module.css";

const HBCardRightContainer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inside_right_side_container}>
        <HBCardTopRightContainer />
        <p className={styles.paragraph_right_side_container}>
          The Startup Ultimate
          <br />
          Guide to Grow your
          <br />
          Business.
        </p>
        <div className={styles.learn_more_button}>
          <div className={styles.text_wrapper_7}>Learn More</div>
        </div>
      </div>
    </div>
  );
};
export default HBCardRightContainer;
