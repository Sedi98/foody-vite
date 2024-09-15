import React from "react";

type Props = {
  text: string;
  variation: string;
};

const Title: React.FC<Props> = ({ text, variation }: Props) => {
  return (
    <>
      {variation === "hero" && (
        <h1 className="text-4xl text-center sm:text-5xl font-black leading-tight sm:text-start ">
          {text}
        </h1>
      )}

      {variation === "container" && (
        <h2 className="text-5xl font-black text-center">{text}</h2>
      )}

      {variation === "card" && (
        <h2 className=" font-bold text-3xl text-neutral-800">{text}</h2>
      )}

      {variation === "restaurants" && (
        <h2 className="font-bold text-neutral-800 text-2xl mt-4 whitespace-nowrap overflow-x-auto overflow-hidden ">
          {text}
        </h2>
      )}

      {variation === "admin" && (
        <h2 className=" text-gray-300 font-bold text-4xl text-center  mb-10 ">
          {text}
        </h2>
      )}
    </>
  );
};

export default Title;
