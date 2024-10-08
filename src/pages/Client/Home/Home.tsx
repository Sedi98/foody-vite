import Hero from "../../../components/Client/Main/Hero/Hero";
import Title from "../../../components/Shared/Title/Title";
import Paragraph from "../../../components/Shared/Paragraph/Paragraph";
import CardList from "../../../components/Client/Main/CardList/CardList";
import Footer from "../Footer/Footer";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";
//
import { useTranslation } from "react-i18next";
//
import FlexImgContainer from "../../../components/Client/Main/FlexImgContainer/FlexImgContainer";
import FlexTextContainer from "../../../components/Client/Main/FlexTextContainer/FlexTextContainer";
//
import kfc from "../../../assets/img/kfc.svg";
import pizza from "../../../assets/img/pizza.svg";
import potato from "../../../assets/img/potato.svg";


const Home = (): JSX.Element => {
const { t } = useTranslation();

  

  return (
    <>
    <HelmetLib title="Home" />
      <Hero />
      <section className="px-10 py-10 flex flex-col gap-10 ">
        <Title text={t("homeFeaturesTitle")} variation="container" />
        <Paragraph
          text={t("homeFeaturesText")}
          variation="container"
        />
        <CardList />
      </section>

      <section className="py-10 px-10 flex flex-col lg:flex-row ">
        <FlexTextContainer
          title={t("homeTestTitle")}
          text={t("homeTestText")}
        />
        <FlexImgContainer url={kfc} alt="food" />
      </section>

      <section className="py-10 px-10 flex flex-col lg:flex-row-reverse  ">
        <FlexTextContainer
        title={t("homeTestTitle")}
        text={t("homeTestText")}
        />
        <FlexImgContainer url={pizza} alt="food" />
      </section>

      <section className="py-10 px-10 flex flex-col lg:flex-row ">
        <FlexTextContainer
        title={t("homeTestTitle")}
        text={t("homeTestText")}
        />
        <FlexImgContainer url={potato} alt="food" />
      </section>

      <section className="px-10 py-10 flex flex-col gap-10 ">
        <Title text={t("homePopularUpdateTitle")} variation="container" />
        <Paragraph
          text={t("homePopularUpdateText")}
          variation="container"
        />
        <CardList />
      </section>

      <Footer />
    </>
  );
};

export default Home;
