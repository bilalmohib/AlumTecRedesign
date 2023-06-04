import { useState, useEffect } from "react";

import Navbar from "@/app/Components/Navbar";
import HomeBanner from "@/app/pageComponents/Home/HomeBanner";
import HomeServicesBlock from "@/app/pageComponents/Home/HomeServicesBlock";
import HomeProjectsBlock from "@/app/pageComponents/Home/HomeProjectsBlock";
import HomeBlogsBlock from "@/app/pageComponents/Home/HomeBlogsBlock";

const Home = () => {
  return (
    <div>
      <Navbar />

      <section>
        <HomeBanner />
        <HomeServicesBlock />
        <HomeProjectsBlock />
        <HomeBlogsBlock />
      </section>

      {/* <Box className={styles.footer}>
        <Footer />
      </Box> */}
    </div>
  );
};
export default Home;
