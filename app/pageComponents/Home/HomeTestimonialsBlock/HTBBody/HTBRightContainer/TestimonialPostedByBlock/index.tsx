import Image from "next/image";

import styles from "./style.module.css";

const TestimonialPostedByBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left_container}>
                <Image
                    src="/Images/Testimonials/testimonial_by.png"
                    alt="testimonial posted by"
                    title="testimonial posted by"
                    width={70}
                    height={70}
                    loading="eager"
                    className={styles.testimonial_by_image}
                />
            </div>
            <div className={styles.right_container}>
                <h2 className={styles.postedBy_text}>Salem Russel</h2>
                <p className={styles.designation}>Director at zooq</p>
            </div>
        </div>
    )
}
export default TestimonialPostedByBlock;