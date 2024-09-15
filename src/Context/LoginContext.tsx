import React from "react";

import { createContext } from "react";

type Props = {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
};

type AuthProps = {
  value: { email: string; password: string };
  setValue: (val: string, type: string) => void;
  handleLoginClick: () => void;
};

type RegisterProps = {
  regValue: {
    fullname: string;
    username: string;
    email: string;
    password: string;
  };
  setRegValue: (val: string, type: string) => void;
  handleRegClick: () => void;
};

export const LoginContext = createContext<Props>({
  mode: "login",
  setMode: () => {},
});

export const AuthContext = createContext<AuthProps>({
  value: { email: "", password: "" },
  setValue: () => {},
  handleLoginClick: () => {},
});

export const RegisterContext = createContext<RegisterProps>({
  regValue: { fullname: "", username: "", email: "", password: "" },
  setRegValue: () => {},
  handleRegClick: () => {},
});
