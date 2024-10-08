

import Paragraph from "../../Shared/Paragraph/Paragraph";
import Title from "../../Shared/Title/Title";
import React from "react";



import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type Props = {
  id:string,
  name:string,
  desc:string,
  del_prc:string,
  del_time:string,
  image:string
};

const RestaurantCard: React.FC<Props> = ({id, name, desc,image, del_prc, del_time}) => {
  const { t } = useTranslation();
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/restaurant-detail/${id}`)} className=" gap-2 relative text-center sm:text-start  h-max px-1 sm:px-4 py-7 shadow-lg  flex flex-col hover:scale-105 transition-all duration-500">
      <img
        src={image}
        alt="restaurant"
        className="w-[300px] h-40 object-cover mx-auto"
        loading="lazy"
        
      />
      
        <Title text={name} variation="restaurants" />
      

      
        <Paragraph
          text={desc}
          variation="restaurants"
        />


        <div className="flex flex-col gap-1 sm:gap-1 sm:flex-row justify-between  items-center">
            <p className="font-bold whitespace-nowrap  w-5/12">{del_prc} &#x20BC; {t("rstCardDelivery")}</p>
            <p className="bg-red-600 py-1 px-3 text-center sm:px-3 sm:w-max rounded-full   text-white shadow-md">{del_time} {t("rstCardTime")}</p>
        </div>
      
    </div>
  );
};

export default RestaurantCard;
