import React, { useState, useEffect } from "react";

import {
    Box,
    Button,
    IconButton
} from "@mui/material";

import styles from "./styles.module.css";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/image";

const BooksSlider = () => {

    const [startX, setStartX] = useState(0);

    const booksList = [
        {
            id: 1,
            title: "Book 1",
            image: "/images/books/book1.jpg",
            link: "/books/book1"
        },
        {
            id: 2,
            title: "Book 2",
            image: "/images/books/book2.jpg",
            link: "/books/book2"
        },
        {
            id: 3,
            title: "Book 3",
            image: "/images/books/book3.jpg",
            link: "/books/book3"
        },
        {
            id: 4,
            title: "Book 4",
            image: "/images/books/book4.jpg",
            link: "/books/book4"
        },
        {
            id: 5,
            title: "Book 5",
            image: "/images/books/book5.jpg",
            link: "/books/book5"
        },
        {
            id: 6,
            title: "Book 6",
            image: "/images/books/book6.jpg",
            link: "/books/book6"
        },
        {
            id: 7,
            title: "Book 7",
            image: "/images/books/book7.jpg",
            link: "/books/book7"
        },
        {
            id: 8,
            title: "Book 8",
            image: "/images/books/book8.jpg",
            link: "/books/book8"
        },
        {
            id: 9,
            title: "Book 9",
            image: "/images/books/book9.jpg",
            link: "/books/book9"
        },
        {
            id: 10,
            title: "Book 10",
            image: "/images/books/book10.jpg",
            link: "/books/book10"
        },
        {
            id: 11,
            title: "Book 11",
            image: "/images/books/book11.jpg",
            link: "/books/book11"
        },
        {
            id: 12,
            title: "Book 12",
            image: "/images/books/book12.jpg",
            link: "/books/book12"
        },
        {
            id: 13,
            title: "Book 13",
            image: "/images/books/book13.jpg",
            link: "/books/book13"
        }
    ];

    return (
        <Box className={styles.booksSliderContainer}>
            <IconButton
                aria-label="back"
                color="success"
                className={styles.leftBooksSliderButton}
                // onClick move scroll to left
                onClick={() => {
                    const booksSlider = document.querySelector(`.${styles.subContainer}`);
                    booksSlider?.scrollBy(-900, 0);
                }}
            >
                <ArrowBackIosIcon sx={{ textAlign: "center", marginLeft: 1 }} />
            </IconButton>

            <Box className={styles.subContainer}>
                {
                    booksList.map((book: any, index: number) => {
                        return (
                            <Box
                                key={index}
                                // onMouseOver={(e) => {
                                //     // Move scroll to right and when gone to right end then move back to left
                                //     const booksSlider = document.querySelector(`.${styles.subContainer}`);
                                //     const scrollWidth = booksSlider?.scrollWidth;
                                //     const clientWidth = booksSlider?.clientWidth;
                                //     const scrollLeft = booksSlider?.scrollLeft;
                                //     // @ts-ignore
                                //     if (scrollWidth !== clientWidth + scrollLeft) {
                                //       booksSlider?.scrollBy(900, 0);
                                //     } else {
                                //       booksSlider?.scrollBy(-2000, 0);
                                //     }
                                  
                                //     // Stop propagation
                                //     e.stopPropagation();
                                //   }}
                                className={styles.booksSlider}
                                onDragStart={(e) => {
                                    setStartX(e.clientX);
                                    // set cursor to move
                                    e.currentTarget.style.cursor = "move";
                                    // Stop propagation
                                    e.stopPropagation();

                                }}
                                onDragEnd={(e) => {
                                    const booksSlider = document.querySelector(`.${styles.subContainer}`);
                                    if (e.clientX > startX) {
                                        booksSlider?.scrollBy(-900, 0);
                                    } else {
                                        booksSlider?.scrollBy(900, 0);
                                    }
                                }}
                                draggable={true}
                            >
                                <Box
                                    className={styles.booksSliderItem}
                                >
                                    <Image
                                        title="book"
                                        width={200}
                                        height={200}
                                        src="https://s.yimg.com/aah/islamicbookstore-com/the-islamic-library-7-book-set-dar-us-salam-publishers-43.gif"
                                        alt="book1"
                                        className={styles.bookSliderItemImg}
                                    />
                                    <Box className={styles.bookSliderItemContent}>
                                        <h4 className="mt-4">Jamiatul Ahadees</h4>
                                    </Box>
                                </Box>
                            </Box>
                        )
                    })
                }
            </Box>

            <IconButton
                aria-label="forward"
                color="success"
                className={styles.rightBooksSliderButton}
                // onClick move scroll to right
                onClick={() => {
                    const booksSlider = document.querySelector(`.${styles.subContainer}`);
                    booksSlider?.scrollBy(900, 0);
                }}
            >
                <ArrowForwardIosIcon sx={{ textAlign: "center", marginLeft: 0.5 }} />
            </IconButton>
        </Box>
    )
}
export default BooksSlider;