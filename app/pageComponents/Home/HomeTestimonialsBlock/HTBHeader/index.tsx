import styles from "./style.module.css";

const HTBHeader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.insideContainer}>
                <div className={styles.box}>
                    <h2
                        className={styles.heading_overlay_text}
                    >
                        TESTIMONIALS
                    </h2>
                </div>
                <div className={
                    `${styles.box} ${styles.overlay}`
                }>
                    <h2
                        className={styles.heading_text}
                    >
                        OUR TESTIMONIALS
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default HTBHeader;