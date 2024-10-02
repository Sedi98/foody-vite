import React from "react";

type Props = {
  text: string;
  click?: () => void;
};
const MenuItem: React.FC<Props> = ({ text, click }) => {
  return (
    <li
      onClick={click}
      className="border-b-2 border-b-neutral-200 pb-1 cursor-pointer font-medium hover:text-neutral-500"
    >
      {" "}
      <span>{text}</span>{" "}
    </li>
  );
};

export default MenuItem;
