import React from "react";
import UsrLoginHead from "./UsrLoginHead";
import Input from "../../Shared/Input/Input";

type Props = {
  type: string;
  click: () => void;
  dataSend: () => void;
};

const UserLoginCnt: React.FC<Props> = ({ type, click, dataSend }: Props) => {
  return (
    <div className="w-full sm:w-1/2 flex flex-col gap-20 bg-white py-12 mx-auto">
      <UsrLoginHead active={type} click={click} />

      {type === "login" && (
        <div className="flex flex-col w-full sm:w-4/5 mx-auto gap-8 items-center">
          <Input
            type="text"
            label="Email"
            variation="login"
            placeholder="Email"
            changeFunc={dataSend}
          />

          <Input
            type="password"
            label="Password"
            variation="login"
            placeholder="Password"
            changeFunc={dataSend}
          />
        </div>
      )}
    </div>
  );
};

export default UserLoginCnt;
