import React, { useState, useEffect } from 'react';

import EditCategories from '@/app/Components/Admin/EditCategories';
import Navbar from "@/app/Components/Navbar";
import TopNav from "@/app/Components/TopNav";
import Footer from "@/app/Components/Footer";

import PhotoCamera from '@mui/icons-material/PhotoCamera';


import { styled } from '@mui/material/styles';

import {
    Box,
    Typography,
    TextField,
    Button,
    Tabs,
    Tab,
    Paper,
    Grid,
    Autocomplete,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    CircularProgress
} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

// Importing Icons
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SendIcon from '@mui/icons-material/Send';

import { TypeAnimation } from 'react-type-animation';

import styles from "./AdminBook.module.css";
import Image from 'next/image';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const AdminBook = () => {
    // detect focus
    const [focus, setFocus] = useState(false);

    const [tabValue, setTabValue] = useState(0);

    const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    //

    const [windowSize, setWindowSize] = useState([
        2024,
        2000
    ]);

    // Category Autocomplete component Options
    interface CategoryOptionType {
        title: string;
        value: string;
    }

    const bookCategories: CategoryOptionType[] = [
        {
            title: 'Quran o Tafseer',
            value: 'Quran o Tafseer',
        },
        {
            title: 'Hadees Usool e Hadees',
            value: '/books/695',
        },
        {
            title: 'Aqaid',
            value: '/books/695',
        },
        {
            title: 'Fehm-e-Deen',
            value: '/books/695',
        },
        {
            title: 'Seerat',
            value: '/books/695',
        },
        {
            title: 'Tasawwuf',
            value: '/books/695',
        },
        {
            title: 'Mujzaat-o-Karamaat',
            value: '/books/695',
        },
        {
            title: 'Akhlaaq-o-Aadab',
            value: '/books/695',
        },
        {
            title: 'Halaat-o-Masail',
            value: '/books/695',
        },
        {
            title: 'Darsi Kutab',
            value: '/books/695',
        },
        {
            title: 'Sarf-o-Nahw',
            value: '/books/695',
        },
        {
            title: 'Aurado-o-wazaif',
            value: '/books/695',
        }
    ];

    // For autocomplete component
    const defaultProps = {
        options: bookCategories,
        getOptionLabel: (option: CategoryOptionType) => option.title,
    };
    const flatProps = {
        options: bookCategories.map((option) => option.title),
    };
    const [categoryValue, setCategoryValue] = useState<CategoryOptionType | null>(null);
    // Category Autocomplete component Options

    // Languages Autocomplete component Options
    interface languageOptionType {
        title: string;
        value: string;
    }

    const languageDropdownList: languageOptionType[] = [
        {
            title: 'English',
            value: 'Quran o Tafseer',
        },
        {
            title: 'Urdu',
            value: 'Urdu',
        },
        {
            title: 'Arabic',
            value: 'Arabic',
        },
        {
            title: 'Hindi',
            value: 'Hindi',
        },
        {
            title: 'Punjabi',
            value: 'Punjabi',
        },
        {
            title: 'Faarsi',
            value: 'Faarsi',
        },
        {
            title: 'Pashto',
            value: 'Pashto',
        }
    ];

    // For autocomplete component
    const LanguageDropdownDefaultProps = {
        options: languageDropdownList,
        getOptionLabel: (option: languageOptionType) => option.title,
    };
    const flatLanguageDropdownProps = {
        options: languageDropdownList.map((option) => option.title),
    };
    const [languageDropDownValue, setLanguageDropDownValue] = useState<languageOptionType | null>(null);
    // Languages Autocomplete component Options

    // Months Autocomplete component Options
    interface IslamicMonthsOptionType {
        title: string;
        value: string;
    }

    const IslamicMonthsDropdownList: IslamicMonthsOptionType[] = [
        {
            title: 'Muharram ul Haram',
            value: 'Muharram ul Haram',
        },
        {
            title: 'Safar ul Muzaffar',
            value: 'Safar ul Muzaffar',
        },
        {
            title: 'Rabi ul Awwal',
            value: 'Rabi ul Awwal',
        },
        {
            title: 'Rabi ul Akhir',
            value: 'Rabi ul Akhir',
        },
        {
            title: 'Jamadi ul Awwal',
            value: 'Jamadi ul Awwal',
        },
        {
            title: 'Jamadi ul Akhir',
            value: 'Jamadi ul Akhir',
        },
        {
            title: 'Rajab ul Murajjab',
            value: 'Rajab ul Murajjab',
        },
        {
            title: 'Shaaban ul Mubarak',
            value: 'Shaaban ul Mubarak',
        },
        {
            title: 'Ramadan ul Mubarak',
            value: 'Ramadan ul Mubarak',
        },
        {
            title: 'Shawwal ul Mukarram',
            value: 'Shawwal ul Mukarram',
        },
        {
            title: 'Zul Qadah',
            value: 'Zul Qadah',
        },
        {
            title: 'Zul Hijjah tul Haraam',
            value: 'Zul Hijjah tul Haraam',
        }
    ];

    const IslamicMonthsDropdownListDefaultProps = {
        options: IslamicMonthsDropdownList,
        getOptionLabel: (option: IslamicMonthsOptionType) => option.title,
    };
    const flatIslamicMonthsDropdownListDefaultProps = {
        options: IslamicMonthsDropdownList.map((option) => option.title),
    };
    const [islamicMonthsDropdownListValue, setIslamicMonthsDropdownListValue] = useState<IslamicMonthsOptionType | null>(null);
    // Months Autocomplete component Options

    // Publisher Autocomplete component Options
    interface publisherOptionType {
        value: string;
    }

    const publisherDropdownList: publisherOptionType[] = [
        {
            value: 'Idara Sirate Mustaqeem'
        },
        {
            value: 'Dawate Islami'
        },
        {
            value: 'Darul Uloom Karachi'
        }
    ];

    const publisherDropdownListDefaultProps = {
        options: publisherDropdownList,
        getOptionLabel: (option: publisherOptionType) => option.value,
    };
    const flatPublisherDropdownListDefaultProps = {
        options: publisherDropdownList.map((option) => option.value),
    };
    const [publisherDropdownListValue, setPublisherDropdownListValue] = useState<publisherOptionType | null>(null);
    // Months Autocomplete component Options

    // For checkbox
    const [checked, setChecked] = useState(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    // For checkbox

    // Assign group checkboxes
    const [assignGroupState, setAssignGroupState] = useState({
        group1: true,
        group2: false
    });

    const handleChangeAssignGroup = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAssignGroupState({
            ...assignGroupState,
            [event.target.name]: event.target.checked,
        });
    };

    const { group1, group2 } = assignGroupState;
    const error = [group1, group2].filter((v) => v).length !== 2;
    // Assign group checkboxes

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setWindowsDetect(true);
        }
        console.log('windowsDetect: ', window.innerWidth, window.innerHeight);
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    },
        //[windowSize],
        // When the initial render happens, the window size is 0, so we need to update it
        // when the component mounts.
        [windowSize, setWindowSize],
    );
    //

    //
    const [windowsDetect, setWindowsDetect] = useState(false);

    // useEffect(() => {

    // }, 
    // );
    //

    const [fileURL, setFileURL] = useState("");

    return (
        <Box component={"section"}>
            <Box component={"div"}>
                <TopNav />
            </Box>
            <Navbar />

            {windowsDetect ? (
                <>
                    <header className={styles.header}>
                        <div className={styles.title}>
                            <h1>
                                Manage Books
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
                                        'Welcome to Admin Panel for Books',
                                        1000,
                                        'You can add, edit and delete books',
                                        1000,
                                        `
                                You can create, edit and delete categories.
                                `,
                                        1000,
                                        `
                                You can select, select all or manage the books as you want.
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
                        sx={{
                            flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto",
                            marginTop: "0rem"
                        }}
                    >
                        <Box className={styles.leftTab}>
                            <Tabs
                                orientation="vertical"
                                variant="scrollable"
                                value={tabValue}
                                onChange={handleChangeTab}
                                aria-label="Vertical tabs example"
                                sx={{ borderRight: 1, borderColor: 'divider' }}
                            >
                                <Tab label="Add Books" {...a11yProps(0)} />
                                <Tab label="View Books" {...a11yProps(1)} />
                                {/* <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} /> */}
                            </Tabs>
                        </Box>
                        <Box className={styles.rightTab}>
                            <TabPanel value={tabValue} index={0}>
                                <Box
                                    className={styles.Box}
                                    sx={{
                                        // border: "1px solid red",
                                        padding:
                                            // Categorize according to small, medium, large screen
                                            (windowSize[0] < 991) ? (2) : (windowSize[0] < 1200) ? (3) : (4),
                                    }}>

                                    <Box sx={{
                                        // border: "1px solid red",
                                        display: "flex",
                                        marginBottom: 2,
                                    }}>
                                        <Box title="Add Books" sx={{
                                            // border: "1px solid black",
                                            // boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                                            // boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;",
                                            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
                                            width: 60,
                                            height: 60,
                                            borderRadius: 1.25,
                                            backgroundColor: "#fffefe",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}>
                                            <LocalLibraryIcon
                                                sx={{
                                                    color: "#06989e",
                                                    fontSize: 35,
                                                    // boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;", 
                                                }} />
                                        </Box>
                                        <Box sx={{ ml: 3 }}>
                                            <Typography variant="h5" sx={{
                                                // color: "#312a2c",
                                                color: "#06989e",
                                                fontWeight: 500,
                                                marginTop: (windowSize[0] < 600) ? (0) : (0.5),
                                            }}>
                                                Add Books
                                            </Typography>
                                            <Typography variant="body1" sx={{
                                                // color: "#4f747a" 
                                                // color: "#C0C0C0"
                                                color: "#06989e",
                                                fontWeight: 300
                                            }}>
                                                Add a new book to the database
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Box sx={{ flexGrow: 1, mt: 2 }}>
                                        <Grid container
                                            spacing={
                                                // Categorize according to small, medium, large screen
                                                (windowSize[0] < 576) ? (0) : ((windowSize[0] < 768) ? (1) : ((windowSize[0] < 992) ? (2) : (2)))
                                            }
                                        >
                                            <Grid
                                                item
                                                xs={
                                                    // Categorize according to small, medium, large screen
                                                    ((windowSize[0] < 600) ? (12) : (6))
                                                }
                                            >
                                                <TextField
                                                    id="enTitle"
                                                    label="English Title"
                                                    placeholder="Enter the book's English title"
                                                    variant="standard"
                                                    helperText=""
                                                    margin="normal"
                                                    fullWidth // t
                                                // InputProps={{

                                                // }}
                                                />
                                            </Grid>
                                            <Grid
                                                item
                                                xs={
                                                    // Categorize according to small, medium, large screen
                                                    ((windowSize[0] < 600) ? (12) : (6))
                                                }
                                            >
                                                <TextField
                                                    id="urTitle"
                                                    label="Urdu Title"
                                                    placeholder="Enter the book's Urdu title"
                                                    variant="standard"
                                                    helperText=""
                                                    margin="normal"
                                                    fullWidth // t
                                                // InputProps={{

                                                // }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="author"
                                                    label="Author"
                                                    placeholder="Author's name"
                                                    variant="standard"
                                                    helperText=""
                                                    margin="normal"
                                                    fullWidth // t
                                                // InputProps={{

                                                // }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Autocomplete
                                                    {...defaultProps}
                                                    id="categoryAutoComplete"
                                                    autoHighlight
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Category" variant="standard" />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="totalPages"
                                                    label="Total Pages"
                                                    placeholder="Total number of pages"
                                                    variant="standard"
                                                    helperText=""
                                                    margin="normal"
                                                    fullWidth // t
                                                    type="number"
                                                // InputProps={{

                                                // }}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <TextField
                                                    id="bookDescription"
                                                    label="Book Summary"
                                                    placeholder="Enter a brief summary of the book"
                                                    variant="standard"
                                                    helperText=""
                                                    margin="normal"
                                                    multiline
                                                    rows={4}
                                                    fullWidth // t
                                                // InputProps={{

                                                // }}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Autocomplete
                                                    {...LanguageDropdownDefaultProps}
                                                    id="languageDropDownAutoComplete"
                                                    autoHighlight
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Book Publication Language" variant="standard" />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Autocomplete
                                                    {...IslamicMonthsDropdownListDefaultProps}
                                                    id="monthBookPublishedAutoComplete"
                                                    autoHighlight
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Book's Publication Month" variant="standard" />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Autocomplete
                                                    {...publisherDropdownListDefaultProps}
                                                    id="publisherDropdownAutoComplete"
                                                    autoHighlight
                                                    renderInput={(params) => (
                                                        <TextField {...params} label="Book's Publisher" variant="standard" />
                                                    )}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box sx={{ mt: 2 }}>
                                                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                                        Book Cover Image
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 300, color: "red" }}>
                                                        (Required)
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 300 }}>
                                                        (Recommended size: 300x400)
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 300 }}>/Images/Admin/EditData/Books/file.jpg
                                                        (Max size: 1MB)
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 300 }}>
                                                        (Allowed formats: .jpg, .jpeg, .png)
                                                    </Typography>
                                                    <Image
                                                        src={"/Images/Admin/EditData/books.png"}
                                                        alt="Book Cover"
                                                        width={400}
                                                        height={300}
                                                        style={{
                                                            // width: "100%",
                                                            // height: "auto",
                                                            objectFit: "cover",
                                                            marginTop: "10px",
                                                            marginBottom: "10px",
                                                        }}
                                                    />
                                                </Box>
                                                <Button variant="outlined" component="label" size='large' startIcon={<PhotoCamera />}>
                                                    Upload Cover Photo
                                                    <input hidden accept="image/*" multiple type="file" />
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Box sx={{ mt: 2 }}>
                                                    <Typography variant="h5" sx={{ fontWeight: 500 }}>
                                                        Book File
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 300, color: "red" }}>
                                                        (Required)
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 300 }}>
                                                        (Recommended size: 50 MB)
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 300 }}>
                                                        (Max size: 1 GB)
                                                    </Typography>
                                                    <Typography variant="body2" sx={{ fontWeight: 300 }}>
                                                        (Allowed formats: .pdf)
                                                    </Typography>
                                                    <Box>
                                                        {(fileURL == "") ? (
                                                            <Image
                                                                src={"/Images/Admin/EditData/Books/file.jpg"}
                                                                alt="Book Cover"
                                                                width={400}
                                                                height={300}
                                                                style={{
                                                                    // width: "100%",
                                                                    // height: "auto",
                                                                    objectFit: "cover",
                                                                    marginTop: "10px",
                                                                    marginBottom: "10px",
                                                                }}
                                                            />
                                                        ) : (
                                                            <Box sx={{ mt: 2, width: 500, height: 500, objectFit: "cover", marginTop: "10px", marginBottom: "10px", }}
                                                                component="iframe"
                                                                src={"http://s595909773.online-home.ca/KB/Fehm-e-Deen%204/WQ.pdf"}
                                                                title="Fehme Deen - The Book of Islam"
                                                                frameBorder={0}
                                                                loading="lazy"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                        )}
                                                    </Box>
                                                </Box>
                                                <Button variant="outlined" component="label" size='large' startIcon={<MenuBookIcon />}>
                                                    Upload Book File (PDF)
                                                    <input hidden accept="image/*" multiple type="file" />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#2726b5",
                                            // textTransform: "none",
                                            fontWeight: "bold",
                                            height: 40,
                                            mt:
                                            // Give margins based on screen size
                                            {
                                                xs: 3, // theme.breakpoints.up('xs')
                                                sm: 2, // theme.breakpoints.up('sm')
                                                md: 2, // theme.breakpoints.up('md')
                                                lg: 3, // theme.breakpoints.up('lg')
                                                xl: 3, // theme.breakpoints.up('xl')
                                            },
                                            display: "flex",
                                            justifyContent: "center",
                                            "&:hover": {
                                                backgroundColor: "#2726b5",
                                            }
                                        }}
                                        // Give full width if screen size if less than 600px otherwise give auto width
                                        // fullWidth={(
                                        //     windowSize[0] < 600
                                        // ) ? true : false}
                                        // // onClick={() => {
                                        // //     navigate("/");
                                        // // }}
                                        fullWidth
                                        startIcon={<SendIcon sx={{ fontSize: 24 }} />}
                                    >
                                        <Typography style={{ display: "block", fontSize: 24 }}>Submit</Typography>
                                    </Button>
                                    <br />
                                </Box>
                            </TabPanel>
                            <TabPanel value={tabValue} index={1}>
                                <Box className={styles.Box}>
                                    <Typography
                                        sx={{
                                            fontSize: "2rem",
                                            fontWeight: "bold",
                                            color: "#000",
                                            textAlign: "center",
                                        }}
                                    >
                                        View Books
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "1rem",
                                            fontWeight: "lighter",
                                            color: "#000",
                                            textAlign: "center",
                                        }}
                                    >
                                        Add, Edit and Delete Books
                                    </Typography>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <h1>Item One</h1>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                    <p>
                                        The standard Lorem Ipsum passage, used since the 1500s
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                                        Section 1.10.32 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?

                                        1914 translation by H. Rackham
                                        But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant

                                        Section 1.10.33 of de Finibus Bonorum et Malorum written by Cicero in 45 BC
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        1914 translation by H. Rackham
                                        On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                                    </p>
                                </Box>
                            </TabPanel>
                        </Box>
                        {/* <TabPanel value={value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={value} index={6}>
                    Item Seven
                </TabPanel> */}
                    </Box>
                </>
            ) : (
                <Box className={styles.loading}>
                    <CircularProgress />
                </Box>
            )}

            <Box className={styles.footer}>
                <Footer />
            </Box>
        </Box>
    )
}
export default AdminBook;