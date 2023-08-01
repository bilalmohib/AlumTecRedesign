import { TextField } from "@mui/material";
import { FormInputType } from "../GetInTouchContactForm/GITFRightContainer/GITFContactFormCard/types";

const FormInput = (props: FormInputType) => {
    const {
        type,
        placeholder,
        value,
        handleValueChange,
        className
    } = props;

    return (
        <TextField
            label=""
            placeholder={(placeholder ? placeholder : "")}
            type={type}
            value={value}
            onChange={handleValueChange}
            className={(className ? className : "")}
            variant="outlined"
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
                "lineHeight": "normal",
            }}
        />
    )
}
export default FormInput;