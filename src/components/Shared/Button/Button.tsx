import React from "react";

type Props = {
  click?: () => void;
  variation: string;
  text: string;
};

const Button: React.FC<Props> = ({ click, variation, text }: Props) => {
  return (
    <div>
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
          className="px-6 py-2 rounded-3xl bg-red-600 text-white font-medium shadow-md hover:scale-95 transition-all duration-500 hidden sm:block"
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

      {variation === "adminLog" && <button onClick={click}>{text}</button>}

      {variation === "admin" && <button onClick={click}>{text}</button>}
    </div>
  );
};

export default Button;
