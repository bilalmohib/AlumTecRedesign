import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { contact_data_list } from "@/app/data/Contacts";
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
        <div className="w-full relative min-h-[1880px]">
          <div className="w-full absolute border-[20px]">
            <ContactUsBanner />

            <div className="w-full relative h-auto">
              <div className="w-full bg-[url('/images/Contact/curved_lines.jxr')] bg-cover bg-no-repeat bg-center h-[899px] absolute" />

              <div className="w-full h-auto left-0 right-0 mx-auto absolute z-[10] mt-[435px]">
                <div className="h-[300px] w-full grid grid-cols-3 gap-3 container mt-24">
                  {contact_data_list.map((item, index) => {
                    return (
                      <div key={index} className="cursor-pointer">
                        <div className="flex flex-col justify-center items-center border rounded-lg shadow-md bg-gray-50 hover:bg-slate-100 pt-4 pb-3">
                          <div className="bg-[#123E95] rounded-md w-16 h-16 p-[10px]">
                            <Image
                              className="w-11 h-11"
                              src={item.icon}
                              width={44}
                              height={44}
                              alt={item.title}
                              title={item.title}
                            />
                          </div>
                          <h3 className="text-[#191919] font-lato font-bold text-2xl leading-8 tracking-[0.2px] mt-4">
                            {item.title}
                          </h3>
                          <p className="text-[#757575] text-center font-lato text-base font-normal leading-7">
                            {item.description}
                          </p>
                          <p className="text-[#191919] text-center font-lato text-base font-bold leading-7">
                            {item.contact}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-8/12 h-[1200px] left-0 right-0 mx-auto absolute z-[10] mt-[350px]">
            <ContactForm />
          </div>
          <div className="w-12/12 h-[419px] left-0 right-0 mx-auto absolute z-[10] mt-[1460px]">
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
        style={{
          border: "5px solid red",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};
export default ContactUsPage;
