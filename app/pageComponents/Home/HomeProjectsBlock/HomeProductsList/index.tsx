import { Button } from "@mui/material";
import styles from "./style.module.css";

const HomeProductsList = () => {
    return (
        <div className={styles.container}>
            <h1>Home Products List</h1>

            <Button
                variant="contained"
                color="primary"
                sx={{
                    "color": "#FFF",
                    "fontFamily": "Sharp Grotesk",
                    "fontSize": "16px",
                    "fontStyle": "normal",
                    "fontWeight": "400",
                    "lineHeight": "77px",
                    borderRadius: "0px",
                    backgroundColor: "#123E95",
                    width: "127px",
                    height: "36px",
                    '&:hover': {
                        backgroundColor: "#123E95",
                        color: "#FFFFFF",
                    },
                }}
                onClick={() => {
                    console.log("Button clicked");
                }}
            >
                View All
            </Button>
        </div>
    )
}
export default HomeProductsList;