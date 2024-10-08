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

    const response = await axios.post(`${link}/api/auth/signin`, credentials, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    showSuccessToast(response.data.message);
    saveToken(response.data.user.access_token, "access_token");
    saveToken(response.data.user.refresh_token, "refresh_token");
    localStorage.setItem("userInfo", JSON.stringify(response.data.user));
    stopLoading();
    console.log(response.data);

    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
    return false;
  }
};

export const checkUser = async () => {
  try {
    startLoading();
    const response = await axios.get(`${link}/api/auth/user`, {
      headers: {
        Authorization: `Bearer ${decodeToken("access_token")}`,
      },
    });
    stopLoading();
    localStorage.setItem("user", response.data.user.fullname);

    return response.data.user.id;
  } catch (err: any) {
    stopLoading();
    return false;
  }
};

export const updateUser = async (data: any) => {
  try {
    startLoading();
    console.log(data);

    const response = await axios.put(
      `${link}/api/auth/user`,
      JSON.stringify(data),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${decodeToken("access_token")}`,
        },
      }
    );
    stopLoading();
    showSuccessToast("User updated successfully");
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

    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  }
};

export const getRestuarants = async (search?: string, category_id?: string) => {
  try {
    startLoading();
    const response = await axios.get(
      `${link}/api/restuarants?${search && `search=${search}&`}${
        category_id && `category_id=${category_id}`
      } `
    );
    stopLoading();
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  }
};

export const getRestaurantById = async (id: string) => {
  try {
    startLoading();
    const response = await axios.get(`${link}/api/restuarants/${id}`);
    stopLoading();
    return await response.data;
  } catch (err: any) {
    console.log(err);

    stopLoading();
  }
};

export const getProducts = async (rest_id?: string, search?: string) => {
  try {
    startLoading();

    const response = await axios.get(
      `${link}/api/products?${search && `search=${search}&`}${
        rest_id && `rest_id=${rest_id}`
      } `
    );
    stopLoading();
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
    showSuccessToast("Image uploaded successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Error uploading image");
    stopLoading();
  }
};

export const postCategory = async (data: any) => {
  try {
    startLoading();
    console.log(data);
    const response = await axios.post(`${link}/api/category`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    stopLoading();
    showSuccessToast("Category added successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong");
    stopLoading();
  }
};

export const postOffer = async (data: any) => {
  try {
    startLoading();
    console.log(data);
    const response = await axios.post(`${link}/api/offer`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    stopLoading();
    showSuccessToast("Offer added successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong");
    stopLoading();
  }
};

export const postRestuarant = async (data: any) => {
  try {
    startLoading();
    console.log(data);
    const response = await axios.post(`${link}/api/restuarants`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    stopLoading();
    showSuccessToast("Restaurant is added successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when adding restaurant");
    stopLoading();
  }
};

export const postProduct = async (data: any) => {
  try {
    startLoading();
    console.log(data);
    const response = await axios.post(`${link}/api/products`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    stopLoading();
    showSuccessToast("Product is added successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when adding product");
    stopLoading();
  }
};

export const deleteProduct = async (id: string) => {
  try {
    startLoading();
    const response = await axios.delete(`${link}/api/products/${id}`);
    stopLoading();
    showSuccessToast("Product is deleted successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when deleting product");
    stopLoading();
  }
};

export const updateProduct = async (id: string, data: any) => {
  try {
    startLoading();
    const response = await axios.put(`${link}/api/products/${id}`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    stopLoading();
    showSuccessToast("Product is updated successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when updating product");
    stopLoading();
  }
};

export const updateRestuarant = async (id: string, data: any) => {
  try {
    startLoading();
    const response = await axios.put(`${link}/api/restuarants/${id}`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    stopLoading();
    showSuccessToast("Restuarant is updated successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when updating restuarant");
    stopLoading();
  }
};

export const deleteRestuarant = async (id: string) => {
  try {
    startLoading();
    const response = await axios.delete(`${link}/api/restuarants/${id}`);
    stopLoading();
    showSuccessToast("Restuarant is deleted successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when deleting restuarant");
    stopLoading();
  } finally {
    stopLoading();
  }
};

export const deleteCategory = async (id: string) => {
  try {
    startLoading();
    const response = await axios.delete(`${link}/api/category/${id}`);
    stopLoading();
    showSuccessToast("Category is deleted successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when deleting category");
    stopLoading();
  } finally {
    stopLoading();
  }
};

export const updateCategory = async (id: string, data: any) => {
  try {
    startLoading();
    const response = await axios.put(`${link}/api/category/${id}`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    stopLoading();
    showSuccessToast("Category is updated successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when updating category");
    stopLoading();
  } finally {
    stopLoading();
  }
};

export const updateOffer = async (id: string, data: any) => {
  try {
    startLoading();
    const response = await axios.put(`${link}/api/offer/${id}`, data, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    });
    stopLoading();
    showSuccessToast("Offer is updated successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when updating offer");
    stopLoading();
  } finally {
    stopLoading();
  }
};

export const deleteOffer = async (id: string) => {
  try {
    startLoading();
    const response = await axios.delete(`${link}/api/offer/${id}`);
    stopLoading();
    showSuccessToast("Offer is deleted successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast("Something went wrong when deleting offer");
    stopLoading();
  } finally {
    stopLoading();
  }
};

// internal services
export const logOut = async () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  localStorage.removeItem("color");
  localStorage.removeItem("userInfo");
};

// basket

export const getBasket = async (id: string) => {
  try {
    startLoading();
    const response = await axios.get(`${link}/api/basket`, {
      headers: {
        Authorization: `Bearer ${id}`,
      },
    });
    stopLoading();
    return await response.data;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    stopLoading();
  }
};

export const addBasket = async (id: string, data: any) => {
  try {
    console.log(id);

    startLoading();
    const response = await axios.post(`${link}/api/basket/add`, data, {
      headers: {
        Authorization: `Bearer ${id}`,
      },
    });
    stopLoading();

    return await response.data;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    stopLoading();
  }
};

export const deleteBasket = async (id: string, data: any) => {
  try {
    startLoading();
    const response = await axios.delete(`${link}/api/basket/delete`, {
      headers: {
        Authorization: `Bearer ${id}`,
      },
      data,
    });
    stopLoading();
    return await response.data;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    stopLoading();
  }
};

export const removeFromBasket = async (id: string, data: any) => {
  try {
    startLoading();
    const response = await axios.delete(`${link}/api/basket/remove`, {
      headers: {
        Authorization: `Bearer ${id}`,
      },
      data,
    });
    stopLoading();
    return await response.data;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    stopLoading();
  }
};

export const clearBasket = async (id: string, data: any) => {
  try {
    startLoading();
    const response = await axios.delete(`${link}/api/basket/clear`, {
      headers: {
        Authorization: `Bearer ${id}`,
      },
      data,
    });
    stopLoading();
    return await response.data;
  } catch (err) {
    console.log(err);
    return [];
  } finally {
    stopLoading();
  }
};

export const postUserOrder = async (data: any) => {
  try {
    startLoading();
    const response = await axios.post(`${link}/api/order`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${decodeToken("access_token")}`,
      },
    });
    stopLoading();
    showSuccessToast("Order created successfully");
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  } finally {
    stopLoading();
  }
};

export const getUserOrders = async () => {
  try {
    startLoading();
    const response = await axios.get(`${link}/api/order/user`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${decodeToken("access_token")}`,
      },
    });
    stopLoading();
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  } finally {
    stopLoading();
  }
};

export const deleteOrder = async (data: any) => {
  try {
    startLoading();
    const response = await axios.delete(`${link}/api/order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${decodeToken("access_token")}`,
      },
      data,
    });
    stopLoading();
    return await response.data;
  } catch (err: any) {
    console.log(err);
    // showErrorToast(err.response.data.error);
    stopLoading();
  } finally {
    stopLoading();
  }
};

export const getAllOrders = async () => {
  try {
    startLoading();
    const response = await axios.get(`${link}/api/order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${decodeToken("access_token")}`,
      },
    });
    stopLoading();
    return await response.data;
  } catch (err: any) {
    console.log(err);
    showErrorToast(err.response.data.error);
    stopLoading();
  } finally {
    stopLoading();
  }
}
