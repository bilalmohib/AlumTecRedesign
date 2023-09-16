import Navbar from "@/app/Components/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import Image from "next/image";
import ButtonBase from "@mui/material/ButtonBase";
import Link from "next/link";
import { useEffect } from "react";
import Footer from "@/app/Components/Footer";

const BlogDetails = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Your DOM manipulation code here
    }
  }, []);

  const { title } = router.query;

  return (
    <div>
      <Head>
        <title>
          Blog Details | {title} | AlumTec, Glazing solutions are our passion
        </title>
        <meta
          name="description"
          content={`${title} | A guide to the latest trends in the glazing industry and how AlumTec is leading the way in the Canada`}
        />
        <meta
          name="keywords"
          content="AlumTec, Glazing solutions, Aluminium curtain wall, windows and doors, Glass and Aluminium, Dubai Green Building Regulations, Dubai Civil Defense, Abu Dhabi Estidama Regulations, Canada, Dubai, UAE, United Arab Emirates, AlumTec, Glazing solutions are our passion"
        />
        <meta name="author" content="bilalmohib" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="mt-[105px] mx-20 pt-3">
        <h3 className="text-5xl font-semibold my-0 mt-4 text-[#37474F] font-sans">
          {title}
        </h3>
        <div className="flex w-full mt-4">
          <div className="w-6/12">
            <div className="flex flex-row mt-4">
              <Image
                src="https://img.freepik.com/free-photo/detail-glass-architectures-blue-tone_1359-612.jpg?w=900&t=st=1694757138~exp=1694757738~hmac=0d12552920a362ffc0b95571dd0d9395b0b131f96d1ea4107ee0976e84e04bc5"
                alt="author"
                width={40}
                height={40}
                className="rounded-full block"
              />
              <h3 className="m-0 font-light mt-[5px] ml-3">Arya Stark</h3>
              <h3 className="m-0 font-light mt-[5px] ml-3 text-gray-400">
                {new Date().toLocaleString("default", { month: "long" })}{" "}
                {new Date().getFullYear()}
              </h3>
            </div>
          </div>
          <div className="w-6/12 flex justify-end items-end">
            <div className="flex flex-row mt-4">
              <Link
                key="title"
                className="ml-2"
                href="https://www.facebook.com/Alumtec-110622934682818"
              >
                <BsFacebook className="text-3xl m-0 rounded-full text-[#0b7ce6]" />
              </Link>
              <Link
                key="title"
                className="ml-2"
                href="https://www.facebook.com/Alumtec-110622934682818"
              >
                <FaSquareXTwitter className="text-3xl m-0 text-[#060707]" />
              </Link>
              <Link
                key="title"
                className="ml-2"
                href="https://www.facebook.com/Alumtec-110622934682818"
              >
                <FaLinkedin className="text-3xl m-0 text-[#0964c0]" />
              </Link>
              <Link
                key="title"
                className="ml-2"
                href="https://www.facebook.com/Alumtec-110622934682818"
              >
                <IoLogoWhatsapp className="text-3xl m-0 text-[#0cc042]" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Image
            src="https://img.freepik.com/free-photo/detail-glass-architectures-blue-tone_1359-612.jpg?w=900&t=st=1694757138~exp=1694757738~hmac=0d12552920a362ffc0b95571dd0d9395b0b131f96d1ea4107ee0976e84e04bc5"
            alt="author"
            width={800}
            height={500}
            className="rounded-md block w-full h-96"
          />
        </div>
        <div className="mt-4">
          <p className="text-lg text-[#737678]">
            The construction industry has flourished in the provincial capital
            of Punjab – Lahore, where development is widespread, attracting
            excessive investments. Several construction companies in Pakistan
            have made a name for themselves in this metropolis, contributing to
            several landmark projects in the provincial capital. Get to know top
            real estate developers in Pakistan.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Hassan Construction Company
          </h2>
          <p className="text-lg text-[#737678]">
            Established in 1996, Hassan Construction Company has been serving
            the city with a diversified portfolio of 26 years, including
            experience in engineering, infrastructure, interior designing, and
            exterior renovations. The trusted company is listed under the
            Pakistan Engineering Council, making it a legitimate name in the
            city’s construction market. The company boasts a team of experts,
            along with several unique and innovative services such as :
          </p>
          <ul>
            <li>Glass electric lamination</li>
            <li>Electromagnetic windows and doors</li>
            <li>ceiling,</li>
            <li>Wall treatments</li>
          </ul>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Sadia and Ammar Associates
          </h2>
          <p className="text-lg text-[#737678]">
            A team of experts composed of architects, engineers, urban planners,
            and designers – Sadia and Ammar Associates is one of the foremost
            construction companies in Lahore. Established in 2013, the company
            has made a mark in the city’s construction market in just a few
            years owing to its quality-assured professional services.
          </p>
          <p className="text-lg text-[#737678]">
            The company has successfully expanded its portfolio to several other
            cities across the country, offering design solutions, world-class
            architecture, and renovation services to all of Pakistan. The unique
            attribute of SAA is their team of specialised consultants for
            structural engineering, geographical surveys, soil tests, and
            environmental control – ensuring all construction needs are met with
            utmost quality. This has allowed the company to become one of the
            top construction companies in Pakistan.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Ahmed Construction Company
          </h2>
          <p className="text-lg text-[#737678]">
            Another one of Lahore’s premier construction companies – Ahmed
            Construction Company (ACCO) was founded in 1999, with the promise of
            delivering quality and excellence to its valued customers. Over the
            years, the company has been responsible for several residential and
            commercial projects in Lahore.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Glorious Builders
          </h2>
          <p className="text-lg text-[#737678]">
            Glorious Builders – a name recognised for its home construction
            services in Lahore has been a forerunner in the metropolis’
            construction landscape. The company takes pride in its promise to
            deliver innovation and exceptionally consistent services by keeping
            in view the essentials For House Construction. The company has
            landed several residential construction projects in some of Lahore’s
            finest localities such as DHA, Model Town, Valencia Town, and Bahria
            Town Lahore.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Amer Adnan Associates
          </h2>
          <p className="text-lg text-[#737678]">
            ‘We build what others don’t dare to’ – a motto well-suited for an
            innovative company that has made its mark in Lahore. Amer Adnan
            Associates is a construction and architectural design company that
            specialises in building spaces that offer comfort not just for your
            body, but for your mind as well. The company uses smart construction
            technologies in real estate to perform their daily operations. The
            firm offers services ranging from interior design to all-out
            remodelling. Chic cafes, luxury living spaces, tech-savvy offices;
            Amer Adnan Associates has it all.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Multi Construction Services
          </h2>
          <p className="text-lg text-[#737678]">
            Established in 2000, Multi Construction Services started as an
            engineering solutions company in Lahore, but it has since then
            expanded – both in terms of services and areas. Today, the company
            offers some of the best construction, architectural, interior,
            renovation, and maintenance services. Located near Badshahi Mosque
            Lahore, the company is engaged in designing several infrastructure
            projects pertaining to roads, pavements, sewerage lines, and overall
            city development. The firm has played an important role in the
            city’s development, along with several other construction companies
            in Lahore.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Urban developers
          </h2>
          <p className="text-lg text-[#737678]">
            Lahore’s chartered town planners – Urban Developers are another one
            of the city’s renowned names. The company boasts a collective
            portfolio of almost 30 years in the country’s real estate sector,
            showcasing its experience in designing and modelling some of
            Lahore’s most successful commercial and residential projects.
          </p>
          <p className="text-lg text-[#737678]">
            The company’s mission encompasses the enhancement of modern living
            through top-notch living amenities, education, and healthcare. This
            promise can be seen through their projects such as I.T. Tower and
            Midland Farmhouses.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Mohsin Shaheen Construction Company
          </h2>
          <p className="text-lg text-[#737678]">
            Reputed as a leader in Lahore’s construction industry – Mohsin
            Shaheen Construction Company is known to deliver exceptional quality
            all the while meeting its deadlines efficiently. If you want someone
            to look after your construction finances, this is the company for
            you. The company has earned a name for itself as one of the city’s
            most trustworthy and reputable contractors.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Habib Construction Services
          </h2>
          <p className="text-lg text-[#737678]">
            Armed with innovation and quality, Habib Construction Services
            boasts a fleet of cutting-edge equipment along with a team of
            experts that can bring your dream living space to life. The company
            takes pride in bringing world-class services to its customers,
            putting customer satisfaction as a top priority.
          </p>
          <p className="text-lg text-[#737678]">
            The company has an unparalleled track record in the construction
            industry with several major projects in its portfolio. HCS has left
            its mark and laid a foundation for new engineering innovations to
            follow. This makes HBC the most innovative company in this list of
            construction companies in Lahore.
          </p>
          <h2 className="text-3xl text-[#37474F] font-light my-0">Kingcrete</h2>
          <p className="text-lg text-[#737678]">
            Another one of Lahore’s leading construction conglomerates –
            Kingcrete is an engineering, project management, and construction
            firm that has been serving the metropolis since 1976. The company
            has navigated through the city’s construction scene with its
            expertise, experience, quality, and most of all, reliability.
          </p>
          <p className="text-lg text-[#737678]">
            Kingcrete has set the bar high with several commercial and
            residential projects in the city such as runways, roads, bridges,
            buildings, and pipeline work. With such an excellent portfolio, the
            company has truly made a name for itself among the construction
            companies in Lahore. To keep up with the volatile nature of RE
            industry, the company also use Construction Management Software.
          </p>
          <p className="text-lg text-[#737678]">
            With the construction industry contributing greatly to the real
            estate sector, it is necessary to highlight the names of the largest
            construction companies in Lahore that have not only developed Lahore
            but turned it into a marvel of luxury living. These companies will
            leave no stone unturned to balance out your construction costs. This
            can be owed to their coveted projects and strategic policies.
            Whether you have an under-construction project or you want to revamp
            your existing projects, consider these companies.
          </p>
        </div>
        {/* Add divider here */}
        <div className="border-t border-gray-300 border-solid border-b-0 my-10"></div>
        {/* Add divider here */}
        <div className="mt-4">
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Related Posts
          </h2>
          <div className="grid grid-cols-3 gap-6 h-96 mt-6">
            {[1, 2, 3].map((item, index) => {
              return (
                <div
                  key={index}
                  className="border-[0.2px] w-full h-full border-solid border-gray-300 rounded-sm"
                >
                  <Image
                    src={
                      "https://wpassets.graana.com/blog/wp-content/uploads/2023/08/Thokar-niaz-baig-1-645x338.jpg.webp"
                    }
                    alt="blog"
                    width={400}
                    height={200}
                    className="w-full h-52 block"
                  />
                  <div className="mx-5 flex flex-col-reverse justify-evenly h-44">
                    <div className="flex justify-between h-fit">
                      <h3 className="my-0 bg-emerald-500 p-1 px-3 text-sm rounded-sm text-center font-sans w-fit">
                        Company News
                      </h3>
                      <h4 className="text-base my-0 mt-[2px] font-light text-gray-600 ">
                        August 31, 2023
                      </h4>
                    </div>
                    <h2 className="text-3xl text-[#37474F] font-light my-0">
                      Thokar Niaz Baig Interchange
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Add divider here */}
        <div className="border-t border-gray-300 border-solid border-b-0 my-8 mb-3"></div>
        {/* Add divider here */}
        <p className="text-lg text-[#737678]">
          Comments are now closed for this article.
        </p>
        {/* Add divider here */}
        <div className="border-t border-gray-300 border-solid border-b-0 my-20 mb-6"></div>
        {/* Add divider here */}
      </section>
      <Footer />
    </div>
  );
};
export default BlogDetails;
