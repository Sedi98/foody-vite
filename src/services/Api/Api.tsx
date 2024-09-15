import axios from "axios";
const link = "https://foody-server-tau.vercel.app";
import { showErrorToast, showSuccessToast } from "../Utils/ToastUtils";
import { useGlobalLoading } from "../../Context/useGlobalLoading";




const saveToken=(token:string,type:string)=>{
    const encoded= btoa(token);
    localStorage.setItem(type,encoded)
}

const decodeToken=(type:string)=>{
    const encoded= localStorage.getItem(type);
    if(encoded){
        const decoded= atob(encoded);
        return decoded
    }
}

export const signUp = async (credentials: object) => {
  try {
    console.log(credentials);

    const response = await axios.post(`${link}/api/auth/signup`, credentials, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    showSuccessToast(response.data.message);
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
  }
};

export const signIn = async (credentials: any) => {
  try {
    console.log(credentials);

    const response = await axios.post(`${link}/api/auth/signin`, credentials, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    showSuccessToast(response.data.message);
    saveToken(response.data.user.access_token,"access_token")
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
  }
};
