import Navbar from "@/app/Components/Navbar";
import ContactForm from "@/app/pageComponents/Contact/ContactForm";
import ContactUsBanner from "@/app/pageComponents/Contact/ContactUsBanner";

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />

      <section>
        <div className="w-full relative h-auto">
          <div className="w-full h-full absolute">
            <ContactUsBanner />

            <div className="w-full relative h-auto">
              <div className="w-full bg-[url('/images/Contact/curved_lines.jxr')] bg-cover bg-no-repeat bg-center h-[899px] absolute" />

              <div
                className="w-8/12 h-899px left-0 right-0 mx-auto absolute z-[10] mt-[450px]"
                style={{ border: "4px solid red", height: 300, width: "100%" }}
              ></div>
            </div>
          </div>
          <div className="w-8/12 h-899px left-0 right-0 mx-auto absolute z-[10] mt-[350px]">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};
export default ContactUsPage;
