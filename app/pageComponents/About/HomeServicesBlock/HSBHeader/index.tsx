import styles from "./style.module.css";

const HSBHeader = () => {
    return (
        <div className={styles.servicesHeadingContainer}>
            <div className={styles.sliderOuterContainer}>
                <div className={styles.box}>
                    <h2
                        className={styles.servicesHeadingOverlay}
                    >
                        Services
                    </h2>
                </div>
                <div className={
                    `${styles.box} ${styles.overlay}`
                }>
                    <h2
                        className={styles.servicesHeading}
                    >
                        OUR SERVICES
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default HSBHeader;