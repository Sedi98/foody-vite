import React from "react";
import MenuItem from "./MenuItem";
import { logOut } from "../../../services/Api/Api";
import { useNavigate } from "react-router-dom";

const ProfileMenu: React.FC = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    window.location.reload();
  };
  return (
    <ul className="absolute top-14 right-0 w-[160px] bg-white z-50 hidden sm:flex flex-col gap-1 p-4 shadow-xl rounded-md">
      <MenuItem click={() => navigate("/profile/")} text="Profile" />
      <MenuItem click={() => navigate("/profile/basket")} text="Your Basket" />
      <MenuItem click={() => navigate("/profile/orders")} text="Your Orders" />
      <MenuItem
        click={() => navigate("/profile/checkout")}
        text="Your Checkout"
      />
      <MenuItem click={handleLogOut} text="Logout" />
    </ul>
  );
};

export default ProfileMenu;