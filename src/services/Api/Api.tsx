import axios from "axios";
const link = "https://foody-server-tau.vercel.app";
import { showErrorToast, showSuccessToast } from "../Utils/ToastUtils";
import { startLoading, stopLoading } from "../../Context/useGlobalLoading";

const saveToken = (token: string, type: string) => {
  const encoded = btoa(token);
  localStorage.setItem(type, encoded);
};

const decodeToken = (type: string) => {
  const encoded = localStorage.getItem(type);
  if (encoded) {
    const decoded = atob(encoded);
    return decoded;
  }
};

export const signUp = async (credentials: object) => {
  try {
    startLoading();
    console.log(credentials);

    const response = await axios.post(`${link}/api/auth/signup`, credentials, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    showSuccessToast(response.data.message);
    stopLoading();
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  }
};

export const signIn = async (credentials: any) => {
  try {
    startLoading();
    console.log(credentials);

    const response = await axios.post(`${link}/api/auth/signin`, credentials, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    showSuccessToast(response.data.message);
    saveToken(response.data.user.access_token, "access_token");
    stopLoading();
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  }
};

export const getCategory = async () => {
  try {
    startLoading();
    const response = await axios.get(`${link}/api/category`);
    stopLoading();
    showSuccessToast(response.data.message);
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  }
};

export const getRestuarants = async () => {
  try {
    startLoading();
    const response = await axios.get(`${link}/api/restuarants`);
    stopLoading();
    showSuccessToast(response.data.message);
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  }
};

export const getOffers = async () => {
  try {
    startLoading();
    const response = await axios.get(`${link}/api/offer`);
    stopLoading();
    showSuccessToast(response.data.message);
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  }
};


export const postUpload = async (data: any) => {
  try {
    startLoading();
    console.log(data);
    const response = await axios.post(`${link}/api/uploads`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    stopLoading();
    showSuccessToast(response.data.message);
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  }
};


export const postCategory = async (data: any) => {
  try {
    startLoading();
    console.log(data);
    const response = await axios.post(`${link}/api/category`, data);
    stopLoading();
    showSuccessToast(response.data.message);
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err);
    stopLoading();
  }
};
