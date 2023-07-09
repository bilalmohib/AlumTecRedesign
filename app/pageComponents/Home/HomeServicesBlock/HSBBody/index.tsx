import { Grid } from "@mui/material";

import HSBBodyLeftSide from "./HSBBodyLeftSide";
import HSBBodyRightSide from "./HSBBodyRightSide";

import Image from "next/image";

import styles from "./style.module.css";

const HSBBody = () => {
    return (
        <Grid container>
            <Grid xs={4} md={4} sm={12}>
                <HSBBodyLeftSide />
            </Grid>
            <Grid xs={8} md={8} sm={12}>
                <HSBBodyRightSide />
            </Grid>
        </Grid>
    )
}
export default HSBBody;