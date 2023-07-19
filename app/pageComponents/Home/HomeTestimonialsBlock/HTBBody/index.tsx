import HTBLeftContainer from "./HTBLeftContainer";
import HTBRightContainer from "./HTBRightContainer";
import styles from "./style.module.css";

const HTBBody = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <HTBLeftContainer />
            </div>
            <div className={styles.right_container}>
                <HTBRightContainer />
            </div>
        </div>
    )
}
export default HTBBody;