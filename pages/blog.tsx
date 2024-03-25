import Head from "next/head";
import Navbar from "@/app/Components/Navbar";
import BlogBanner from "@/app/pageComponents/Blog/BlogBanner";
import BlogBody from "@/app/pageComponents/Blog/BlogBody";

const Blog = () => {
  return (
    <div>
      <Head>
        <title>Blog | AlumTec, Glazing solutions are our passion</title>
        <meta
          name="description"
          content="A guide to the latest trends in the glazing industry and how AlumTec is leading the way in the Canada"
        />
        <meta
          name="keywords"
          content="AlumTec, Glazing solutions, Aluminium curtain wall, windows and doors, Glass and Aluminium, Dubai Green Building Regulations, Dubai Civil Defense, Abu Dhabi Estidama Regulations, Canada, Dubai, UAE, United Arab Emirates, AlumTec, Glazing solutions are our passion"
        />
        <meta name="author" content="bilalmohib" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <BlogBanner />
      <BlogBody/>
    </div>
  );
};
export default Blog;
