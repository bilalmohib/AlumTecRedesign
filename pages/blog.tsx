import Head from "next/head";
import Navbar from "@/app/Components/Navbar";

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
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <h1 className="text-center text-7xl text-blue-800 mt-40">Blog</h1>

      <p className="text-center text-3xl text-blue-800 mt-1">
        Page under construction. Stay tuned! 🚧
      </p>
    </div>
  );
};
export default Blog;
