import React from "react";
import MenuItem from "./MenuItem";
import { logOut } from "../../../services/Api/Api";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProfileMenu: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    window.location.reload();
  };
  return (
    <ul className="absolute top-14 right-0 w-[160px] bg-white z-50 flex flex-col gap-1 p-4 shadow-xl rounded-md">
      <MenuItem click={() => navigate("/profile/")} text={t("profileSideProfile")} />
      <MenuItem click={() => navigate("/profile/basket")} text={t("profileSideBasket")} />
      <MenuItem click={() => navigate("/profile/orders")} text={t("profileSideOrders")} />
      <MenuItem
        click={() => navigate("/profile/checkout")}
        text={t("profileSideCheckout")}
      />
      <MenuItem click={handleLogOut} text={t("profileSideLogout")} />
    </ul>
  );
};

export default ProfileMenu;
