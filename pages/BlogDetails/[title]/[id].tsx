import Head from "next/head";
import { useRouter } from "next/router";
import { db, auth } from "@/firebase";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { BsFacebook } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";

import {
  doc,
  collection,
  onSnapshot,
  addDoc,
  query,
  orderBy,
  deleteDoc,
  setDoc,
  Timestamp,
  getDocs,
} from "firebase/firestore";
import { BlogDataTypes } from "@/app/pageComponents/Blog/BlogBody/types";
import Blog from "@/pages/blog";
import { ButtonBase } from "@mui/material";
import { formatDateFromFirebaseTimestamp } from "@/app/utils/commonFunctions";
import FormattedDateFromTimeStamp from "@/app/Components/FormattedDateFromTimeStamp";

interface BlogDetailsInterface {
  blogDetails: BlogDataTypes;
  blogs: BlogDataTypes[];
}

const BlogDetails = ({ blogDetails, blogs }: BlogDetailsInterface) => {
  const router = useRouter();

  // const { id } = router.query;
  // const { slug } = router.query;

  // For Loading
  // const [user, loadingAuth, errorAuth] = useAuthState(auth);

  // For Blogs
  /////////////////////////////////////// Database Part ////////////////////////////////////////////////
  // let q = query(collection(db, "Blogs"));

  // const [snapshot, loading, error] = useCollection(q, {
  //   snapshotListenOptions: { includeMetadataChanges: true },
  // });

  // const [loading, setLoading] = useState(true);

  // const [blogs, setBlogs] = useState<BlogDataTypes[]>([]);
  // const [blogDetails, setBlogDetails] = useState<BlogDataTypes>({} as BlogDataTypes);

  // useEffect(() => {
  //   if (!loading && snapshot && id) {

  //     let localObj: any;
  //     let localArrBlogs: any[] = [];

  //     let filteredArrBlogsLocal = snapshot?.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  //     let arrBlogsLocal: any[] = snapshot?.docs.map(doc => ({ ...doc.data(), id: doc.id }));

  //     localObj = filteredArrBlogsLocal;

  //     localObj = localObj.filter((blog: any) => blog?.id.toString() == id?.toString());

  //     // Filter the blogs array and extract only select first three blogs
  //     for (let i = 0; i < arrBlogsLocal.length; i++) {
  //       if (i === 3) {
  //         break;
  //       }
  //       localArrBlogs[i] = arrBlogsLocal[i];
  //     }

  //     let objBlogDetails: BlogDataTypes = localObj[0];

  //     setBlogDetails(objBlogDetails);
  //     setBlogs(localArrBlogs);
  //     console.log("Blogs ==> ", objBlogDetails);
  //     console.log("Created by email ==> ", email);
  //     console.log("Blogs Email ==> ", objBlogDetails?.id.toString() == id?.toString());
  //   }

  // }, [loading, snapshot, id]);
  // FOR GETTING BLOGS

  const shareOnWhatsapp = () => {
    const shareText = 'Check out this awesome content!';
    let url = `https://alumtec.ca/BlogDetails/${blogDetails?.slug}/${blogDetails?.id}`
    const shareUrl = url;

    // Create the WhatsApp share URL using the WhatsApp Web API
    const whatsappApiUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}%20${encodeURIComponent(shareUrl)}`;

    // Open a new window or redirect to the WhatsApp API URL
    window.open(whatsappApiUrl, '_blank');
  }

  return (
    <div>
      <Head>
        <title>
          {blogDetails.title}, AlumTec, Glazing solutions are our passion
        </title>
        <meta
          name="description"
          content={`${blogDetails.title} A guide to the latest trends in the glazing industry and how AlumTec is leading the way in the Canada`}
        />
        <meta
          name="keywords"
          content="AlumTec, Glazing solutions, Aluminium curtain wall, windows and doors, Glass and Aluminium, Dubai Green Building Regulations, Dubai Civil Defense, Abu Dhabi Estidama Regulations, Canada, Dubai, UAE, United Arab Emirates, AlumTec, Glazing solutions are our passion"
        />
        <meta name="author" content="bilalmohib" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <section className="mt-[105px] mx-20 pt-3">
        <h3 className="text-5xl font-semibold my-0 mt-4 text-[#37474F] font-sans">
          {blogDetails.title}
        </h3>
        <div className="flex w-full mt-4">
          <div className="w-6/12">
            <div className="flex flex-row mt-4">
              <Image
                src={(blogDetails.photoURL) ? (blogDetails.photoURL) : ("https://img.freepik.com/free-photo/detail-glass-architectures-blue-tone_1359-612.jpg?w=900&t=st=1694757138~exp=1694757738~hmac=0d12552920a362ffc0b95571dd0d9395b0b131f96d1ea4107ee0976e84e04bc5")}
                alt="author"
                width={40}
                height={40}
                className="rounded-full block"
              />
              <h3 className="m-0 font-light mt-[5px] ml-3">{blogDetails.authorName}</h3>
              <h3 className="m-0 font-light mt-[5px] ml-3 text-gray-400">
                {/*  <FormattedDateFromTimeStamp timeStamp={blogDetails.createdAt} /> */}
                {new Date(blogDetails.createdAt).toDateString()}
              </h3>
            </div>
          </div>
          <div className="w-6/12 flex justify-end items-end">
            <div className="flex flex-row mt-4">
              <p
                className="ml-2"

              >
                <BsFacebook className="text-3xl m-0 rounded-full text-[#0b7ce6]" />
              </p>
              <p
                className="ml-2"
              >
                <FaSquareXTwitter className="text-3xl m-0 text-[#060707]" />
              </p>
              <p
                className="ml-2"
              >
                <FaLinkedin className="text-3xl m-0 text-[#0964c0]" />
              </p>
              <ButtonBase
                className="ml-2 cursor-pointer"
                onClick={() => shareOnWhatsapp()}
              >
                <IoLogoWhatsapp className="text-3xl m-0 text-[#0cc042]" />
              </ButtonBase>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Image
            src={(blogDetails?.coverImage) ? (blogDetails?.coverImage) : ("https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif")}
            alt="cover image"
            width={800}
            height={500}
            className="rounded-md block w-full h-[500px] border border-slate-300 border-solid object-cover"
          />
        </div>
        {/* <div className="mt-4">
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
        </div> */}
        <div
          className="mt-4 w-full block h-auto"
          dangerouslySetInnerHTML={{ __html: blogDetails?.content }}
        />
        {/* Add divider here */}
        <div className="border-t border-gray-300 border-solid border-b-0 my-10"></div>
        {/* Add divider here */}
        <div className="mt-4">
          <h2 className="text-3xl text-[#37474F] font-light my-0">
            Related Posts
          </h2>
          <div className="grid grid-cols-3 gap-6 h-96 mt-6">
            {blogs.map((item: BlogDataTypes, index: number) => {
              return (
                <div
                  key={index}
                  className="border-[0.2px] w-full h-full border-solid border-gray-300 hover:bg-indigo-50 cursor-pointer rounded-sm"
                  onClick={() => router.push(`/BlogDetails/${item?.slug}/${item?.id}`)}
                >
                  <Image
                    src={
                      (item?.coverImage) ? (item?.coverImage) : ("https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif")
                    }
                    alt="cover image"
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
                        {/*   <FormattedDateFromTimeStamp timeStamp={item.createdAt} /> */}
                        {new Date(item.createdAt).toDateString()}
                      </h4>
                    </div>
                    <h2 className="text-3xl text-[#37474F] font-light my-0">
                      {item?.title}
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

export async function getServerSideProps(context: any) {
  const { id } = context.query;

  let q = query(collection(db, "Blogs"));

  const snapshot = await getDocs(q);

  let localObj;
  let localArrBlogs = [];

  let filteredArrBlogsLocal = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
  let arrBlogsLocal = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));

  localObj = filteredArrBlogsLocal;

  localObj = localObj.filter((blog) => blog?.id.toString() === id?.toString());

  for (let i = 0; i < arrBlogsLocal.length; i++) {
    if (i === 3) {
      break;
    }
    localArrBlogs[i] = arrBlogsLocal[i];
  }

  let objBlogDetails = localObj[0];

  return {
    props: {
      blogDetails: objBlogDetails,
      blogs: localArrBlogs,
    },
  };
}

export default BlogDetails;
