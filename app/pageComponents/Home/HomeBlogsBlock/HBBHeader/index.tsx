const HBBHeader = () => {
  return (
    <div className="h-36 mt-10">
      <div className="w-full h-auto relative">
        <div className="w-full h-full absolute top-0 left-0 opacity-100 bg-[#0057e3]">
          <h2 className="font-normal text-[99px] text-center leading-[77px] bg-gradient-to-r from-[rgba(0,0,0,0.02)] via-transparent to-[#ffffff] bg-cover bg-repeat bg-clip-text text-gray-100 select-none font-[Sharp Grotesk-Medium20, Helvetica]">
            BLOGS
          </h2>
        </div>
        <div className="w-full h-full absolute top-0 left-0 opacity-100 bg-[#0057e3] z-10">
          <h2 className="ml-[1.5rem] mt-[6.5rem] text-center text-[#000] pb-[1rem] font-bold font-[Sharp Grotesk-Medium20, Helvetica] text-6xl leading-[77px]">
            OUR BLOGS
          </h2>
        </div>
      </div>
    </div>
  );
};
export default HBBHeader;
