import React, { useState, useEffect } from "react";

import {
    Box,
    Button,
    IconButton,
    Typography
} from "@mui/material";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

import styles from "./styles.module.css";

const FeaturedBook = () => {
    return (
        <Box className={styles.FeaturedBookContainer}>
            <Box className={styles.left}>
                <Box component="section" className={styles.leftFeaturedBookImage}>
                </Box>
            </Box>
            <Box className={styles.right}>
                <Typography variant="h2" className={styles.headingBook}>
                    Faizan e Khwaja Ghareeb Nawaz
                </Typography>
                <Typography variant="h2" className={styles.headingBookUrdu}>
                    فیضان خواجہ غریب نواز رحمۃ اللہ تعالی علیہ
                </Typography>
                <Typography variant="h6">
                    <b>
                        Total Pages
                    </b>: <span style={{ fontWeight: 300 }}>11</span>
                </Typography>
                <Typography variant="h6">
                    <b>
                        Language
                    </b>: <span style={{ fontWeight: 300 }}>Urdu</span>
                </Typography>
                <Typography variant="h6">
                    <b>
                        Author
                    </b>: <span style={{ fontWeight: 300 }}>Maulana Muhammad Ilyas Qadri</span>
                </Typography>
                <Typography variant="h6">
                    <b>
                        Description
                    </b>:<span style={{ fontWeight: 300 }}> اس رسالے میں آپ پڑھ سکیں گے حصولِ علم کے لیے سفر، بارگاہ ِرِسالت سے ہند کی سُلطانی، پڑوسیوں سے حسن سلوک، مزار شريف اور عرس مبارک اور بہت کچھ۔ ۔ ۔ ۔</span>
                </Typography>
                <Box className={styles.buttons}>
                    <Button variant="contained" className={styles.buttonRead}>
                        Read Online
                    </Button>
                    <Button variant="contained" sx={{marginLeft:"30px"}} className={styles.buttonDownload}>
                        Download
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
export default FeaturedBook;