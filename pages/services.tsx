import Navbar from "@/app/Components/Navbar";
import ServicesBanner from "@/app/pageComponents/Services/ServicesBanner";

const ServicesPage = () => {
  return (
    <>
      <Navbar bgWhite={true} />

      <section>
        <ServicesBanner />
      </section>
    </>
  );
};
export default ServicesPage;
