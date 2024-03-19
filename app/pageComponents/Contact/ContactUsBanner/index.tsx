const ContactUsBanner = () => {
  return (
    <div className="bg-[url('/Images/Contact/background_auto_x2.jpg')] h-60 sm:h-[80vh] mt-[105px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative h-60 sm:h-[80vh] w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <h1 className="px-7 sm:px-8 md:px-6 absolute top-0 left-0 right-0 bottom-0 mt-8 sm:mt-[15vh] text-lg sssm:text-2xl sm:text-5xl font-semibold font-lato sm:font-sharp text-left sm:text-center text-white">
          Let&rsquo;s help you navigate your next project
        </h1>
        <p className="px-7 sm:px-0 block sm:hidden absolute top-0 left-0 right-0 bottom-0 mt-[16vh] sm:mt-[28vh] w-full sm:w-8/12 text-xs sm:text-lg text-left sm:text-center text-white ml-auto mr-auto">
          AlumTec Glass and Aluminium offers a wide range of aluminium products
          and services. All our products comply with Dubai Green Building
          Regulations, Dubai Civil Defense and Abu Dhabi Estidama Regulations.
        </p>
      </div>
    </div>
  );
};
export default ContactUsBanner;
