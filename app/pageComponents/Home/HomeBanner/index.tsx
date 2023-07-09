import { useState, useEffect } from "react";

import { getNextImageIndex } from "./methods";

import {
    Box,
    Typography,
    Button,
    Grid
} from "@mui/material";

import Image from "next/image";

import LeftContainerHB from "./LeftContainerHB";
import RightContainerHB from "./RightContainerHB";

import styles from "./style.module.css";
import HomeServicesBlock from "../HomeServicesBlock";

const HomeBanner = () => {
    const [isActiveSliderArrow, setIsActiveSliderArrow] = useState<string>("");

    return (
        <div className={styles.customContainer}>
            <Grid container spacing={0}>
                <Grid xs={6} md={6} sm={12}>
                    <LeftContainerHB />
                </Grid>
                <Grid xs={6} md={6} sm={12}>
                    <RightContainerHB />
                </Grid>

                <HomeServicesBlock />
            </Grid>
        </div >
    )
}
export default HomeBanner;