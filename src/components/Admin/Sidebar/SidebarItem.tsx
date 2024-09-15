import React from "react";

type Props = {
    img: string;
    text: string;
    click?: () => void;
};

const SidebarItem: React.FC<Props> = ({img, text,click}) => {
  return (
    <span onClick={click} className="flex gap-6 items-center cursor-pointer p-3  hover:bg-white  hover:rounded  hover:bg-opacity-10  ">
      <img
        src={img}
        alt="icon"
        className="text-white w-[24px] h-[24px]"
        loading="lazy"
        decoding="async"
      />
      <p className="text-[#FCDDEC] text-base font-medium">{text}</p>
    </span>
  );
};

export default SidebarItem;
