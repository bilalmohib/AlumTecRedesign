import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { contact_data_list } from "@/app/data/Contacts";
import ContactCardItem from "@/app/pageComponents/Contact/ContactCardItem";
import ContactForm from "@/app/pageComponents/Contact/ContactForm";
import ContactUsBanner from "@/app/pageComponents/Contact/ContactUsBanner";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <div>
      <Navbar />

      <section
        className="relative"
      // Yahan par border add karna hai
      >
        <div className="w-full relative min-h-full lg:min-h-[1880px]">
          <div className="w-full border-solid border-red-500 border-[20px]">
            <ContactUsBanner />

            <div className="w-8/12 h-fit border-solid border-green-600 border-[5px] left-0 right-0 mx-auto z-[10] mt-0">
              <ContactForm />
            </div>

            <div className="w-full relative h-auto">
              <div className="bg-[url('/Images/Contact/curved_lines.jxr')] bg-cover bg-no-repeat bg-center w-full h-auto left-0 right-0 mx-auto absolute z-[10] mt-[320px] flex justify-center md:px-5 lg:px-8 xl:px-10">
                <div className="h-auto border border-solid border-red-600 w-full grid grid-cols-3 gap-3 container mt-24">
                  {contact_data_list.map((item, index) => {
                    return (
                      <div key={index} className="cursor-pointer">
                        <ContactCardItem
                          icon={item.icon}
                          title={item.title}
                          description={item.description}
                          contact={item.contact}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-12/12 h-[419px] left-0 right-0 mx-auto z-[10] mt-[1420px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5760.014846868028!2d-79.531907!3d43.793459!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2fbb83f6826b%3A0x16706af0c87b8cd8!2s3300%20Hwy%207%20Suite%20368%2C%20Concord%2C%20ON%20L4K%200G2!5e0!3m2!1sen!2sca!4v1692753963018!5m2!1sen!2sca"
              width="100%"
              height="419"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <div
      // style={{
      //   border: "5px solid red",
      // }}
      >
        <Footer />
      </div>
    </div>
  );
};
export default ContactUsPage;
