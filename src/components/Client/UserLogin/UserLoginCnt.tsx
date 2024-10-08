import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import UsrLoginHead from "./UsrLoginHead";
import Input from "../../Shared/Input/Input";
import Button from "../../Shared/Button/Button";
import {
  AuthContext,
  LoginContext,
  RegisterContext,
} from "../../../Context/LoginContext";

const UserLoginCnt: React.FC = () => {
  const { mode } = useContext(LoginContext);
  const { setValue, value, handleLoginClick } = useContext(AuthContext);
  const { setRegValue, regValue, handleRegClick } = useContext(RegisterContext);
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col gap-20 bg-white py-12 mx-auto">
      <UsrLoginHead />

      {mode === "login" && (
        <div className="flex flex-col w-full sm:w-4/5 mx-auto gap-8 items-center">
          <Input
            type="email"
            label="Email"
            variation="login"
            placeholder="Email"
            changeFunc={(e: any) => setValue(e.target.value, "email")}
            inputVal={value.email}
          />

          <Input
            type="password"
            label={t("UserLoginPassText")}
            variation="login"
            placeholder={t("UserLoginPassText")}
            changeFunc={(e: any) => setValue(e.target.value, "password")}
            inputVal={value.password}
          />

          <Button click={handleLoginClick} text={t("UserLoginBtnLogin")} variation="login" />
        </div>
      )}

      {mode === "register" && (
        <div className="flex flex-col w-full sm:w-4/5 mx-auto gap-8 items-center">
          <Input
            type="text"
            label="Full Name"
            variation="login"
            placeholder="Name"
            changeFunc={(e: any) => setRegValue(e.target.value, "fullname")}
            inputVal={regValue.fullname}
          />

          <Input
            type="text"
            label="User Name"
            variation="login"
            placeholder="Name"
            changeFunc={(e: any) => setRegValue(e.target.value, "username")}
            inputVal={regValue.username}
          />

          <Input
            type="text"
            label="Email"
            variation="login"
            placeholder="Email"
            changeFunc={(e: any) => setRegValue(e.target.value, "email")}
            inputVal={regValue.email}
          />

          <Input
            type="password"
            label={t("UserLoginPassText")}
            variation="login"
            placeholder="Password"
            changeFunc={(e: any) => setRegValue(e.target.value, "password")}
            inputVal={regValue.password}
          />

          <Button click={handleRegClick} text={t("UserRegisterBtnRegister")} variation="login" />
        </div>
      )}
    </div>
  );
};

export default UserLoginCnt;
