import React from "react";
import SidebarItem from "./SidebarItem";
import { useTranslation } from "react-i18next";
// icons
import dash from "../../../assets/icons/admin/dashboard.svg";
import category from "../../../assets/icons/admin/category.svg";
import products from "../../../assets/icons/admin/products.svg";
import orders from "../../../assets/icons/admin/orders.svg";
import logout from "../../../assets/icons/admin/logout.svg";
import restaurants from "../../../assets/icons/admin/restaurants.svg";
import offer from "../../../assets/icons/admin/offer.svg";
import backIcon from "../../../assets/icons/admin/aside_close.svg";
import { useMenu } from "../../../Context/MenuContext";

import { logOut } from "../../../services/Api/Api";
// react router dom
import { useNavigate } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  const { isOpen, setIsOpen } = useMenu();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/admin-login");
  };
  return (
    <>
      <div
        className={`block absolute h-screen md:h-auto md:relative top-0 left-0 z-20 `}
      >
        <aside
          className={` ${
            isOpen ? " static"  : "absolute -left-[300px]"
          } z-20 transition-all duration-500 bg-[#c74feb] w-[250px] sm:w-[256px] h-full md:h-[474px] flex flex-col gap-2 pt-6 pl-2 sm:pl-6 pr-4 rounded-[14px]`}
        >
          <div className="text-white text-3xl font-extrabold flex items-center gap-4 md:hidden z-20">
            {" "}
            <img
              onClick={() => setIsOpen(!isOpen)}
              className="w-[24px] h-[24px]"
              src={backIcon}
              alt=""
            />{" "}
            <p>
              Foody <span className="text-orange-500">.</span>{" "}
            </p>
          </div>
          <SidebarItem
            click={() => {
              navigate("/admin/");
             
            }}
            img={dash}
            text={t("adminSidebarDashboard")}
          />
          <SidebarItem
            click={() => {
              navigate("/admin/products");
            }}
            img={products}
            text={t("adminSidebarProducts")}
          />
          <SidebarItem
            click={() => {
              navigate("/admin/restaurants");
            }}
            img={restaurants}
            text={t("adminSidebarRestaurants")}
          />
          <SidebarItem
            click={() => {
              navigate("/admin/category");
            }}
            img={category}
            text={t("adminSidebarCategory")}
          />
          <SidebarItem
            click={() => {
              navigate("/admin/orders");
            }}
            img={orders}
            text={t("adminSidebarOrders")}
          />
          <SidebarItem
            click={() => {
              navigate("/admin/offers");
            }}
            img={offer}
            text={t("adminSidebarOffers")}
          />
          <SidebarItem
            click={() => {
              handleLogout();
            }}
            img={logout}
            text={t("adminSidebarLogout")}
          />
        </aside>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`absolute z-0 h-screen md:hidden md:h-auto md:static top-0 left-0 ${
          isOpen ? "bg-[#00000061] w-screen"  : ""
        }`}
      ></div>
    </>
  );
};

export default AdminSidebar;
