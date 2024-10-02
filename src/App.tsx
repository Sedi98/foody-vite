import "./App.css";
import { useContext, useEffect } from "react";
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
import ProfileMain from "./pages/Profile/ProfileMain/ProfileMain";
//
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Faqs from "./pages/Client/Faqs/Faqs";
import NotFound from "./pages/Client/NotFound/NotFound";
import { useGlobalLoading } from "./Context/useGlobalLoading";
import LoadingIndicator from "./components/Shared/LoadingIndicator/LoadingIndicator";
import { getBasket } from "./services/Api/Api";

import { ROUTER } from "./ROUTER";

import { UserContext } from "./Context/UserContext";
import { basketContext } from "./Context/BasketContext";
import { checkUser } from "./services/Api/Api";

function App() {
  const { setUserID, setUser,user } = useContext(UserContext);
  const { setCount,count } = useContext(basketContext);
  const { loading } = useGlobalLoading();

  useEffect(() => {
    (async () => {
      let resp = await checkUser();

      if (!resp) {
        localStorage.clear();
        setUserID(null);
        setUser(null);
        return false;
      } else {
        setUserID(resp);
       
      }
    })();
  }, []);



  useEffect(() => {

    (async () => {
      console.log(count);
      let basket = await getBasket(user.id);
      setCount(basket.result.data.total_count);
    })()
   
    
  }, [count]);

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
        <Route path={ROUTER.ProfileHome} element={<ProfileMain />} />
        <Route path="/restaurant-detail/:id" element={<RestaurantDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
