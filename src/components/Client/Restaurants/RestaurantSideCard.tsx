import React from "react";

import { UserRstContext } from "../../../Context/UserRstContext";

type Props = {
  name: string;
  id: string;
  active: boolean;
  image: string;
  click:React.Dispatch<React.SetStateAction<string>>
};

const RestaurantSideCard: React.FC<Props> = ({ name, id, active,click, image }) => {
  const { setRstCategory } = React.useContext(UserRstContext);

  return (
    <div
      onClick={() => {setRstCategory(id); click(name)}}
      className={`flex items-center  gap-4 cursor-pointer p-1 h-10  hover:bg-red-500 transition-all rounded-md ${
        active && "bg-red-300 text-red-500"
      }`}
    >
      <img
        className="w-[40px] h-10 object-cover rounded-full"
        src={image}
        alt="img"
      />
      <p className="font-semibold text-lg text-ellipsis w-full overflow-hidden overflow-x-auto h-6">{name}</p>
    </div>
  );
};

export default RestaurantSideCard;
