import { Button, Grid } from "@mui/material";
import styles from "./style.module.css";
import { imageList } from "./data";
import { imageListType } from "./types";
import Image from "next/image";
import Slider from "react-slick";

const HomeProductsList = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className={styles.container}>
      <div className={styles.boxContainer}>
        <Grid container spacing={0}>
          {imageList.map((item: imageListType, index: number) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <div className={styles.imageContainer}>
                <Image
                  src={item.imageUrl}
                  alt={`Image ${item.id}`}
                  className={styles.image}
                  title={`Image ${item.id}`}
                  width={372}
                  height={486}
                />
                <div className={styles.borderOverlay}></div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>

      <Button
        variant="contained"
        color="primary"
        sx={{
          color: "#FFFFFF",
          fontFamily: "Sharp Grotesk",
          fontSize: "18px",
          marginTop: "60px",
          fontStyle: "normal",
          fontWeight: "400",
          lineHeight: "77px",
          borderRadius: "2px",
          backgroundColor: "#123E95",
          width: "160px",
          height: "50px",
          "&:hover": {
            backgroundColor: "#123E95",
            color: "#FFFFFF",
          },
        }}
        onClick={() => {
          console.log("Button clicked");
        }}
      >
        View All
      </Button>
    </div>
  );
};
export default HomeProductsList;
