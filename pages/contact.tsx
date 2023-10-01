import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { contact_data_list } from "@/app/data/Contacts";
import { ContactDataType } from "@/app/data/Contacts/types";
import ContactCardItem from "@/app/pageComponents/Contact/ContactCardItem";
import ContactForm from "@/app/pageComponents/Contact/ContactForm";
import ContactUsBanner from "@/app/pageComponents/Contact/ContactUsBanner";

const ContactUsPage = () => {
  const openContactModal = (item: ContactDataType) => {
    // window.open(`tel:${contact}`, "_blank");

    if (item.type === "email") {
      window.open(`mailto:${item.contact}`);
    } else if (item.type === "phone") {
      window.open(`tel:${item.contact}`);
    } else {
      // window.open(`${item.contact}`);
    }
  };

  return (
    <div>
      <Navbar />

      <section
        className="relative"
        // Yahan par border add karna hai
      >
        <div className="w-full relative min-h-full">
          <div className="w-full">
            <ContactUsBanner />

            <div className="w-full relative h-auto">
              <div className="bg-[url('/Images/Contact/mobile_curved_lines.jxr')] sm:bg-[url('/Images/Contact/curved_lines.jxr')] bg-cover bg-no-repeat bg-center w-full h-auto mx-auto z-[10] flex flex-col justify-center md:px-5 lg:px-8 xl:px-10">
                <div className="w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:8/12 h-fit mx-auto z-[10] mt-0 sm:mt-[-35vh]">
                  <ContactForm />
                </div>
                <div className="w-full sm:w-full md:w-full mlg:w-full lg:w-full 2xl:w-10/12 h-auto mx-auto grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-3 md:gap-3 lg:gap-3 xl:gap-6 2xl:gap-10 container my-6 sm:my-8 md:my-10 lg:my-14 xl:my-16 2xl:my-20">
                  {contact_data_list.map(
                    (item: ContactDataType, index: number) => {
                      return (
                        <div
                          key={index}
                          className="cursor-pointer"
                          onClick={() => openContactModal(item)}
                        >
                          <ContactCardItem
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            contact={item.contact}
                            type={item.type}
                          />
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-12/12 h-[419px] mx-auto z-[10]">
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

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default ContactUsPage;
