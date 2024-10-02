import { useState, useEffect,useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductContext } from "../../../Context/ProductContext";
import { useNavigate } from "react-router-dom";
// services
import { checkUser } from "../../../services/Api/Api";
// components
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/Sidebar/AdminSidebar";
// pages
import Products from "../Products/Products";
import Restaurants from "../Restaurants/Restaurants";
import Category from "../Category/Category";
import Orders from "../Orders/Orders";
import Offers from "../Offers/Offers";
import "../../../custom.css";

import Dashboard from "../Dashboard/Dashboard";
import AddProduct from "../AddProduct/AddProduct";
import AddOffer from "../AddProduct/AddOffer";
import AddCategory from "../AddProduct/AddCategory";
import AddRestaurant from "../AddProduct/AddRestaurant";
import {UserContext} from "../../../Context/UserContext";

const Main = () => {
  const navigate = useNavigate();
  const [editData, setEditData] = useState<any>(null);
  const [value, setValue] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("");

  const { setUserID, setUser } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      let resp = await checkUser();
      console.log(resp);

      if (!resp) {
        localStorage.clear();
        setUserID(null);
        setUser(null);
        navigate("/admin-login");
        return false;
      } else {
        setUserID(resp);
      }
    })();
  }, []);

  const handleTrigger = () => {
    setValue(!value);
  };

  const setEditDataFunc = (data: any) => {
    setEditData(data);
  };

  const SetVariation = (type: string) => {
    setModalType(type);
  };

  return (
    <ProductContext.Provider
      value={{
        value: value,
        setValue: handleTrigger,
        data: editData,
        setActiveData: setEditDataFunc,
        variation: modalType,
        setVariation: SetVariation,
      }}
    >
      <div className="bg-[#1e1e30] h-auto lg:h-screen px-5 overflow-x-hidden">
        <AdminNavbar />

        <div className="flex h-[calc(100vh-100px)]">
          <AdminSidebar />

          {value && modalType === "product" && <AddProduct data={editData} />}
          {value && modalType === "offer" && <AddOffer data={editData} />}
          {value && modalType === "category" && <AddCategory data={editData} />}
          {value && modalType === "restaurant" && (
            <AddRestaurant data={editData} />
          )}

          <div className="ml-0 md:ml-5 w-full h-full ">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
              <Route path="restaurants" element={<Restaurants />} />
              <Route path="category" element={<Category />} />
              <Route path="orders" element={<Orders />} />
              <Route path="offers" element={<Offers />} />
            </Routes>
          </div>
        </div>
      </div>
    </ProductContext.Provider>
  );
};

export default Main;
