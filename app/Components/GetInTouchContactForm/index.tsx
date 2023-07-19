import GITFLeftContainer from "./GITFLeftContainer";
import GITFRightContainer from "./GITFRightContainer";
import styles from "./style.module.css";

const GetInTouchContactForm = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <GITFLeftContainer />
            </div>
            <div className={styles.right_container}>
                <GITFRightContainer />
            </div>
        </div>
    )
}
export default GetInTouchContactForm;