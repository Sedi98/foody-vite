import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./components/Shared/Cursor/Cursor";
// import Navbar from "./components/Shared/Navbar/Navbar";
import Home from "./pages/Client/Home/Home";
import About from "./pages/Client/About/About";
import HowIt from "./pages/Client/HowItWorks/HowIt";
import UserLogin from "./pages/Client/UserLogin/UserLogin";

import Faqs from "./pages/Client/Faqs/Faqs";
import NotFound from "./pages/Client/NotFound/NotFound";

import { ROUTER } from "./ROUTER";

function App() {
  return (
    <>
      <CustomCursor />

      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.About} element={<About />} />
        <Route path={ROUTER.HowIt} element={<HowIt />} />
        <Route path={ROUTER.Faq} element={<Faqs />} />
        <Route path={ROUTER.UserLogin} element={<UserLogin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
