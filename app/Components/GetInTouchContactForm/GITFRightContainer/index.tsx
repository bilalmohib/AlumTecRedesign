import GITFContactFormCard from "./GITFContactFormCard";
import styles from "./style.module.css";

const GITFRightContainer = () => {
    return (
        <div className={styles.container}>
            {/* box */}
            <div className={styles.box}></div>
            {/* box overlay */}
            <div className={`${styles.box} ${styles.overlay}`}>
                <GITFContactFormCard />
            </div>
        </div>
    )
}
export default GITFRightContainer;