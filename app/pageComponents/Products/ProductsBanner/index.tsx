import { montserratFont } from "@/utils/fonts";

const ProductsBanner = () => {
  return (
    <div className="bg-[url('/Images/Products/banner.jxr')] h-[70vh] mt-[105px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative h-[69vh] w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1
          style={{ fontFamily: "var(--font-montserrat) !important" }}
          className={`absolute top-0 left-0 right-0 bottom-0 mt-[20vh] text-5xl font-semibold font-sharp text-center text-white uppercase`}
        >
          Our Products
        </h1>
        <p className="absolute top-0 left-0 right-0 bottom-0 mt-[35vh] w-9/12 text-lg text-center text-white ml-auto mr-auto">
          AlumTec Glass and Aluminium offers a wide range of aluminium products
          and services. All our products comply with Dubai Green Building
          Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.
        </p>
      </div>
    </div>
  );
};
export default ProductsBanner;
