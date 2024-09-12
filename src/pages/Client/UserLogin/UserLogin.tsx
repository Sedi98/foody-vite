import { useState } from "react";

import LoginNav from "../../../components/Shared/Navbar/LoginNav";
import loginImg from "../../../assets/img/usrlogin.svg";
import registerImg from "../../../assets/img/usrReg.svg";
import UserLoginCnt from "../../../components/Client/UserLogin/UserLoginCnt";

const UserLogin = () => {
  const [login, setLogin] = useState(true);
  return (
    <div>
      <LoginNav />
      {login ? (
        <section className="flex flex-col mt-5 sm:mt-0 sm:flex-row justify-center bg-white sm:bg-red-500 mx-8 mb-8 ">
          <div className="bg-red-500 m-auto w-1/2 lg:w-full">
            <img src={loginImg} alt="login" className="w-4/5 m-auto" loading="lazy" />
          </div>
          <div className="bg-red-500 m-auto w-1/2 lg:w-full">
            <UserLoginCnt type="login" click={() => setLogin(!login)} dataSend={() => setLogin(!login)} />
          </div>
        </section>
      ) : (
        <section className="flex flex-col mt-5 sm:mt-0 sm:flex-row justify-center bg-white sm:bg-red-500 mx-8 mb-8 ">
          <div className="bg-red-500 m-auto w-1/2 lg:w-full">
          <img src={registerImg} alt="login" className="w-4/5 m-auto" loading="lazy" /></div>
        </section>
      )}
    </div>
  );
};

export default UserLogin;
