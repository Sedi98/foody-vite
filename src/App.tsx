import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/Shared/Cursor/Cursor";
// import Navbar from "./components/Shared/Navbar/Navbar";
import Home from "./pages/Client/Home/Home";
import About from "./pages/Client/About/About";
import HowIt from "./pages/Client/HowItWorks/HowIt";
import UserLogin from "./pages/Client/UserLogin/UserLogin";
import Restaurants from "./pages/Client/Restaurants/Restaurants";
import RestaurantDetail from "./pages/Client/Restaurants/RestaurantDetail";
import AdminLogin from "./pages/Admin/Login/AdminLogin";
import Main from "./pages/Admin/Main/Main";
//
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Faqs from "./pages/Client/Faqs/Faqs";
import NotFound from "./pages/Client/NotFound/NotFound";
import { useGlobalLoading } from "./Context/useGlobalLoading";
import LoadingIndicator from "./components/Shared/LoadingIndicator/LoadingIndicator";


import { ROUTER } from "./ROUTER";

function App() {
  const { loading } = useGlobalLoading();
  console.log(loading);
  
  return (
    <>
      <CustomCursor />

      {loading && <LoadingIndicator />}

      <ToastContainer />

      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.About} element={<About />} />
        <Route path={ROUTER.HowIt} element={<HowIt />} />
        <Route path={ROUTER.Faq} element={<Faqs />} />
        <Route path={ROUTER.UserLogin} element={<UserLogin />} />
        <Route path={ROUTER.Restaurants_client} element={<Restaurants />} />
        <Route path={ROUTER.AdminLogin} element={<AdminLogin />} />
        <Route path={ROUTER.AdminHome} element={<Main />} />
        <Route path="/restaurant-detail/:id" element={<RestaurantDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;