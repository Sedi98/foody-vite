import { useState } from "react";

import LinkContainer from "./LinkContainer";
import logo from "../../../assets/img/brand.svg";
import Input from "../Input/Input";
import Flag from "../Flag/Flag";
import Button from "../Button/Button";
import { ROUTER } from '../../../ROUTER'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");

  const handleInput = (event: any) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return (
    <nav className="navbar h-[112px] rounded-md bg-[#f3f4f6] flex flex-row justify-between gap-10 items-center px-10">
      <div className="brand min-w-28">
        <img src={logo} alt="" />
      </div>
      <LinkContainer />
      <Input
        variation="navbar"
        type="text"
        placeholder="Search"
        inputVal={value}
        changeFunc={handleInput}
      />
      <Flag />

      <Button
        variation="navbar"
        text="Sign In"
        click={() => navigate(ROUTER.UserLogin)}
      />
    </nav>
  );
};

export default Navbar;
