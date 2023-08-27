import styles from "./style.module.css";

const ASBHeader = () => {
    return (
        <div className={styles.servicesHeadingContainer}>
            <div className={styles.sliderOuterContainer}>
                <div className={styles.box}>
                    <h2
                        className={`${styles.servicesHeadingOverlay} font-sharp`}
                    >
                       Our Story
                    </h2>
                </div>
                <div className={
                    `${styles.box} ${styles.overlay}`
                }>
                    <h2
                        className={`${styles.servicesHeading} font-sharp`}
                    >
                        Our Story
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default ASBHeader;