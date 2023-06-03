import { useState, useEffect } from "react";

import BooksCollection from "@/app/Components/Home/BooksCollection";
import Navbar from "@/app/Components/Navbar";
import Slider from "@/app/Components/Slider";
import Footer from "@/app/Components/Footer";

import {
  Box,
  Typography,
  Button
} from "@mui/material";

import Image from "next/image";

import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import styles from "../styles/Pages/Home.module.css";

const sliderImages = [{ id: 1, src: "/Images/Home/Slider/Images/1.png" }, { id: 2, src: "/Images/Home/Slider/Images/2.png" }, { id: 3, src: "/Images/Home/Slider/Images/3.png" }];

const getNextImageIndex = (currentImageIndex: number, offset: any) => {
  let nextImageIndex = currentImageIndex + offset;
  if (nextImageIndex < 0) {
    nextImageIndex = sliderImages.length - 1;
  } else if (nextImageIndex >= sliderImages.length) {
    nextImageIndex = 0;
  }
  return nextImageIndex;
};

const Home = () => {
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentMiddleImage, setCurrentMiddleImage] = useState(1);
  const [currentRightImage, setCurrentRightImage] = useState(2);

  const [isActiveSliderArrow, setIsActiveSliderArrow] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const nextLeftImageIndex = getNextImageIndex(currentLeftImage, -1);
      const nextMiddleImageIndex = getNextImageIndex(currentMiddleImage, -1);
      const nextRightImageIndex = getNextImageIndex(currentRightImage, -1);

      setCurrentLeftImage(nextLeftImageIndex);
      setCurrentMiddleImage(nextMiddleImageIndex);
      setCurrentRightImage(nextRightImageIndex);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [currentLeftImage, currentMiddleImage, currentRightImage]);

  const leftImage = sliderImages[currentLeftImage].src;
  const middleImage = sliderImages[currentMiddleImage].src;
  const rightImage = sliderImages[currentRightImage].src;

  const mstyles = {
    heading: {
      "text-align": "left",
      "margin-top": "169px",
      "fontStyle": "normal",
      "color": "#000000",
      "fontWeight": "500",
      "fontSize": "45px",
      "lineHeight": "65px",
      paddingRight: "10rem",
    },
    subHeading: {
      "color": "#777777",
      "fontFamily": "Montserrat",
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": "18px",
      "lineHeight": "25px",
      "letterSpacing": "0.02em",
      "margin-top": "40px"
    },
    readMoreButton: {
      "width": "202.2px",
      "height": "55px",
      "background": "#10146F",
      "boxShadow": "0px 14px 40px rgba(32, 63, 123, 0.22)",
      "borderRadius": "8px",
      "fontWeight": "700",
      "fontSize": "18px",
      "lineHeight": "25px",
      "letterSpacing": "0.02em",
      "color": "#F2F2F2",
      marginTop: "143px",
      // Develop styles on hover
      '&:hover': {
        backgroundColor: "#F2F2F2",
        color: "#10146F",
        border: "0.1px solid #10146F"
      }
    },
    leftContainer: {
      // "width": "50%"
    },
    rightContainer: {
      "boxSizing": "border-box",
      "width": "100%",
      "height": "887px",
      background: "linear-gradient(157.51deg, #E1E7FF -14.3%, #DBE2FC 49.95%, #FAFBFF 102.59%)",
      "boxShadow": "0px 4px 4px rgba(0, 0, 0, 0.06)",
      "borderRadius": "0px"
    },
    // Sliders Styles
    sliderOuterContainer: {
      "width": "100%",
      "height": "auto",
      "position": "relative",
    },
    box: {
      "width": "100%",
      "height": "100%",
      "position": "absolute",
      "top": "0",
      "left": "0",
      "opacity": "1",
      "background": "#0057e3"
    },
    overlay: {
      "zIndex": "9",
      // "margin": "40px",
      "background": "#009938"
    },
    // Services Styles
    servicesHeadingOverlay: {
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '112px',
      lineHeight: '77px',
      "backgroundImage": "linear-gradient(0deg, rgba(0, 0, 0, 0.02), rgba(0, 0, 0, 0.02)),\nlinear-gradient(0deg, #FFFFFF, #FFFFFF)",
      "backgroundSize": "100%",
      "backgroundRepeat": "repeat",
      "WebkitBackgroundClip": "text",
      "WebkitTextFillColor": "transparent",
      "MozBackgroundClip": "text",
      "MozTextFillColor": "transparent"
    },
    servicesHeading: {
      marginLeft: "2rem",
      marginTop: "2.5rem",
      textAlign: "left",
      color: "#000",
      paddingBottom: "1rem",
      "fontStyle": "normal",
      "fontWeight": "500",
      "fontSize": "59px",
      "lineHeight": "77px",
      "backgroundImage": "linear-gradient(0deg, #000000, #000000),\nlinear-gradient(0deg, #FFFFFF, #FFFFFF)",
      "backgroundSize": "100%",
      "backgroundRepeat": "repeat",
      "WebkitBackgroundClip": "text",
      "WebkitTextFillColor": "transparent",
      "MozBackgroundClip": "text",
      "MozTextFillColor": "transparent"
    },
    // Services Card
    servicesCardContainer: {
      "border": "0.1px solid #10146E",
      "paddingLeft": "3.75rem",
      "marginTop": "4.2rem",
      "paddingRight": "24%"
    },
    //Services Cards
    servicesTitle: {
      "fontStyle": "normal",
      "fontWeight": "500",
      "fontSize": "43px",
      "lineHeight": "77px",
      "backgroundImage": "linear-gradient(0deg, #10146E, #10146E), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      "backgroundSize": "100%",
      "backgroundRepeat": "repeat",
      "WebkitBackgroundClip": "text",
      "WebkitTextFillColor": "transparent",
      "MozBackgroundClip": "text",
      "MozTextFillColor": "transparent",
      "textAlign": "left",
      "marginTop": "2rem"
    },
    servicesDescription: {
      "fontStyle": "normal",
      "fontWeight": "400",
      "fontSize": "18px",
      "lineHeight": "40px",
      "color": "rgba(0, 0, 0, 0.64)",
      "marginTop": "2rem"
    },
    servicesSliderArrowContainer: {
      border: "1px solid red",
      marginTop: "40px",
      width: "220px",
      height: "44px",
      display: "flex",
      justifyContent: "space-between"
    },
    // When Its DeActive
    servicesSliderDeActiveArrow: {
      borderTop: "1.5px solid #a4a4a4",
      borderLeft: "1.5px solid #a4a4a4",
      borderBottom: "1.5px solid #a4a4a4",
      width: "39.25px",
      height: "44px",
      boxSizing: "border-box",
    },
    sliderArrow: {
      opacity: "0.5",
      marginTop: "5px",
      color: "#a4a4a4"
    },
    sliderArrowDeActive: {
      color: "#a4a4a4",
      opacity: "0.5"
    },
    // When Its Active
    servicesSliderActiveArrow: {
      borderTop: "1.5px solid #10146E",
      borderLeft: "1.5px solid #10146E",
      borderBottom: "1.5px solid #10146E",
      width: "39.25px",
      height: "44px",
      paddingLeft: "5px",
      boxSizing: "border-box",
    },
    sliderArrowActive: {
      color: "#10146E",
      opacity: "1"
    },
    // When Its Hover
    servicesSliderHoverArrow: {
      borderTop: "1.5px solid #10146E",
      borderLeft: "1.5px solid #10146E",
      borderBottom: "1.5px solid #10146E",
      width: "39.25px",
      height: "44px",
      boxSizing: "border-box",
    },
    sliderArrowHover: {
      color: "#10146E",
      opacity: "1"
    },
    // When Its Focus
    servicesSliderFocusArrow: {
      borderTop: "1.5px solid #10146E",

      borderLeft: "1.5px solid #10146E",
      borderBottom: "1.5px solid #10146E",
      width: "39.25px",
      height: "44px",
      boxSizing: "border-box",
    },
    sliderArrowFocus: {
      color: "#10146E",
      opacity: "1"
    }
  }

  return (
    <Box component={"section"}>
      <Navbar />
      <Box component={"div"}
        sx={{
          position: 'relative'
        }}
      >
        {/* <Slider /> */}
      </Box>
      <Box component={"div"} className="customContainer">
        <Grid2 container spacing={0}>
          <Grid2 xs={6} md={6} sm={12}>
            <Box sx={mstyles.leftContainer}>
              <Typography
                variant={"h3"}
                component={"h3"}
                sx={mstyles.heading}
              >
                Aluminium curtain wall,
                windows and doors are our
                speciality.
              </Typography>
              <Typography
                variant={"h5"}
                component={"h5"}
                sx={mstyles.subHeading}
              >
                Glazing solutions are our passion.
              </Typography>
              <Button
                sx={mstyles.readMoreButton}
              >
                Read more
              </Button>
            </Box>
          </Grid2>
          <Grid2 xs={6} md={6} sm={12}>
            <Box sx={mstyles.rightContainer}>
              <Box sx={{ pt: "134px", ml: "26.85px" }}></Box>
              <Box sx={mstyles.sliderOuterContainer}>
                <Box sx={mstyles.box}>
                  <Image
                    className={styles.frameImage}
                    src="/Images/Home/Slider/Frame.png"
                    alt="FRAMING"
                    width={822.07}
                    height={638.66}
                    loading="eager"
                    title="FRAMING"
                  />
                </Box>
                <Box sx={{ ...mstyles.box, ...mstyles.overlay }}>
                  <Box sx={mstyles.sliderOuterContainer}>
                    <Box sx={mstyles.box}>
                      <Image
                        className={`${styles.middleImage} ${styles.active}`}
                        src={middleImage}
                        alt="2"
                        width={618}
                        height={552}
                        loading="eager"
                        title="2"
                      />
                    </Box>
                    <Box sx={{ ...mstyles.box, ...mstyles.overlay }}>
                      <Image
                        className={`${styles.leftImage} ${styles.active}`}
                        src={leftImage}
                        alt="1"
                        width={201}
                        height={212}
                        loading="eager"
                        title="1"
                      />
                    </Box>
                    <Box sx={{ ...mstyles.box, ...mstyles.overlay }}>
                      <Image
                        className={`${styles.rightImage} ${styles.active}`}
                        src={rightImage}
                        alt="3"
                        width={201}
                        height={212}
                        loading="eager"
                        title="3"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2 xs={12} md={12} sm={12}>
            <Box sx={{ "boxSizing": "border-box", border: "1px solid red", height: 140, marginTop: "42px" }}>
              <Box sx={mstyles.sliderOuterContainer}>
                <Box sx={mstyles.box}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={mstyles.servicesHeadingOverlay}
                  >
                    Services
                  </Typography>
                </Box>
                <Box sx={{ ...mstyles.box, ...mstyles.overlay }}>
                  <Typography
                    variant="h2"
                    component="h2"
                    sx={mstyles.servicesHeading}
                  >
                    OUR SERVICES
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2 xs={4} md={4} sm={12}>
            <Box sx={mstyles.sliderOuterContainer}>
              <Box sx={mstyles.box}>
                <Box className={styles.containerTlPatternImage}>
                  <Image
                    className={styles.tlPatternImage}
                    src="/Images/Home/Services/Patterns.png"
                    alt="Pattern Left"
                    width={112}
                    height={152}
                    loading="eager"
                  />
                </Box>
                <Box className={styles.containerBrPatternImage}>
                  <Image
                    className={styles.brPatternImage}
                    src="/Images/Home/Services/Patterns.png"
                    alt="Pattern Right"
                    width={112}
                    height={152}
                    loading="eager"
                  />
                </Box>
              </Box>
              <Box sx={{ ...mstyles.box, ...mstyles.overlay }}>
                {/* Image overlay  */}
                <Box sx={mstyles.sliderOuterContainer}>
                  <Box sx={mstyles.box}>
                    <Image
                      className={styles.borderServicesImage}
                      src="/Images/Home/Services/Frame.png"
                      alt="Pattern Right"
                      width={431}
                      height={476}
                      loading="eager"
                    />
                  </Box>
                  <Box sx={{ ...mstyles.box, ...mstyles.overlay }}>
                    <Box>
                      <Image
                        className={styles.ServicesImage}
                        src="/Images/Home/Services/Design.png"
                        alt="Design Image"
                        width={489}
                        height={500}
                        loading="eager"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid2>
          <Grid2 xs={8} md={8} sm={12}>
            <Box sx={mstyles.servicesCardContainer}>
              <Typography
                variant="h2"
                component="h2"
                sx={mstyles.servicesTitle}
              >
                Design and Construct
              </Typography>
              <Box
                component="p"
                sx={mstyles.servicesDescription}
              >
                Alumtec Glazing solution Inc. offer a complete range of engineering services to
                our client include the initial design that offering most economical solutions
                and meet or exceed the building codes.
                <br />
                With our professional and expert designers, we provide to our client a complete
                detailed shop drawings, production drawings and as build drawings.
              </Box>

              <Box
                sx={mstyles.servicesSliderArrowContainer}
              >
                <Box
                  sx={mstyles.servicesSliderDeActiveArrow}
                >
                  <Image
                    priority
                    src="/Images/Home/Services/ServicesSlider/Left.svg"
                    width={11.25}
                    height={17.5}
                    style={{
                      ...mstyles.sliderArrow,
                      ...(isActiveSliderArrow === "left" ? mstyles.sliderArrowActive : mstyles.sliderArrowDeActive)
                    }}
                    alt="Left"
                  />
                </Box>

                <Box
                  sx={mstyles.servicesSliderActiveArrow}
                >
                  <Image
                    priority
                    src="/Images/Home/Services/ServicesSlider/Right.svg"
                    width={11.25}
                    height={17.5}
                    style={{
                      ...mstyles.sliderArrow,
                      ...(isActiveSliderArrow === "right" ? mstyles.sliderArrowActive : mstyles.sliderArrowDeActive)
                    }}
                    alt="Right"
                  />
                </Box>
              </Box>
            </Box>
          </Grid2>
        </Grid2>
      </Box>
      {/* <Box className={styles.footer}>
        <Footer />
      </Box> */}
    </Box>
  )
}
export default Home;