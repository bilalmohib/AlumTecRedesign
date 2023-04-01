import React, { useState, useEffect } from 'react';

import EditCategories from '@/app/Components/Admin/EditCategories';
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

import styles from "./Admin.module.css";

const Admin = () => {
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
                        Welcome to Admin Panel
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
                                'Welcome to Admin Panel',
                                1000,
                                'You can add, edit and delete books',
                                1000,
                                `
                                You can create, edit and delete categories.
                                `,
                                1000,
                                `
                                You can create, edit and delete events.
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
                sx={{
                    marginTop: '2rem',
                }}
            >
                <Grid2 container>
                    <Grid2 xs={12} md={12} sm={12}>
                        <Box className={styles.main}>
                            <EditCategories />
                        </Box>
                    </Grid2>
                </Grid2>
            </Box>

            <Box className={styles.footer}>
                <Footer />
            </Box>
        </Box>
    )
}
export default Admin;