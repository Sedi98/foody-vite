import React, { useContext } from "react";
import basket from "../../../assets/icons/client/basket_navbar.svg";
import { basketContext } from "../../../Context/BasketContext";
import { useNavigate } from "react-router-dom";

const NavbarBasket:React.FC = () => {
  const navigate = useNavigate();
  const {count} = useContext(basketContext);


  
  return (
    <div className="relative bg-red-500 w-12 min-w-12 h-12 min-h-12 rounded-full flex justify-center items-center" onClick={() => navigate('/profile/basket')}>
      <img src={basket} alt="" loading="lazy" className="w-6 h-6" />
      <span className={`${count>0?"":"hidden"}  w-4 h-4 flex justify-center items-center text-[12px] font-bold text-white absolute right-[-4px] top-[-4px] bg-red-900 p-1 z-10 rounded-full`}>{count>0?count:""}</span>
    </div>
  );
};

export default NavbarBasket;
