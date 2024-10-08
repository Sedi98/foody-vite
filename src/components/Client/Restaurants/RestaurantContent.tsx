import RestaurantCard from "./RestaurantCard";
import React from "react";
import { UserRstContext } from "../../../Context/UserRstContext";
import { getRestuarants } from "../../../services/Api/Api";
import filter_img from '../../../assets/icons/client/filter.svg'

const RestaurantContent = () => {
  const { rstCategory } = React.useContext(UserRstContext);
  const [rst, setRst] = React.useState<any>([]);

  React.useEffect(() => {
    (async () => {
      if (rstCategory === "all") {
        let response = await getRestuarants();
        setRst(response.result.data);
        
      } else {
        let response = await getRestuarants("", rstCategory);
        setRst(response.result.data);
      }
      
    })();
  }, [rstCategory]);
  return (
    <>
    <span className="px-4 py-2 w-full font-medium text-lg bg-white shadow-md mt-2 flex justify-center items-center lg:hidden"> <img src={filter_img} alt="" /> Filter</span>
     <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-start  gap-4">
      {rst.map((item: any, index:number) => (
        <RestaurantCard key={index} id={item.id} image={item.img_url} name={item.name} desc={item.cuisine} del_prc={item.delivery_price} del_time={item.delivery_min} />
      ))}
     
    </div>
    </>
   
  );
};

export default RestaurantContent;
