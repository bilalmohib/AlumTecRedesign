import Navbar from "@/app/Components/Navbar";
import AboutBanner from "@/app/pageComponents/About/AboutBanner";

const AboutPage = () => {
    return (
        <>
            <Navbar
                bgWhite={true}
            />

            <section>
                <AboutBanner />
                <h1>This is a</h1>
            </section>
        </>
    )
}
export default AboutPage;