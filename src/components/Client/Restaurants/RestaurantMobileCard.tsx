import React from "react";

import { UserRstContext } from "../../../Context/UserRstContext";

type Props = {
  name: string;
  id: string;
  active: boolean;
  
  click:React.Dispatch<React.SetStateAction<string>>
};

const RestaurantMobileCard: React.FC<Props> = ({ name, id, active,click }) => {
  const { setRstCategory } = React.useContext(UserRstContext);

  return (
    <div
      onClick={() => {setRstCategory(id); click(name)}}
      className={`flex items-center   cursor-pointer py-4 h-14 mx-10 border-b-2 border-neutral-300   transition-all ${
        active && " text-red-500"
      }`}
    >
      
      <p className="font-semibold text-lg text-ellipsis w-full overflow-hidden overflow-x-auto h-6">{name}</p>
    </div>
  );
};

export default RestaurantMobileCard;
