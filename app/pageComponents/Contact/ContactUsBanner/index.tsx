const ContactUsBanner = () => {
  return (
    <div className="bg-[url('/Images/Contact/background_auto_x2.jpg')] h-[80vh] mt-[105px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative h-[80vh] w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <h1 className="absolute top-0 left-0 right-0 bottom-0 mt-[15vh] text-5xl font-semibold font-sharp text-center text-white">
          Let&rsquo;s help you navigate your next
        </h1>
        <p className="absolute top-0 left-0 right-0 bottom-0 mt-[28vh] w-8/12 text-lg text-center text-white ml-auto mr-auto">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying
        </p>
      </div>
    </div>
  );
};
export default ContactUsBanner;
