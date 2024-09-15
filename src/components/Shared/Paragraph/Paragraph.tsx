import React from "react";

type Props = {
  text?: string;
  variation?: string;
};

const Paragraph: React.FC<Props> = ({ text, variation }: Props) => {
  return (
    <>
      {variation === "hero" && (
        <p className=" sm:text-xl text-neutral-500 w-3/4 ">{text}</p>
      )}

      {variation === "container" && (
        <p className="w-full sm:w-2/3 ml-auto mr-auto text-2xl text-neutral-500 text-center">
          {text}
        </p>
      )}

      {variation === "card" && (
        <p className=" w-2/3 mx-auto text-neutral-500 text-lg">{text}</p>
      )}

      {variation === "restaurants" && (
        <p className="mb-4 text-neutral-500 whitespace-nowrap overflow-x-hidden  ">{text}</p>
      )}
    </>
  );
};

export default Paragraph;
