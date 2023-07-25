import TextField from '@mui/material/TextField';

import styles from "./style.module.css";
import FormInput from '@/app/Components/FormInput';

const GITFContactFormCard = () => {
    return (
        <div className={styles.container}>
            <h1>Form</h1>
            <div className={styles.formContainer}>
                <h3 className={styles.form_header}>Get in Touch</h3>
                {[1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <div key={index}>
                            <FormInput
                                
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default GITFContactFormCard;