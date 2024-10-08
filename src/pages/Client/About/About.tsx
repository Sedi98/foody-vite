import Navbar from "../../../components/Shared/Navbar/Navbar";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";

import FlexTextContainer from "../../../components/Client/Main/FlexTextContainer/FlexTextContainer";
import FlexImgContainer from "../../../components/Client/Main/FlexImgContainer/FlexImgContainer";
import { useTranslation } from "react-i18next";

import Footer from "../Footer/Footer";

//
import aboutImg from "../../../assets/img/about.svg";

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <HelmetLib title={t("aboutTitle")} />
      <div className="mx-5 my-5">
        <Navbar />
      </div>
      <section className="h-[100vh] flex flex-col lg:flex-row mx-5 my-5 py-5 px-5 text-center lg:text-left">
        <FlexTextContainer
          title={t("aboutTitle")}
          text={t("aboutText")}
        />
        <FlexImgContainer url={aboutImg} alt="about" />
      </section>


      <Footer />
    </>
  );
};

export default About;
