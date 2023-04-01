import React, { useState, useEffect } from 'react';

import BooksCollection from "@/app/Components/Home/BooksCollection";
import BooksCategories from "@/app/Components/Books/BooksCategories";
import FeaturedBook from "@/app/Components/Books/FeaturedBook";
import BooksSlider from "@/app/Components/Books/BooksSlider";
import Navbar from "@/app/Components/Navbar";
import TopNav from "@/app/Components/TopNav";
import Footer from "@/app/Components/Footer";

import SearchIcon from '@mui/icons-material/Search';

import {
    Box,
    Typography,
    TextField,
    Button
} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import { TypeAnimation } from 'react-type-animation';

import styles from "../styles/Pages/Books.module.css";

const Books = () => {
    // detect focus
    const [focus, setFocus] = useState(false);

    return (
        <Box component={"section"}>
            <Box component={"div"}>
                <TopNav />
            </Box>
            <Navbar />
            <header className={styles.header}>
                <div className={styles.title}>
                    <h1>
                        Welcome to Shah Jalal Books Library
                    </h1>
                    <p style={{
                        height: '100px',
                        width: '100%',
                        maxWidth: '800px',
                        minWidth: '300px',
                        // border: '1px solid red',
                        margin: '0 auto',
                    }}>
                        <TypeAnimation
                            // Same String at the start will only be typed once, initially
                            sequence={[
                                'This online books library contains over 1000 books in Urdu and English languages. ',
                                1000,
                                'Accees from any where across the globe',
                                1000,
                                `
                                You can download these books in PDF format and read them offline and online.
                                `,
                                1000,
                                `
                                We have books on Fiqh, Hadith, Tafseer, Seerat, Fehme-Deen.
                                `,
                                1000,
                            ]}
                            speed={50} // Custom Speed from 1-99 - Default Speed: 40
                            style={{ fontSize: '1.3em' }}
                            wrapper="span" // Animation will be rendered as a <span>
                            repeat={Infinity} // Repeat this Animation Sequence infinitely
                        />
                    </p>
                </div>
            </header>
            <Box
                component={"div"}
                className="container"
            >
                <Grid2 container spacing={2}>
                    <Grid2 xs={12} md={12} sm={12}>
                        <Box>
                            <Box
                                sx={{
                                    width: '100%',
                                    backgroundColor: 'white',
                                    borderRadius: '5px',
                                    marginBottom: '10px',
                                    display: "flex",
                                    height: "50px",
                                    border: "2px solid #e0e0e0",
                                    transition: 'all 0.3s ease',
                                    // Change border color on focus
                                    '&:focus-within': {
                                        border: '2px solid #2e2ab5',
                                        transition: 'all 0.3s ease',
                                        borderRadius: '5px',
                                    },
                                }}
                            >
                                <Box sx={{
                                    // border: "1px solid red",
                                    marginRight: "10px",
                                    width: "60px",
                                    borderTopLeftRadius: "2px",
                                    borderBottomLeftRadius: "2px",
                                    backgroundColor: (focus) ? "#2e2ab5" : "#e0e0e0",
                                    transition: 'all 0.3s ease',
                                    // Change background color on parent box focus
                                    paddingLeft: "8.5px",
                                }}>
                                    <SearchIcon
                                        sx={{
                                            color: "white",
                                            // border: "1px solid red",
                                            height: "100%",
                                            fontSize: "30px",
                                            width: "40px",
                                            // marginLeft: "10px",

                                        }}
                                    />
                                </Box>
                                <Box sx={{
                                    // border: "1px solid red",
                                    width: "100%",
                                }}>
                                    <TextField
                                        onFocus={() => setFocus(true)}
                                        onBlur={() => setFocus(false)}
                                        InputProps={{ disableUnderline: true }}
                                        sx={{
                                            '& legend': { display: 'none' }, '& fieldset': { top: 0 },
                                            width: '100%',
                                            height: "50px",
                                            // border: "1px solid red",
                                            // paddingTop: "15px",
                                            '& .MuiInputBase-input': {
                                                height: "40px",
                                                // paddingTop: "5px",
                                                fontSize: "22px",
                                                // Hide the bottom border
                                                '&::after': {
                                                    borderBottom: 'none',
                                                },
                                                // On focus. Hide the bottom border
                                                '&:focus::after': {
                                                    borderBottom: 'none',
                                                }

                                            },
                                        }}
                                        id="filled-search"
                                        //label="Search for books"
                                        type="search"
                                        placeholder="Search for books"
                                        variant="standard"
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Grid2>

                    <Grid2 xs={12} md={12} sm={12}>
                    <Box className="d-flex justify-content-between">
                            <Typography
                                variant={"h5"}
                                component={"h5"}
                                className={styles.heading}
                            >
                                New Books
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: "1.2rem",
                                    // marginBottom: "1rem",
                                    fontWeight: "lighter",
                                    fontSize: "1.2rem",
                                    backgroundColor: "#2726b5",
                                    textTransform: "none",
                                    color: "white",
                                    height: "45px",
                                    borderRadius: "5px",
                                    marginRight: "10px",
                                    '&:hover': {
                                        backgroundColor: "#40448a",
                                        color: "white",
                                    },
                                }}
                            >
                                View All
                            </Button>
                        </Box>
                        <BooksSlider />
                    </Grid2>

                    {/* Featured Books */}
                    <Grid2 xs={12} md={12} sm={12}>
                        <Typography
                            variant={"h5"}
                            component={"h5"}
                            className={styles.heading}
                        >
                            Featured Book
                        </Typography>
                        <FeaturedBook />
                    </Grid2>

                    <Grid2 xs={12} md={12} sm={12}>
                        <Box className="d-flex justify-content-between">
                            <Typography
                                variant={"h5"}
                                component={"h5"}
                                className={styles.heading}
                            >
                                Read Books By Category
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: "1.2rem",
                                    // marginBottom: "1rem",
                                    fontWeight: "lighter",
                                    fontSize: "1.2rem",
                                    backgroundColor: "#2726b5",
                                    textTransform: "none",
                                    color: "white",
                                    height: "45px",
                                    borderRadius: "5px",
                                    marginRight: "10px",
                                    '&:hover': {
                                        backgroundColor: "#40448a",
                                        color: "white",
                                    },
                                }}
                            >
                                View All
                            </Button>
                        </Box>
                        <BooksCategories />
                    </Grid2>

                    <Grid2 xs={12} md={12} sm={12}>
                        <Box className="d-flex justify-content-between">
                            <Typography
                                variant={"h5"}
                                component={"h5"}
                                className={styles.heading}
                            >
                                Month Of Rajab Ul Murajjab
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    marginTop: "1.2rem",
                                    // marginBottom: "1rem",
                                    fontWeight: "lighter",
                                    fontSize: "1.2rem",
                                    backgroundColor: "#2726b5",
                                    textTransform: "none",
                                    color: "white",
                                    height: "45px",
                                    borderRadius: "5px",
                                    marginRight: "10px",
                                    '&:hover': {
                                        backgroundColor: "#40448a",
                                        color: "white",
                                    },
                                }}
                            >
                                View All
                            </Button>
                        </Box>
                        <BooksSlider />
                    </Grid2>

                    <Grid2 xs={12} md={12} sm={12}>
                        <Typography
                            variant={"h5"}
                            component={"h5"}
                            className={styles.heading}
                        >
                            All Books
                        </Typography>
                        <BooksCollection />
                    </Grid2>
                </Grid2>
            </Box>
            <Box className={styles.footer}>
                <Footer />
            </Box>
        </Box>
    )
}
export default Books;