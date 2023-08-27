import { Button } from "@mui/material";

const AboutBanner = () => {
  return (
    <div className="bg-[url('/Images/About/groupPeople.jxr')] bg-cover bg-no-repeat bg-center min-h-[400px] sm:min-h-screen max-h-fit h-[350px] sm:h-fit pt-[172px]">
      <div className="absolute min-h-[398px] sm:h-fit sm:min-h-[calc(99vh)] h-[398px] inset-0 bg-black opacity-70 sm:opacity-50"></div>
      <h1 className="absolute top-0 left-0 right-0 bottom-0 mt-[140px] sm:mt-[180px] lg:mt-[180px] 2xl:mt-[220px] text-3xl sm:text-7xl font-semibold font-sharp text-center text-white">
        About Us
      </h1>
      <h5 className="absolute top-0 left-0 right-0 bottom-0 mt-[calc(140px+20px)] sm:mt-[calc(180px+80px)] lg:mt-[calc(180px+60px)] 2xl:mt-[calc(220px+120px)] text-white font-sharp text-sm sm:text-[25px] leading-7 sm:leading-10 spacing tracking-[0.58px] text-center mx-auto w-full sm:w-10/12 font-light sm:font-semibold pt-8 px-2 sm:px-0">
        WE MAKE IT EASY FOR YOU TO FIND THE BEST WINDOWS AND
        <div className="hidden lg:block"></div>
        DOORS TO REFLECT YOUR STYLE AND TASTE
      </h5>
      <p className="absolute top-0 left-0 right-0 bottom-0 mt-[calc(170px+80px+120px)] sm:mt-[calc(220px+80px+130px)] lg:mt-[calc(300px+20px+50px)] 2xl:mt-[calc(300px+80px+90px)] opacity-80 text-[18px] leading-7 font-light font-sharp tracking-[0.54px] w-10/12 text-center mx-auto text-white pb-[120px] pt-3 hidden sm:block">
        Alumtec Glazing solution Inc. is a leading aluminum and glass solutions
        provider offering a wide range of aluminum and glass products and
        services.We specialize in design, fabrication and installation of
        aluminum windows, woors and curtain wall for commercial and residential
        applications. We are committed towards quality and customer service.
        Quality is not just another goal, it is our basic strategy for survival
        and future as it’s our journey to the Total Quality Management.
      </p>
      <div className="mt-[calc(140px)] w-fit mx-auto sm:hidden block">
        <Button className="w-[156px] shadow-md rounded-[5px] normal-case h-[46px] bg-[#f2f2f2] hover:bg-[#10146f] text-black hover:text-[#f2f2f2] hover:border hover:border-[0.1] hover:border-solid text-lg">
          View more
        </Button>
      </div>
    </div>
  );
};
export default AboutBanner;
