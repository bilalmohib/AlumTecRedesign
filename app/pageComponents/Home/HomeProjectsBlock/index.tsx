import HomeProductsList from "./HomeProductsList";

import styles from "./style.module.css";

const HomeProjectsBlock = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>OUR PRODUCTS</h2>
            <p className={styles.paragraph}>AlumTec Glass and Aluminium offers a wide range of aluminium products and services. All our products comply with Dubai Green Building Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.</p>

            <HomeProductsList />
        </div>
    )
}
export default HomeProjectsBlock;