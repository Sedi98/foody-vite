import React from "react";

type Props = {
  img: string;
  name: string;
  text: string;
  click: () => void;
};

const NavbarSearchItem: React.FC<Props> = ({ img, name, text, click }) => {
  return (
    <div
      onClick={click}
      className=" w-full border-b-[1px] border-neutral-200 flex gap-8 p-3 items-center hover:bg-gray-200 cursor-pointer rounded-md"
    >
      <img className="w-8 h-8 object-cover" src={img} alt="" />
      <div>
        <p className="text-sm font-semibold text-[#2B3043]">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default NavbarSearchItem;
