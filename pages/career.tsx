import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import CareerForm from "@/app/pageComponents/Career/CareerForm";
import CareerBanner from "@/app/pageComponents/Career/CareerBanner";

const CareerPage = () => {
  return (
    <div>
      <Navbar />

      <section
        className="relative"
        // Yahan par border add karna hai
      >
        <div className="w-full relative h-fit">
          <div className="w-full">
            <CareerBanner />

            <div className="w-full relative h-fit mb-0">
              <div className="bg-none sm:bg-[url('/Images/Career/curved_lines.jxr')] sm:bg-cover sm:bg-no-repeat sm:bg-center w-full h-auto mx-auto z-[10] flex flex-col justify-center md:px-5 lg:px-8 xl:px-10">
                <div className="w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:8/12 h-fit mx-auto z-[10] mt-0 mb-0 sm:mt-[-8vh] sm:pb-40">
                  <CareerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default CareerPage;
