const ServicesBanner = () => {
  return (
    <div className="bg-[url('/Images/Services/banner.jxr')] min-h-96 h-96 sm:h-[70vh] mt-[100px] sm:mt-[100px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative h-full w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute inset-0 bg-black opacity-70 sm:opacity-50"></div>
        <h1 className="absolute top-0 left-0 right-0 bottom-0 mt-14 sm:mt-[20vh] text-3xl sm:text-5xl uppercase font-semibold font-sharp text-center text-white">
          Our Services
        </h1>
        <h3 className="absolute top-0 left-0 right-0 bottom-0 text-base sm:text-lg mt-24 leading-7 sm:leading-8 sm:mt-[35vh] font-thin sm:font-light text-white text-center mx-auto w-10/12">
          Alumtec Glazing Solution Inc. offers comprehensive engineering
          services, from initial designs that ensure cost-effective solutions,
          to meticulous shop drawings, production drawings, and as-built
          drawings—all meeting or exceeding building codes.
        </h3>
      </div>
    </div>
  );
};
export default ServicesBanner;
