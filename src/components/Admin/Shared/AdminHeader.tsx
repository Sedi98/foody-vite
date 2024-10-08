import React, { useContext, useState } from "react";
import { ProductContext } from "../../../Context/ProductContext";
import Select from "../../Shared/Input/Select";
import { RestaurantContext } from "../../../Context/RestaurantContext";

type Props = {
  text: string;
  variant: string;
};

const AdminHeader: React.FC<Props> = ({ text,variant }) => {
  const { setValue,setVariation,setActiveData} = useContext(ProductContext);
  const { options, setOption } = useContext(RestaurantContext);
  const [select, setSelect] = useState<string>("");

  const handleClick = (variation: string) => {
    setVariation(variation);
    setActiveData(null);
    setValue();
    
   
  };

  const handleSelection = (e: any) => {
    setSelect(e.target.value);
    setOption(e.target.value);
  };

  return (
    <div className=" bg-[#27283c] rounded-2xl flex flex-col sm:flex-row justify-between items-center p-8 m-0 w-full">
      <p className="text-white text-xl not-italic font-medium leading-5">
        {text}
      </p>

      {variant === "Restaurants" && (
        <Select
          placeholder="Category"
          variation="adminHeader"
          options={options}
          inputVal={select}
          changeFunc={handleSelection}
        />
      )}
      {variant === "Products" && (
        <Select
          placeholder="Restaurant"
          variation="adminHeader"
          options={options}
          inputVal={select}
          changeFunc={handleSelection}
        />
      )}

      {variant === "Category" && (
        <button
          className="bg-[#c035a2] py-2 px-8 text-white font-bold text-sm rounded-[14px] uppercase"
          onClick={() => handleClick('category')}
        >
          + Add Category
        </button>
      )}
      {variant === "Restaurants" && (
        <button
          className="bg-[#c035a2] py-2 px-8 text-white font-bold text-sm rounded-[14px] uppercase"
          onClick={() => handleClick('restaurant')}
        >
          + Add Restaurant
        </button>
      )}
      {variant === "Offers" && (
        <button
          className="bg-[#c035a2] py-2 px-8 text-white font-bold text-sm rounded-[14px] uppercase"
          onClick={() => handleClick('offer')}
        >
          + Add Offer
        </button>
      )}
    </div>
  );
};

export default AdminHeader;
