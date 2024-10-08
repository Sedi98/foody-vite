import React, { useState } from "react";
import Flag from "../../../components/Shared/Flag/Flag";
import image from "../../../assets/img/admin-login.svg";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";
// components
import Title from "../../../components/Shared/Title/Title";
import Input from "../../../components/Shared/Input/Input";
import Button from "../../../components/Shared/Button/Button";
// navigation
import { ROUTER } from "../../../ROUTER";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// api
import { signIn } from "../../../services/Api/Api";

const AdminLogin: React.FC = () => {
  const { t } = useTranslation();
    const navigate = useNavigate();
  const [loginCredentials, setloginCredentials] = useState({
    email: "",
    password: "",
  });


  const handleInput = (val: string, type: string) => {
    console.log("trigged admin");
    setloginCredentials({ ...loginCredentials, [type]: val });
  }

  const handleClick = async () => {
   

    let response = await signIn(loginCredentials);

    console.log(response);

    if (response) {
      navigate('/admin/');
    }

  };
  return (
    <div className="bg-[#1e1e30] h-auto lg:h-screen">
      <HelmetLib title="Admin-Login" />
      <header className="  pt-14 pl-8">
        <p onClick={() => navigate(ROUTER.Home)} className=" text-[#F5F5F5] font-extrabold text-[28px]  ">
          Foody <span className=" text-[#EAAB00]">.</span>
        </p>
      </header>

      <main className="flex justify-center items-center h-full lg:h-[calc(100vh-100px)] ">
        <section className="  flex flex-col-reverse   sm:flex-col-reverse  md:flex-row   ">
          <div className=" w-full sm:w-full md:w-1/2  md:bg-[#38394e] py-14  px-6 sm:px-7 md:px-12 ">
            <Title text={t("adminLoginTitle")} variation="admin" />

            <div className=" flex flex-col  gap-6 mb-9">
              <Input
                type="email"
                placeholder="Email"
                changeFunc={(e: any) => handleInput(e.target.value, "email")}
                inputVal={loginCredentials.email}
                variation="admin"
              />
              <Input
                type="password"
                placeholder={t("UserLoginPassText")}
                changeFunc={(e: any) => handleInput(e.target.value, "password")}
                inputVal={loginCredentials.password}
                variation="admin"
              />
            </div>
            <Button text={t("adminLoginBtnLogin")} variation="adminLog" click={handleClick} />
          </div>

          <div className=" w-full sm:w-full relative md:w-1/2  py-14 px-7 md:bg-white">
            <div className=" absolute  top-2  right-3">
              <Flag />
            </div>

            <img
              className="w-full"
              src={image}
              alt="login"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminLogin;
