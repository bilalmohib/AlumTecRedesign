// Importing Components
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import ScrollAnimationWrapper from "@/app/Components/ScrollAnimationWrapper";
import MainServicesBlock from "@/app/pageComponents/Services/MainServicesBlock";
import MSBHeader from "@/app/pageComponents/Services/MainServicesBlock/MSBHeader";
import ServicesBanner from "@/app/pageComponents/Services/ServicesBanner";

// Importing Data
import { servicesList } from "@/app/data/Services";

const ServicesPage = () => {
  return (
    <>
      <Navbar bgWhite={true} />

      <section>
        <ServicesBanner />
        <div className="mx-auto md:ml-20 mt-4">
          <MSBHeader />
        </div>

        <div className="mb-6">
          {servicesList.map((service, index) => (
            <ScrollAnimationWrapper key={index}>
              <div className="my-10">
                <MainServicesBlock
                  title={service.title}
                  description={service.description}
                  direction={service.direction}
                  background={service.background}
                  image={service.image}
                />
              </div>
            </ScrollAnimationWrapper>
          ))}
        </div>
        <Footer />
      </section>
    </>
  );
};

export default ServicesPage;
