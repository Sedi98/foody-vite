import React from "react";

type Props = {
  click?: () => void;
  variation: string;
  text: string;
};

const Button: React.FC<Props> = ({ click, variation, text }: Props) => {
  return (
    <>
      {variation === "client" && (
        <button
          className="px-6 py-2 rounded-3xl bg-red-600 text-white font-medium shadow-md hover:scale-95 transition-all duration-500 hidden sm:block"
          onClick={click}
        >
          {text}
        </button>
      )}

      {variation === "navbar" && (
        <button
          className="px-6 py-2 rounded-3xl bg-red-600 text-white font-medium shadow-md hover:scale-95 transition-all duration-500 block"
          onClick={click}
        >
          {text}
        </button>
      )}

      {variation === "heroOne" && (
        <button
          className="px-8 py-3 rounded-3xl bg-red-600 text-white text-2xl font-medium shadow-md hover:bg-red-700 hover:scale-95 transition-all duration-500"
          onClick={click}
        >
          {text}
        </button>
      )}

      {variation === "heroTwo" && (
        <button
          className="px-6 py-3 rounded-3xl border-2 border-neutral-500 text-neutral-500 text-2xl font-medium shadow-md hover:scale-95 transition-all duration-500"
          onClick={click}
        >
          {text}
        </button>
      )}

      {variation === "login" && (
        <button
          className="w-full mt-10 bg-red-600 text-xl font-medium p-4 rounded-md text-white hover:scale-95 hover:bg-red-700 transition-all duration-500"
          onClick={click}
        >
          {text}
        </button>
      )}

      {variation === "detail" && (
        <button
          className="hidden sm:block py-3 px-5 text-white border-2 border-mainRed bg-red-600 rounded-md shadow-md hover:scale-95 transition-all duration-500"
          onClick={click}
        >
          {text}
        </button>
      )}

      {variation === "detailContained" && (
        <button
          className="py-3 px-2 border-2 border-red-600 text-red-600 rounded-md shadow-md"
          onClick={click}
        >
          {text}
        </button>
      )}

      {variation === "adminLog" && (
        <button
          className=" text-white font-medium text-2xl  w-full bg-[#c035a2] py-3 rounded"
          onClick={click}
        >
          {text}
        </button>
      )}

      {variation === "adminAddProduct" && (
        <button
          className=" flex items-center justify-center gap-2 bg-[#c035a2] text-white text-sm font-medium md:px-3 md:py-3 uppercase rounded-full  shadow-md hover:scale-95 transition-all duration-500 min-w-[50px] min-h-[50px] md:min-h-auto m-0 md:ml-auto "
          onClick={click}
        >
          +
          <span className="hidden md:block">
          {text}
          </span>
          
        </button>
      )}

      {variation === "profile" && (
        <button
          className=" w-[286px] sm:w-full mt-7 h-[53px] rounded bg-[#6FCF97] text-white font-medium transition-transform transform duration-300 hover:scale-95"
          onClick={click}
        >
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
