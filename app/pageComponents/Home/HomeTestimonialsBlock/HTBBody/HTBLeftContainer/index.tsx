import HTBLeftSliderControls from "./HTBLeftSliderControls";

import styles from "./style.module.css";

const HTBLeftContainer = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Lets hear what <br /> they says</h1>
            <p className={styles.description}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate
            </p>
            <div className={styles.htb_left_slider_controls_block}>
                <HTBLeftSliderControls />
            </div>
        </div>
    )
}
export default HTBLeftContainer;