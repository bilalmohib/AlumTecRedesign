import { useState, useEffect } from "react";

import Navbar from "@/app/Components/Navbar";
import HomeBanner from "@/app/pageComponents/Home/HomeBanner";

const Home = () => {

  return (
    <div>
      <Navbar />

      <section>
        <HomeBanner />
      </section>

      {/* <Box className={styles.footer}>
        <Footer />
      </Box> */}
    </div>
  )
}
export default Home;