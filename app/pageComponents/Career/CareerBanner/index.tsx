import { Button } from "@mui/material";

const CareerBanner = () => {
  return (
    <div className="bg-[url('/Images/Career/cover.jxr')] h-60 sm:h-[80vh] mt-[105px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative h-60 sm:h-[80vh] w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="px-7 sm:px-8 md:px-6 absolute top-0 left-0 right-0 bottom-0 mt-4 sm:mt-[15vh]">
          <div className="w-full flex flex-col justify-center items-center">
            <p className="text-left text-lg text-white mx-auto font-sans tracking-widest font-extralight">
              Careers at Alumtec
            </p>
            <h1 className="mt-0 text-2xl sm:text-6xl font-normal font-sharp sm:font-lato text-white text-center">
              Work with us to build <br /> your CAREER
            </h1>
            <Button
              variant="contained"
              color="primary"
              className="font-[Sharp Grotesk] text-md sm:text-lg mt-0 font-normal leading-[77px] rounded-sm bg-[#123E95] hover:bg-[#0b46bb] hover:text-white w-32 h-10 sm:w-40 sm:h-[50px]"
              onClick={() => {
                console.log("Button clicked");
              }}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CareerBanner;
