const ProductsBanner = () => {
  return (
    <div className="bg-[url('/Images/Products/banner.jxr')] min-h-96 h-96 sm:h-[70vh] mt-[100px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative h-[99%] w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute inset-0 bg-black opacity-70 sm:opacity-50"></div>
        <h1
          style={{ fontFamily: "var(--font-montserrat) !important" }}
          className={`absolute top-0 left-0 right-0 bottom-0 mt-40 sm:mt-[25vh] leading-6 sm:leading-10 text-3xl sm:text-5xl font-semibold font-sharp text-center text-white uppercase`}
        >
          Our Products
        </h1>
        {/* <p className="absolute top-0 left-0 right-0 bottom-0 mt-36 sm:mt-[35vh] w-10/12 md:w-9/12 text-base sm:text-lg text-center text-white mx-auto leading-7 sm:leading-8 font-thin sm:font-light">
          AlumTec Glass and Aluminium offers a wide range of aluminium products
          and services. All our products comply with Dubai Green Building
          Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.
        </p> */}
      </div>
    </div>
  );
};
export default ProductsBanner;
