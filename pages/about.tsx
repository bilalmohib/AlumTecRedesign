import Navbar from "@/app/Components/Navbar";
import AboutBanner from "@/app/pageComponents/About/AboutBanner";
import AboutMissionBlock from "@/app/pageComponents/About/AboutMissionBlock";
import AboutStoryBlock from "@/app/pageComponents/About/AboutStoryBlock";

const AboutPage = () => {
  return (
    <>
      <Navbar bgWhite={true} />

      <section>
        <AboutBanner />
        <AboutMissionBlock />
        {/* <AboutStoryBlock /> */}
      </section>
    </>
  );
};
export default AboutPage;
