
import { Route, Routes } from "react-router-dom";
// components
import AdminNavbar from "../../../components/Admin/Navbar/AdminNavbar";
import AdminSidebar from "../../../components/Admin/Sidebar/AdminSidebar";
// pages 
import Products from "../Products/Products";
import Restaurants from "../Restaurants/Restaurants";
import Category from "../Category/Category";
import Orders from "../Orders/Orders";
import Offers from "../Offers/Offers";


import Dashboard from "../Dashboard/Dashboard";

const Main = () => {
  return (
    <div className="bg-[#1e1e30] h-auto lg:h-screen px-5">
      <AdminNavbar />

      <div className="flex">
      <AdminSidebar/>
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
  );
};

export default Main;
