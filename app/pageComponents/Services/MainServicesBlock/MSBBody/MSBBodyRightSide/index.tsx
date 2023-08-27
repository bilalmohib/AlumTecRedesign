import { MSBBodyRightSideProps } from "../../types";

import MSBBodyRSControls from "./MSBBodyRSControls";

import styles from "./style.module.css";

const MSBBodyRightSide = ({
  title,
  description
}: MSBBodyRightSideProps) => {
  return (
    <div className={styles.servicesCardContainer}>
      <div className={styles.mobileControls}>
        <MSBBodyRSControls />
      </div>
      <h2 className={styles.servicesTitle}>{title}</h2>
      <div
        className={styles.servicesDescription}
        dangerouslySetInnerHTML={{ __html: description }}
      />

      <div className={styles.desktopControls}>
        <MSBBodyRSControls />
      </div>
    </div>
  );
};
export default MSBBodyRightSide;
