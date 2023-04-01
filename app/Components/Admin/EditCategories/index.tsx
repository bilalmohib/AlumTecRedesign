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

function EditCategories() {
    const router = useRouter();

    const booksCategories = [
        {
            img: '/Images/Admin/EditData/books.png',
            title: 'Manage Books',
            link: '/Admin/Books',
        },
        {
            img: '/Images/Admin/EditData/events.jpg',
            title: 'Manage Events',
            link: '/books/695',
        },
        {
            img: '/Images/Admin/EditData/articles.jpg',
            title: 'Manage Articles',
            link: '/books/695',
        },
        {
            img: '/Images/Admin/EditData/videos.avif',
            title: 'Manage Videos',
            link: '/books/695',
        },
        {
            img: '/Images/Admin/EditData/gallery.jpeg',
            title: 'Manage Gallery',
            link: '/books/695',
        },
        {
            img: '/Images/Admin/EditData/news.png',
            title: 'Manage News',
            link: '/books/695',
        },
        {
            img: '/Images/Admin/EditData/users.jpg',
            title: 'Manage Users',
            link: '/books/695',
        },
        {
            img: '/Images/Admin/EditData/poetry.jpg',
            title: 'Manage Poetry',
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
                                color: "#fff",
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
                                },
                                background: `url(${item.img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                            }}
                            onClick={() => router.push(item.link)}
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
                    </Grid2>
                ))}
            </Grid2>
        </Box >
    );
}
export default EditCategories;