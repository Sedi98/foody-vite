import React,{useState,useEffect} from "react";
import { useNavigate,useLocation } from "react-router-dom";
// components
import SidebarItem from "./SidebarItem";

// imgs
import profIcon from "../../../assets/icons/profile/profile.svg";
import basketIcon from "../../../assets/icons/profile/basket.svg";
import orderIcon from "../../../assets/icons/profile/orders.svg";
import logoutIcon from "../../../assets/icons/profile/logout.svg";
import checkoutIcon from "../../../assets/icons/profile/checkout.svg";

import profIconRed from "../../../assets/icons/profile/profile_red.svg";
import basketIconRed from "../../../assets/icons/profile/basket_red.svg";
import orderIconRed from "../../../assets/icons/profile/orders_red.svg";
import logoutIconRed from "../../../assets/icons/profile/logout_red.svg";
import checkoutIconRed from "../../../assets/icons/profile/checkout_red.svg";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location= useLocation()
  console.log(location.pathname);
  

  const [active, setActive] = useState(location.pathname);


  useEffect(() => {
    setActive(location.pathname);
  
   
  }, [location])
  
  return (
    <div className="rounded-md hidden sm:flex flex-col max-h-screen overflow-y-auto gap-8 bg-[#f3f4f6] w-1/6 p-4">
      <SidebarItem
        text="Profile"
        img={profIcon}
        redImg={profIconRed}
        isActive={active === "/profile"}
        clickFunc={() => navigate("/profile")}
      />
      <SidebarItem
        text="Basket"
        img={basketIcon}
        redImg={basketIconRed}
        isActive={active === "/profile/basket"}
        clickFunc={() => navigate("/profile/basket")}
      />
      <SidebarItem
        text="Orders"
        img={orderIcon}
        redImg={orderIconRed}
        isActive={active === "/profile/orders"}
        clickFunc={() => navigate("/profile/orders")}
      />
      <SidebarItem
        text="Checkout"
        img={checkoutIcon}
        redImg={checkoutIconRed}
        isActive={active === "/profile/checkout"}
        clickFunc={() => navigate("/profile/checkout")}
      />
      <SidebarItem
        text="Logout"
        img={logoutIcon}
        redImg={logoutIconRed}
        isActive={false}
        clickFunc={() => console.log("logout")}
      />
    </div>
  );
};

export default Sidebar;
