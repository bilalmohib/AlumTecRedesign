import { TextField } from "@mui/material";

interface IFormInput {
    item: number
}

const FormInput = () => {
    return (
        <TextField
            id="outlined-basic"
            label=""
            placeholder='Name'
            type='text'
            value={''}
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
                "lineHeight": "normal"
            }}
        />
    )
}
export default FormInput;