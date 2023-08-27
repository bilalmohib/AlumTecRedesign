import styles from "./style.module.css";

const MSBHeader = () => {
    return (
        <div className={styles.servicesHeadingContainer2}>
            <div className={styles.sliderOuterContainer2}>
                <div className={styles.box2}>
                    <h2
                        className={styles.servicesHeadingOverlay2}
                    >
                        Services
                    </h2>
                </div>
                <div className={
                    `${styles.box2} ${styles.overlay2}`
                }>
                    <h2
                        className={styles.servicesHeading2}
                    >
                        OUR SERVICES
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default MSBHeader;