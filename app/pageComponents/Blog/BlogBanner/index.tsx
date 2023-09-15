"use client";

const BlogBanner = () => {
  return (
    <div className="bg-[url('/Images/Blogs/banner.png')] h-60 sm:h-[80vh] mt-[105px] w-full bg-cover bg-no-repeat bg-center">
      <div className="relative h-60 sm:h-[80vh] w-full backdrop-filter backdrop-blur-0 ease-linear transition">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="px-7 sm:px-8 md:px-6 absolute top-0 left-0 right-0 bottom-0 mt-8 sm:mt-[15vh]">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="mt-0 text-2xl sm:text-6xl font-normal font-sharp sm:font-lato text-white text-left">
              <h3 className="text-blue-800 m-0">AlumTec</h3>
              brings the latest{" "}
              <p className="text-blue-800 inline m-0">Alumium</p>
              <h3 className="text-teal-600 m-0">Insights</h3> to your knowledge
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogBanner;
