const BlogBanner = () => {
  return (
    <div className="bg-[url('/Images/Blogs/banner.png')] h-60 sm:h-[80vh] mt-[105px] w-full bg-cover bg-no-repeat bg-center">
      {/* <h1 className="text-center text-7xl text-blue-800 mt-40">Blog</h1>

      <p className="text-center text-3xl text-blue-800 mt-1">
        Page under construction. Stay tuned! 🚧
      </p> */}
      <div className="relative h-60 sm:h-[80vh] w-full backdrop-filter backdrop-blur-0 ease-linear transition">
              <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="px-7 sm:px-8 md:px-6 absolute top-0 left-0 right-0 bottom-0 mt-8 sm:mt-[15vh]">
          <div className="w-full flex flex-col justify-center items-center">
            {/* <p className="text-left text-lg text-white mx-auto font-sans tracking-widest font-extralight">
              Careers at Alumtec
            </p> */}
            <h1 className="mt-0 text-2xl sm:text-6xl font-normal font-sharp sm:font-lato text-white text-left">
                          <h3 className="text-blue-800 m-0">AlumTec</h3> 
                          brings the latest <span className="text-blue-800">Alumium</span> 
                          <h3 className="text-teal-600 m-0">Insights</h3>  to your knowledge
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogBanner;
