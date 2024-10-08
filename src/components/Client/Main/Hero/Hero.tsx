import React from "react";
import Title from "../../../Shared/Title/Title";
import Paragraph from "../../../Shared/Paragraph/Paragraph";
import heroImg from "../../../../assets/img/hero_img.svg";
import Button from "../../../Shared/Button/Button";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import heroOne from '../../../../assets/img/hero_card_one.svg'
import heroTwo from '../../../../assets/img/hero_card_two.svg'
import heroThree from '../../../../assets/img/hero_card_three.svg'

import Navbar from "../../../Shared/Navbar/Navbar";

const Hero: React.FC = () => {
  const navigate= useNavigate()
  const {t} = useTranslation()
  return (
    <div className="mx-0 my-0  lg:mx-5 lg:my-5 rounded-md">
    <div className="bg-[#f3f4f6]">
    <Navbar />
    </div>
      

      <div className="flex flex-col-reverse lg:flex-row bg-[#f3f4f6] px-2 py-2 lg:px-10 lg:py-10 items-center ">
        <div className="w-full sm:w-1/2 flex flex-col gap-10">
          <Title
            text={t("homeHeroTitle")}
            variation="hero"
          />
          <Paragraph
            text={t("homeHeroText")}
            variation="hero"
          />

          <div className="heroBtns flex flex-col lg:flex-row gap-10">
            <Button
              variation="heroOne"
              text={t("homeHeroRegister")}
              click={() => navigate("/login")}
            />
            <Button
              variation="heroTwo"
              text={t("homeHeroOrder")}
              click={() => navigate('/restaurants-client')}
            />
          </div>
        </div>
        <div className="right w-full sm:w-1/2 bg-black rounded-[85px] flex justify-center items-center relative" >
          <img src={heroImg} alt="foody" />
          <img src={heroOne} className="hidden lg:block absolute top-0 right-0 animate-bounce duration-1000" alt="card" />
          <img src={heroTwo} className="hidden lg:block absolute bottom-0 -right-10 animate-bounce" alt="card" />
          <img src={heroThree} className="hidden lg:block absolute bottom-[50%] -left-10 animate-bounce " alt="card" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
