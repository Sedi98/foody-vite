import React from "react";
import Title from "../../../Shared/Title/Title";
import Paragraph from "../../../Shared/Paragraph/Paragraph";
import heroImg from "../../../../assets/img/hero_img.svg";
import Button from "../../../Shared/Button/Button";
import { useNavigate } from "react-router-dom";

import Navbar from "../../../Shared/Navbar/Navbar";

const Hero: React.FC = () => {
  const navigate= useNavigate()
  return (
    <div className="mx-0 my-0  lg:mx-5 lg:my-5 rounded-md">
    <div className="bg-[#f3f4f6]">
    <Navbar />
    </div>
      

      <div className="flex flex-col-reverse lg:flex-row bg-[#f3f4f6] px-2 py-2 lg:px-10 lg:py-10 items-center ">
        <div className="w-full sm:w-1/2 flex flex-col gap-10">
          <Title
            text="Our Food site makes it easy to find local food"
            variation="hero"
          />
          <Paragraph
            text="Welcome to our vibrant food site, a digital haven for culinary enthusiasts seeking a delightful gastronomic experience. Within these virtual pages."
            variation="hero"
          />

          <div className="heroBtns flex flex-col lg:flex-row gap-10">
            <Button
              variation="heroOne"
              text="Register"
              click={() => navigate("/login")}
            />
            <Button
              variation="heroTwo"
              text="Order Now"
              click={() => navigate('/restaurants-client')}
            />
          </div>
        </div>
        <div className="right w-full sm:w-1/2 bg-black rounded-[85px] flex justify-center items-center">
          <img src={heroImg} alt="foody" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
