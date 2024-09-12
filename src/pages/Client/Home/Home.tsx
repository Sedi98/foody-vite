import Hero from "../../../components/Client/Main/Hero/Hero";
import Title from "../../../components/Shared/Title/Title";
import Paragraph from "../../../components/Shared/Paragraph/Paragraph";
import CardList from "../../../components/Client/Main/CardList/CardList";
import Footer from "../Footer/Footer";
//
import FlexImgContainer from "../../../components/Client/Main/FlexImgContainer/FlexImgContainer";
import FlexTextContainer from "../../../components/Client/Main/FlexTextContainer/FlexTextContainer";
//
import kfc from "../../../assets/img/kfc.svg";
import pizza from "../../../assets/img/pizza.svg";
import potato from "../../../assets/img/potato.svg";
const Home = (): JSX.Element => {
  return (
    <>
      <Hero />
      <section className="px-10 py-10 flex flex-col gap-10 ">
        <Title text="Features" variation="container" />
        <Paragraph
          text="Welcome to our vibrant food site, a digital haven for culinary enthusiasts seeking a delightful gastronomic experience. Within these virtual pages."
          variation="container"
        />
        <CardList />
      </section>

      <section className="py-10 px-10 flex flex-col lg:flex-row ">
        <FlexTextContainer
          title="Menu That Always Make You Fall In Love"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <FlexImgContainer url={kfc} alt="food" />
      </section>

      <section className="py-10 px-10 flex flex-col lg:flex-row-reverse  ">
        <FlexTextContainer
          title="Menu That Always Make You Fall In Love"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <FlexImgContainer url={pizza} alt="food" />
      </section>


      <section className="py-10 px-10 flex flex-col lg:flex-row ">
        <FlexTextContainer
          title="Menu That Always Make You Fall In Love"
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        />
        <FlexImgContainer url={potato} alt="food" />
      </section>


      <section className="px-10 py-10 flex flex-col gap-10 ">
        <Title text="Our Popular Update New Foods" variation="container" />
        <Paragraph
          text="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          variation="container"
        />
        <CardList />
      </section>

      <Footer />

      
    </>
  );
};

export default Home;
