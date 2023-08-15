import { useState, useEffect } from "react";

import Navbar from "@/app/Components/Navbar";
import HomeBanner from "@/app/pageComponents/Home/HomeBanner";
import HomeServicesBlock from "@/app/pageComponents/Home/HomeServicesBlock";
import HomeProjectsBlock from "@/app/pageComponents/Home/HomeProjectsBlock";
import HomeBlogsBlock from "@/app/pageComponents/Home/HomeBlogsBlock";
import Footer from "@/app/Components/Footer";
import HomeTestimonialsBlock from "@/app/pageComponents/Home/HomeTestimonialsBlock";
import GetInTouchContactForm from "@/app/Components/GetInTouchContactForm";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section>
        <HomeBanner />
        <HomeServicesBlock />
        <HomeProjectsBlock />

        {/* <HomeBlogsBlock /> */}
        {/* <HomeTestimonialsBlock /> */}
        {/* <GetInTouchContactForm /> */}
        <br />
        <br />
      </section>

      <div style={{ marginTop: 560,position:"relative" }}>
        <Footer />
      </div>
    </div>
  );
};
export default Home;
