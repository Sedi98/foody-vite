
import basket from "../../../assets/icons/client/basket_navbar.svg";

const NavbarBasket = () => {
  return (
    <div className="relative bg-red-500 w-12 h-12 rounded-full flex justify-center items-center">
      <img src={basket} alt="" />
      <span className="w-4 h-4 flex justify-center items-center text-[12px] font-bold text-white absolute right-[-4px] top-[-4px] bg-green-500 z-10 rounded-full">0</span>
    </div>
  );
};

export default NavbarBasket;
