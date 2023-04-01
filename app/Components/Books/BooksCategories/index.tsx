import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import {
    Box,
    Button,
    ButtonBase,
    Link,
    Typography
} from "@mui/material";

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import styles from './style.module.css';

import { useRouter } from "next/router";

function BooksCategories() {
    const router = useRouter();

    const booksCategories = [
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Quran o Tafseer',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Hadees Usool e Hadees',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Aqaid',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Fehm-e-Deen',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Seerat',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Tasawwuf',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Mujzaat-o-Karamaat',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Akhlaaq-o-Aadab',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Halaat-o-Masail',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Darsi Kutab',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Sarf-o-Nahw',
            link: '/books/695',
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Aurado-o-wazaif',
            link: '/books/695',
        }
    ];

    return (
        <Box>
            <Grid2
                // sx={{ width: "100%", height: "auto", cursor: "pointer" }}
                spacing={2}
                // gap={8}
                container
            >
                {booksCategories.map((item: any, index: number) => (
                    <Grid2
                        xl={3} lg={3} md={3} sm={12} xs={12}
                        key={index}
                        height="auto"
                    >
                        <Box
                            sx={{
                                cursor: "pointer",
                                borderTop: "3px solid #06989e",
                                // borderBottom: "3px solid #ffffff",
                                color: "#19454c",
                                borderRadius: "5px",
                                display: "flex",
                                transition: "0.1s linear",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "200px",
                                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                                '&:hover': {
                                    // borderBottom: "3px solid #06989e",
                                    transition: "0.1s linear",
                                    color: "#06989e"
                                }
                            }}
                        >
                            <Typography
                                variant="h5"
                                color="inherit"
                                component="div"
                                className={`${styles.categoryTitle} text-center`}
                            >
                                {item.title}
                            </Typography>
                        </Box>
                        {/* <ButtonBase sx={{ width: "100%", height: "auto" }}> */}
                        {/* <Image
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            // auto="format"
                            // fit="crop"
                            style={{ height: 300, width: "100%" }}
                            width={248}
                            height={300}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                    aria-label={`info about ${item.title}`}
                                >
                                    <FavoriteBorderIcon />
                                </IconButton>
                            }
                        /> */}
                        {/* </ButtonBase> */}
                    </Grid2>
                ))}
            </Grid2>
        </Box >
    );
}
export default BooksCategories;