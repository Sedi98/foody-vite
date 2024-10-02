import React from "react";
import Navbar from "../../../components/Shared/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
// components
import User from "../User/User";
import BasketMenu from "../BasketMenu/BasketMenu";
import Checkout from "../Checkout/Checkout";
import Orders from "../Orders/Orders";

import Sidebar from "../../../components/Profile/Sidebar/Sidebar";
import { checkUser } from "../../../services/Api/Api";
import { useNavigate } from "react-router-dom";

const ProfileMain: React.FC = () => {
  const navigate = useNavigate();



  React.useEffect(() => {
    (async () => {
      let resp = await checkUser();
      console.log(resp);

      if (!resp) {
        localStorage.clear();
        
        navigate("/login");
        return false;
      } else {
        
      }
    })();
  }, []);


  return (
    <>
      <div className="mx-5 my-5">
        <Navbar />

        <div className="flex mt-5 gap-10">
          <Sidebar />

          <Routes>
            <Route path={"/"} element={<User />} />
            <Route path={"basket"} element={<BasketMenu />} />
            <Route path={"checkout"} element={<Checkout />} />
            <Route path={"orders"} element={<Orders />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ProfileMain;
