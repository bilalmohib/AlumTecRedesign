import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';
import {
    Box,
    Button,
    ButtonBase
} from "@mui/material";

import { useRouter } from "next/router";

function BooksCollection() {
    const router = useRouter();

    const itemData = [
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Salato Salam par iteraz kiyon',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/829.jpg',
            title: 'تیرے دشمن سے کیا رشتہ ہمارا یارسول الل',
            author: 'Faiz-e-Millat, Mufti of AhleSunnat Barelvi, Great Debater',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Salato Salam par iteraz kiyon',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/829.jpg',
            title: 'تیرے دشمن سے کیا رشتہ ہمارا یارسول الل',
            author: 'Faiz-e-Millat, Mufti of AhleSunnat Barelvi, Great Debater',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Salato Salam par iteraz kiyon',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/829.jpg',
            title: 'تیرے دشمن سے کیا رشتہ ہمارا یارسول الل',
            author: 'Faiz-e-Millat, Mufti of AhleSunnat Barelvi, Great Debater',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Salato Salam par iteraz kiyon',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/829.jpg',
            title: 'تیرے دشمن سے کیا رشتہ ہمارا یارسول الل',
            author: 'Faiz-e-Millat, Mufti of AhleSunnat Barelvi, Great Debater',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/695.jpg',
            title: 'Salato Salam par iteraz kiyon',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/829.jpg',
            title: 'تیرے دشمن سے کیا رشتہ ہمارا یارسول الل',
            author: 'Faiz-e-Millat, Mufti of AhleSunnat Barelvi, Great Debater',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/376.jpg',
            title: 'Haan Ham Sunni Hain',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/410.jpg',
            title: 'Hazrat Umar Radiallahu Anhu Ka Ilmi Zauq',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/451.jpg',
            title: 'Islam ko darpesh Challenges',
            author: 'Dr Ashraf Asif Jalali',
            featured: true,
        },
        {
            img: 'https://bookslibrary.net/lib/wp-content/uploads/591.jpg',
            title: 'Birthday of Prophet, Conflicted Issues',
            author: 'Dr Ashraf Asif Jalali',
            featured: false,
        }
        // {
        //     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        //     title: 'Coffee',
        //     author: '@nolanissac',
        //     cols: 2,
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        //     title: 'Hats',
        //     author: '@hjrc33',
        //     cols: 2,
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        //     title: 'Honey',
        //     author: '@arwinneil',
        //     rows: 2,
        //     cols: 2,
        //     featured: true,
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        //     title: 'Basketball',
        //     author: '@tjdragotta',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        //     title: 'Fern',
        //     author: '@katie_wasserman',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        //     title: 'Mushrooms',
        //     author: '@silverdalex',
        //     rows: 2,
        //     cols: 2,
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        //     title: 'Tomato basil',
        //     author: '@shelleypauls',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        //     title: 'Sea star',
        //     author: '@peterlaster',
        // },
        // {
        //     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        //     title: 'Bike',
        //     author: '@southside_customs',
        //     cols: 2,
        // },
    ];

    return (
        <Box>
            <ImageList
                sx={{ width: "100%", height: "auto", cursor: "pointer" }}
                cols={5}
                gap={8}
            >
                {itemData.map((item, index) => (
                    <ImageListItem
                        key={index}
                    >
                        {/* <ButtonBase sx={{ width: "100%", height: "auto" }}> */}
                        <Image
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
                        />
                        {/* </ButtonBase> */}
                    </ImageListItem>
                ))}
            </ImageList>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Button
                    sx={{
                        marginTop: "1rem",
                        marginBottom: "1rem",
                        fontWeight: "lighter",
                        fontSize: "1.2rem",
                        backgroundColor: "#2726b5",
                        textTransform: "none",
                        color: "white",
                        "&:hover": {
                            backgroundColor: "#40448a",
                            color: "white",
                        },
                    }}
                    variant="contained"
                    size="large"
                    onClick={() => {
                        router.push("/books");
                    }}
                >
                    View More
                </Button>
            </Box>
        </Box >
    );
}
export default BooksCollection;