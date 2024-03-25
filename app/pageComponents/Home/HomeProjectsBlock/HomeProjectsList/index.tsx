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
    slidesToScroll: 1,
  };
  return (
    <div className="w-full flex flex-col justify-center items-center text-[aliceblue] h-auto mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {imageList.map((item: imageListType, index: number) => (
          <div key={index}>
            <div className="relative">
              <Image
                src={item.imageUrl}
                alt={`Image ${item.id}`}
                className={`w-[280px] h-auto sm:w-[25rem] lg:w-[20rem] xl:w-[20rem] 2xl:w-96 lg:h-auto ${styles.image}`}
                title={`Image ${item.id}`}
                width={372}
                height={486}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black flex justify-center opacity-0"></div>
            </div>
          </div>
        ))}
      </div>

      <Button
        variant="contained"
        color="primary"
        className="font-[Sharp Grotesk] text-lg mt-16 font-normal leading-[77px] rounded-sm bg-[#123E95] hover:bg-[#0b46bb] hover:text-white w-40 h-[50px]"
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
