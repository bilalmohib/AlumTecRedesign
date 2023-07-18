import Image from "next/image";

import styles from "./style.module.css";

const HBCardLeftContainer = () => {
  return (
    <div className={styles.container}>
      <Image
        className={styles.blog_image}
        src="/Images/Home/Blogs/blog1.png"
        width={270}
        height={400}
        alt="Mask group"
        title="First Mask"
      />
    </div>
  );
};
export default HBCardLeftContainer;
