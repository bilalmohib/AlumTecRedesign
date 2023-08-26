import { useState, useEffect } from "react";

import Navbar from "@/app/Components/Navbar";
import HomeBanner from "@/app/pageComponents/Home/HomeBanner";
import HomeServicesBlock from "@/app/pageComponents/Home/HomeServicesBlock";
import HomeProjectsBlock from "@/app/pageComponents/Home/HomeProjectsBlock";
import HomeBlogsBlock from "@/app/pageComponents/Home/HomeBlogsBlock";
import Footer from "@/app/Components/Footer";
import HomeTestimonialsBlock from "@/app/pageComponents/Home/HomeTestimonialsBlock";
import GetInTouchContactForm from "@/app/Components/GetInTouchContactForm";

import styles from "../styles/Home.module.css";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home | AlumTec, Glazing solutions are our passion</title>
        <meta
          name="description"
          content="AlumTec, Glazing solutions are our passion"
        />
        <meta
          name="keywords"
          content="AlumTec, Glazing solutions, Aluminium curtain wall, windows and doors, Glass and Aluminium, Dubai Green Building Regulations, Dubai Civil Defense, Abu Dhabi Estidama Regulations, Canada, Dubai, UAE, United Arab Emirates, AlumTec, Glazing solutions are our passion"
        />
        <meta name="author" content="Muhammad-Bilal-7896" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <section>
        <HomeBanner />
        <HomeServicesBlock />
        <HomeProjectsBlock />

        <div
          className={`mt-[72rem] sm:mt-[70rem] lg:mt-auto ${styles.projectsBottomMargin}`}
        ></div>

        {/* <HomeBlogsBlock /> */}
        {/* <HomeTestimonialsBlock /> */}
        {/* <GetInTouchContactForm /> */}
        <br />
        <br />
      </section>

      <div style={{ marginTop: 560, position: "relative" }}>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
