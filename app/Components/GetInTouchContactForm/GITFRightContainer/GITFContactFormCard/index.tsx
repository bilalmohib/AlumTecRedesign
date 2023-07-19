import TextField from '@mui/material/TextField';

import styles from "./style.module.css";

const GITFContactFormCard = () => {
    return (
        <div className={styles.container}>
            <h1>Form</h1>
            <div className={styles.formContainer}>
                <h3 className={styles.form_header}>Get in Touch</h3>
                <TextField
                    id="outlined-basic"
                    label=""
                    placeholder='Name'
                    type='text'
                    value={''}
                    variant="outlined"
                    className={styles.form_input}
                    sx={{
                        borderRadius: "5px",
                        background: "#FFFFFF",
                        width: "100%",
                        height: "54px",
                        "color": "rgba(0, 0, 0, 0.56)",
                        "fontFamily": '"Sharp Grotesk-Medium20", Helvetica',
                        "fontSize": "16px",
                        "fontStyle": "normal",
                        "fontWeight": "400",
                        "lineHeight": "normal"
                    }}
                />
            </div>
        </div>
    )
}
export default GITFContactFormCard;