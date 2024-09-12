import Navbar from "../../../components/Shared/Navbar/Navbar";

import FlexTextContainer from "../../../components/Client/Main/FlexTextContainer/FlexTextContainer";
import FlexImgContainer from "../../../components/Client/Main/FlexImgContainer/FlexImgContainer";

import Footer from "../Footer/Footer";

//
import aboutImg from "../../../assets/img/about.svg";

const About = () => {
  return (
    <>
      <div className="mx-5 my-5">
        <Navbar />
      </div>
      <section className="h-[100vh] flex flex-col lg:flex-row mx-5 my-5 py-5 px-5 text-center lg:text-left">
        <FlexTextContainer
          title="About Us"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <FlexImgContainer url={aboutImg} alt="about" />
      </section>


      <Footer />
    </>
  );
};

export default About;
