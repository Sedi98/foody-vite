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
import hamburgerIcon from "../../../assets/icons/client/hamburger.svg";
import closeIcon from "../../../assets/icons/client/close.svg";

import { UserContext } from "../../../Context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  const [value, setValue] = useState<string>("");
  const [activeUsr, setactiveUsr] = useState<any>(user);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    setactiveUsr(user);
  }, [user]);

  const handleInput = (event: any) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  return (
    <nav className="relative navbar h-[112px] rounded-md bg-[#f3f4f6] flex flex-row justify-between items-center px-2 lg:px-10">
      <span
        className="block lg:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <img src={hamburgerIcon} width={50} alt="alt" />
      </span>
      <div className="brand min-w-28">
        <img src={logo} alt="alt" />
      </div>

      <div className="flex lg:hidden  items-center gap-2">
        <Flag />

        {user && (
          <>
            <NavbarBasket />
          </>
        )}
      </div>

      <div
        className={`block lg:hidden fixed top-0 duration-500 ${
          mobileMenu ? "left-0" : "left-[-100%]"
        } h-screen w-2/3 p-4 bg-white z-50`}
      >
        <img
          src={closeIcon}
          alt="alt"
          className=" block my-4"
          onClick={() => setMobileMenu(!mobileMenu)}
        />
        <div className="flex flex-col z-50 min-h-24 ">
          {!user && (
            <Button
              variation="navbar"
              text="Sign In"
              click={() => navigate(ROUTER.UserLogin)}
            />
          )}

          {user && (
            <>
              <div className="relative" onClick={() => setShowMenu(!showMenu)}>
                {user?.img_url ? (
                  <span className="block mx-auto w-1/2">
                    <img
                      src={user?.img_url}
                      alt=""
                      className="min-w-16 min-h-16 w-16 h-16 rounded-full object-cover"
                    />
                  </span>
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
        </div>

        <LinkContainer />
      </div>

      <div className="w-full justify-between items-center gap-8 hidden lg:flex">
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
                  className="min-w-12 min-h-12 w-12 h-12 rounded-full object-cover"
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
      </div>
    </nav>
  );
};

export default Navbar;
