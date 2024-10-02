import { useState, useContext } from "react";

import LoginNav from "../../../components/Shared/Navbar/LoginNav";
import loginImg from "../../../assets/img/usrlogin.svg";
import registerImg from "../../../assets/img/usrReg.svg";
import UserLoginCnt from "../../../components/Client/UserLogin/UserLoginCnt";
import { useNavigate } from "react-router-dom";
// context
import {
  LoginContext,
  RegisterContext,
  AuthContext,
} from "../../../Context/LoginContext";
import { UserContext } from "../../../Context/UserContext";
import { basketContext } from "../../../Context/BasketContext";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";

// api

import { signUp, signIn } from "../../../services/Api/Api";

const UserLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const { setCount } = useContext(basketContext);

  const [usrMode, setUsrMode] = useState("login");
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });
  const [registerCredentials, setregisterCredentials] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const handleMode = () => {
    setUsrMode(usrMode === "login" ? "register" : "login");
  };

  const handleLoginVal = (val: string, type: string) => {
    console.log("trigged");

    setloginCredentials({ ...loginCredentials, [type]: val });
  };

  const handleRegisterVal = (val: string, type: string) => {
    console.log("trigged register");

    setregisterCredentials({ ...registerCredentials, [type]: val });
  };

  const handleLoginClick = async () => {
    let response = await signIn(loginCredentials);

    setUser(response.user);

    if (response) {
      navigate("/");
      setCount(-1);
    }
  };

  const handleRegClick = async () => {
    let response = await signUp(registerCredentials);
    console.log(response);
  };

  return (
    <LoginContext.Provider value={{ mode: usrMode, setMode: handleMode }}>
      <AuthContext.Provider
        value={{
          value: loginCredentials,
          setValue: handleLoginVal,
          handleLoginClick,
        }}
      >
        <RegisterContext.Provider
          value={{
            regValue: registerCredentials,
            setRegValue: handleRegisterVal,
            handleRegClick,
          }}
        >
          <div>
            <HelmetLib title="Login" />
            <LoginNav />
            <section className="flex flex-col mt-5 sm:mt-0 sm:flex-row justify-center bg-white sm:bg-red-500 mx-8 mb-8 ">
              <div className="bg-red-500 m-auto w-full sm:w-1/2">
                <img
                  className="w-4/5 m-auto"
                  src={usrMode === "login" ? loginImg : registerImg}
                  alt={usrMode === "login" ? "loginImg" : "registerImg"}
                />
              </div>

              <div className="w-full sm:w-1/2 flex flex-col gap-20 bg-white py-12 mx-auto">
                <UserLoginCnt />
              </div>
            </section>
          </div>
        </RegisterContext.Provider>
      </AuthContext.Provider>
    </LoginContext.Provider>
  );
};

export default UserLogin;
