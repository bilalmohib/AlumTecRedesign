import { Button } from "@mui/material";

import Image from "next/image";

const HTBLeftSliderControls = () => {
  return (
    <div className="flex">
      <Button
        variant="contained"
        color="primary"
        className="w-[92px] h-11 sm:w-32 sm:h-16 bg-black hover:bg-black"
      >
        <Image
          width={26}
          height={22}
          alt="left arrow svg"
          title="left arrow svg"
          src="/SVGS/PAGES/HOME/Section/Testimonials/left_htb_slider_arrow.svg"
        />
      </Button>
      <Button
        variant="contained"
        color="primary"
        className="w-[92px] h-11 sm:w-32 sm:h-16 ml-7 hover:bg-[#11265F]"
        sx={{
          background: "#11265F",
        }}
      >
        <Image
          width={26}
          height={22}
          alt="left arrow svg"
          title="left arrow svg"
          src="/SVGS/PAGES/HOME/Section/Testimonials/right_htb_slider_arrow.svg"
        />
      </Button>
    </div>
  );
};
export default HTBLeftSliderControls;
