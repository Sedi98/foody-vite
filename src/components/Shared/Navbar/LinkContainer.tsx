import NavbarLinks from "./NavbarLinks";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTER } from "../../../ROUTER";
import { useTranslation } from "react-i18next";

const LinkContainer: React.FC = (): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  
  const [active, setActive] = React.useState(location.pathname);


  React.useEffect(() => {
    setActive(location.pathname);
  }, [location])
  
  
  
  
  return (
    <div className="flex flex-col lg:flex-row gap-5 ml-auto mr-auto">
      <NavbarLinks isActive={active== ROUTER.Home ? true : false} text={t("navLinkHome")} click={() => navigate(ROUTER.Home)} />
      <NavbarLinks
        text={t("navLinkRestaurants")}
        click={() => navigate(ROUTER.Restaurants_client)}
        isActive={active== ROUTER.Restaurants_client || location.pathname.includes("restaurant-detail") ? true : false}
      />
      <NavbarLinks isActive={active== ROUTER.About ? true : false} text={t("navLinkAbout")} click={() => navigate(ROUTER.About)} />
      <NavbarLinks isActive={active== ROUTER.HowIt ? true : false} text={t("navLinkHowIt")} click={() => navigate(ROUTER.HowIt)} />
      <NavbarLinks isActive={active== ROUTER.Faq ? true : false} text={t("navLinkFaq")} click={() => navigate(ROUTER.Faq)} />
    </div>
  );
};

export default LinkContainer;
