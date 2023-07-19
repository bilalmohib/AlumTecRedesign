import { Button } from "@mui/material";

import Image from "next/image";

import styles from "./style.module.css";

const HTBLeftSliderControls = () => {
    return (
        <div className={styles.container}>
            <Button
                variant="contained"
                color="primary"
                sx={{
                    width: 128,
                    height: 60,
                    background: "#000000",
                    '&:hover': {
                        background: "#000000"
                    }
                }}
            >
                <Image
                    width={26}
                    height={22}
                    className={styles.left_arrow_svg}
                    alt="left arrow svg"
                    title="left arrow svg"
                    src="/SVGS/PAGES/HOME/Section/Testimonials/left_htb_slider_arrow.svg"
                />
            </Button>
            <Button
                variant="contained"
                color="primary"
                sx={{
                    width: 128,
                    height: 60,
                    marginLeft: "25px",
                    background: "#11265F",
                    '&:hover': {
                        background: "#11265F",
                    }
                }}
            >
                <Image
                    width={26}
                    height={22}
                    className={styles.right_arrow_svg}
                    alt="left arrow svg"
                    title="left arrow svg"
                    src="/SVGS/PAGES/HOME/Section/Testimonials/right_htb_slider_arrow.svg"
                />
            </Button>
        </div>
    )
}
export default HTBLeftSliderControls;