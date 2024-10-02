import { useState, useContext, useEffect } from "react";

import LinkContainer from "./LinkContainer";
import logo from "../../../assets/img/brand.svg";
import Input from "../Input/Input";
import Flag from "../Flag/Flag";
import Button from "../Button/Button";
import { ROUTER } from "../../../ROUTER";
import { useNavigate } from "react-router-dom";
import CircleAvatar from "../CircleAvatar/CircleAvatar";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import NavbarBasket from "../NavbarBasket/NavbarBasket";

import { UserContext } from "../../../Context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const [activeUsr, setactiveUsr] = useState<any>(user);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    setactiveUsr(user);
  }, [user]);

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

      {!user && (
        <Button
          variation="navbar"
          text="Sign In"
          click={() => navigate(ROUTER.UserLogin)}
        />
      )}

      {user && (
        <>
          <NavbarBasket />
          <div className="relative" onClick={() => setShowMenu(!showMenu)}>
            {user?.img_url ? (
              <img
                src={user?.img_url}
                alt=""
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <CircleAvatar
                username={activeUsr?.fullname}
                localStorageKey="color"
              />
            )}

            {showMenu && <ProfileMenu />}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
