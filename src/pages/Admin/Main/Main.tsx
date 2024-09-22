import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ProductContext } from "../../../Context/ProductContext";
// components
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/Sidebar/AdminSidebar";
// pages 
import Products from "../Products/Products";
import Restaurants from "../Restaurants/Restaurants";
import Category from "../Category/Category";
import Orders from "../Orders/Orders";
import Offers from "../Offers/Offers";
import '../../../custom.css'


import Dashboard from "../Dashboard/Dashboard";
import AddProduct from "../AddProduct/AddProduct";
import AddOffer from "../AddProduct/AddOffer";
import AddCategory from "../AddProduct/AddCategory";
import AddRestaurant from "../AddProduct/AddRestaurant";




const Main = () => {
  const [value, setValue] = useState<boolean>(false);
  const [type, setType] = useState<string>("");
  const [op, setOp] = useState<string>("");

  const handleTrigger=()=>{
    setValue(!value)
    
  }

  const handleType=(val:string)=>{
    console.log(val);
    
    setType(val)
    
  }

  const handleOperation=(val:string)=>{
    setOp(val)
    
  }
  return (
    <ProductContext.Provider value={{ value: value, setValue:handleTrigger, type: type, setType:handleType,operation: '', setOperation: handleOperation }}>
    <div className="bg-[#1e1e30] h-auto lg:h-screen px-5 overflow-x-hidden">
      <AdminNavbar />

      <div className="flex h-[calc(100vh-100px)]">
      <AdminSidebar/>
      

      {(value && type === "Product") && <AddProduct type={type} op={op}  />}
      {(value && type === "Offer") && <AddOffer type={type} op={op} />}
      {(value && type === "Category") && <AddCategory type={type} op={op} />}
      {(value && type === "Restaurant") && <AddRestaurant type={type} op={op} />}
      
      <div className="ml-0 lg:ml-5 w-full h-full ">
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
