const ServicesBanner = () => {
  return (
    <div className="bg-[url('/Images/Services/banner.jxr')] h-[300px] mt-[105px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative h-full w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="absolute top-0 left-0 right-0 bottom-0 mt-[100px] text-7xl font-semibold font-sharp text-center text-white">
          Our Services
        </h1>
      </div>
    </div>
  );
};
export default ServicesBanner;
