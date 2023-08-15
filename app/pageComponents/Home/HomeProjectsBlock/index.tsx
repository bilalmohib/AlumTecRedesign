import HPBHeader from "./HPBHeader";
import HomeProductsList from "./HomeProductsList";

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Slider from "react-slick";

import Carousel from 'react-material-ui-carousel'

import styles from "./style.module.css";
import { Box, Button } from "@mui/material";

const HomeProjectsBlock = () => {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]
  return (
    <div className={styles.container}>
      <HPBHeader />

      <HomeProductsList />

      {/* <Carousel
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon sx={{ border: "1px solid red;" }} />}
        navButtonsAlwaysVisible={true}
        
      >
        {
          items.map((item, i) => (
            <Box key={i}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>

              <Button className="CheckButton">
                Check it out!
              </Button>
            </Box>
          ))}
      </Carousel> */}

    </div>
  );
};
export default HomeProjectsBlock;
