import TestimonialPostedByBlock from "./TestimonialPostedByBlock";
import styles from "./style.module.css";

const HTBRightContainer = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.testimonial_title}>Here, excellent service is provided</h1>
            <p className={styles.testimonial_description}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
                to demonstrate the visual form of a document or a typeface without
            </p>

            <div className={styles.testimonial_posted_by_block}>
                <TestimonialPostedByBlock />
            </div>
        </div>
    )
}
export default HTBRightContainer;