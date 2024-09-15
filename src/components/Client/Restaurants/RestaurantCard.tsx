
import pizza from "../../../assets/img/pizza.svg";
import Paragraph from "../../Shared/Paragraph/Paragraph";
import Title from "../../Shared/Title/Title";



import { useNavigate } from "react-router-dom";

const RestaurantCard = () => {
    const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/restaurant-detail/1')} className="w-[46%] gap-2 relative text-center sm:text-start sm:w-1/5 h-max px-1 sm:px-4 py-7 shadow-lg  flex flex-col hover:scale-105 transition-all duration-500">
      <img
        src={pizza}
        alt="restaurant"
        className="w-[300px] h-40 object-cover"
      />
      
        <Title text="Pizza House" variation="restaurants" />
      

      
        <Paragraph
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quidem."
          variation="restaurants"
        />


        <div className="flex flex-col gap-1 sm:gap-1 sm:flex-row justify-between  items-center">
            <p className="font-bold whitespace-nowrap  w-5/12">25$ Delivery</p>
            <p className="bg-red-600 py-1 px-3 text-center sm:px-3 sm:w-max rounded-full   text-white shadow-md">6 min.</p>
        </div>
      
    </div>
  );
};

export default RestaurantCard;
