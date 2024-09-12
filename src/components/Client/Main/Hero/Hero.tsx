import React from "react";
import Title from "../../../Shared/Title/Title";
import Paragraph from "../../../Shared/Paragraph/Paragraph";
import heroImg from "../../../../assets/img/hero_img.svg";
import Button from "../../../Shared/Button/Button";

import Navbar from "../../../Shared/Navbar/Navbar";

const Hero: React.FC = () => {
  return (
    <div className="mx-5 my-5 rounded-md">
    <div className="bg-[#f3f4f6]">
    <Navbar />
    </div>
      

      <div className="flex bg-[#f3f4f6] px-10 py-10 items-center ">
        <div className="w-full sm:w-1/2 flex flex-col gap-10">
          <Title
            text="Our Food site makes it easy to find local food"
            variation="hero"
          />
          <Paragraph
            text="Welcome to our vibrant food site, a digital haven for culinary enthusiasts seeking a delightful gastronomic experience. Within these virtual pages."
            variation="hero"
          />

          <div className="heroBtns flex gap-10">
            <Button
              variation="heroOne"
              text="Register"
              click={() => console.log("Register")}
            />
            <Button
              variation="heroTwo"
              text="Order Now"
              click={() => console.log("Order Now")}
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
