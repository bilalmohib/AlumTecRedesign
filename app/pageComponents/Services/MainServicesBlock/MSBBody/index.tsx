import MSBBodyLeftSide from "./MSBBodyLeftSide";
import MSBBodyRightSide from "./MSBBodyRightSide";

import { ServicesBlockProps } from "../types";

import styles from "./style.module.css";

const MSBBody = ({
  title,
  description,
  direction,
  background,
  image
}: ServicesBlockProps) => {
  return (
    <div
      className={`${styles.container} ${
        direction === "left" ? "flex-row" : "flex-row-reverse"
      }
          ${background ? background : "bg-white"}`}
    >
      <div className={styles.leftContainer}>
        <MSBBodyLeftSide image={image} />
      </div>
      <div className={styles.rightContainer}>
        <MSBBodyRightSide title={title} description={description} />
      </div>
    </div>
  );
};
export default MSBBody;
