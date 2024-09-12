import React from "react";

type Props = {
  text?: string;
  click?: () => void;
};

const NavbarLinks: React.FC<Props> = ({ text = undefined, click }: Props) => {
  return (
    <p
      onClick={click}
      className="m-0 p-0 font-[500] text-lg tracking-normal leading-6 transition-colors duration-300 text-neutral-500 hover:text-red-500"
    >
      {text}
    </p>
  );
};

export default NavbarLinks;
