import NavbarLinks from "./NavbarLinks";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ROUTER } from "../../../ROUTER";

const LinkContainer: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [active, setActive] = React.useState(location.pathname);


  React.useEffect(() => {
    setActive(location.pathname);
  }, [location])
  
  
  
  
  return (
    <div className="flex gap-10 ml-auto mr-auto">
      <NavbarLinks isActive={active== ROUTER.Home ? true : false} text="Home" click={() => navigate(ROUTER.Home)} />
      <NavbarLinks
        text="Restorants"
        click={() => navigate(ROUTER.Restaurants_client)}
        isActive={active== ROUTER.Restaurants_client || location.pathname.includes("restaurant-detail") ? true : false}
      />
      <NavbarLinks isActive={active== ROUTER.About ? true : false} text="About us" click={() => navigate(ROUTER.About)} />
      <NavbarLinks isActive={active== ROUTER.HowIt ? true : false} text="How it works" click={() => navigate(ROUTER.HowIt)} />
      <NavbarLinks isActive={active== ROUTER.Faq ? true : false} text="FAQs" click={() => navigate(ROUTER.Faq)} />
    </div>
  );
};

export default LinkContainer;
