import React from "react";

type Props = {
  text?: string;
  click?: () => void;
  isActive?: boolean;
};

const NavbarLinks: React.FC<Props> = ({ text = undefined, click,isActive }: Props) => {
  return (
    <span
      onClick={click}
      className={`m-0 p-0 font-[500] text-lg tracking-normal leading-6 transition-colors duration-300  hover:text-red-500 ${isActive?'text-red-500':'text-neutral-500'}`}
    >
      {text}
    </span>
  );
};

export default NavbarLinks;
