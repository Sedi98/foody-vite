import React, { useContext, useState, useEffect } from "react";
import Flag from "../../Shared/Flag/Flag";
import Button from "../../Shared/Button/Button";
import CircleAvatar from "../../Shared/CircleAvatar/CircleAvatar";
import { ProductContext } from "../../../Context/ProductContext";
import { ROUTER } from "../../../ROUTER";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../../Context/UserContext";
import navHam from "../../../assets/icons/admin/nav_hamburger.svg";

const AdminNavbar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const { setValue, setVariation, setActiveData } = useContext(ProductContext);
  const [activeUsr, setactiveUsr] = useState<any>(user);

  useEffect(() => {
    setactiveUsr(user);
  });
  const handleClick = (variation: string) => {
    setVariation(variation);
    setActiveData(null);
    setValue();
  };
  return (
    <nav className="flex gap-4 justify-between m-0 py-5 mb-4 items-center rounded-md lg:py-5 px-5 sm:m-0 sm:mb-4 bg-[#27283c] sm:p-5">
      <img className="block sm:hidden w-10 h-10" src={navHam} alt="icon" />

      <h1
        onClick={() => navigate(ROUTER.Home)}
        className="text-white text-3xl font-extrabold flex items-center"
      >
        Foody <span className="text-[#EAAB00]">.</span>
      </h1>
      <Button
        text={`+ ${t("adminAddProduct")}`}
        variation="adminAddProduct"
        click={() => handleClick("product")}
      />
      <Flag />
      <CircleAvatar username={activeUsr?.fullname} localStorageKey="color" />
    </nav>
  );
};

export default AdminNavbar;
