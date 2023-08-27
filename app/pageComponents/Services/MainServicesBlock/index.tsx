// Importing components
import MSBBody from "./MSBBody";

// Importing types
import type { ServicesBlockProps } from "./types";

// Importing styles
import styles from "./style.module.css";

const MainServicesBlock = ({
  title,
  description,
  direction,
  background,
  image,
}: ServicesBlockProps) => {
  return (
    <div className={styles.container}>
      <section>
        <MSBBody
          title={title}
          description={description}
          direction={direction}
          background={background}
          image={image}
        />
      </section>
    </div>
  );
};
export default MainServicesBlock;
