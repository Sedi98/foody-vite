import React from "react";
import { useNavigate } from "react-router-dom";
// components
import SidebarItem from "./SidebarItem";

// imgs
import profIcon from "../../../assets/icons/profile/profile.svg";
import basketIcon from "../../../assets/icons/profile/basket.svg";
import orderIcon from "../../../assets/icons/profile/orders.svg";
import logoutIcon from "../../../assets/icons/profile/logout.svg";
import checkoutIcon from "../../../assets/icons/profile/checkout.svg";

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="rounded-md hidden sm:flex flex-col max-h-screen overflow-y-auto gap-8 bg-[#f3f4f6] w-1/6 p-4">
      <SidebarItem
        text="Profile"
        img={profIcon}
        clickFunc={() => navigate("/profile")}
      />
      <SidebarItem
        text="Basket"
        img={basketIcon}
        clickFunc={() => navigate("/profile/basket")}
      />
      <SidebarItem
        text="Orders"
        img={orderIcon}
        clickFunc={() => navigate("/profile/orders")}
      />
      <SidebarItem
        text="Checkout"
        img={checkoutIcon}
        clickFunc={() => navigate("/profile/checkout")}
      />
      <SidebarItem
        text="Logout"
        img={logoutIcon}
        clickFunc={() => console.log("logout")}
      />
    </div>
  );
};

export default Sidebar;
