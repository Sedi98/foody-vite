import NavbarLinks from "./NavbarLinks";

import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../../ROUTER";

const LinkContainer = (): JSX.Element => {

  const navigate= useNavigate();
  return (
    <div className="flex gap-10 ml-auto mr-auto">
      <NavbarLinks text="Home" click={() => navigate(ROUTER.Home)} />
      <NavbarLinks text="Restorants" click={() => console.log("Restorants")} />
      <NavbarLinks text="About us" click={() => navigate(ROUTER.About)} />
      <NavbarLinks text="How it works" click={() => navigate(ROUTER.HowIt)} />
      <NavbarLinks text="FAQs" click={() => navigate(ROUTER.Faq)} />
    </div>
  );
};

export default LinkContainer;
