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

import { logOut } from "../../../services/Api/Api";
// react router dom
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();


  const handleLogout = () => {
    logOut();
    navigate("/admin-login");
  }
  return (
    <div className=" hidden sm:block">
      <aside className=" bg-[#c74feb] w-full sm:w-[256px] h-[474px] flex flex-col gap-2 pt-6 pl-2 sm:pl-6 pr-4 rounded-[14px]">
        <SidebarItem
          click={() => navigate("/admin/")}
          img={dash}
          text={t("adminSidebarDashboard")}
        />
        <SidebarItem
          click={() => navigate("/admin/products")}
          img={products}
          text={t("adminSidebarProducts")}
        />
        <SidebarItem
          click={() => navigate("/admin/restaurants")}
          img={restaurants}
          text={t("adminSidebarRestaurants")}
        />
        <SidebarItem
          click={() => navigate("/admin/category")}
          img={category}
          text={t("adminSidebarCategory")}
        />
        <SidebarItem
          click={() => navigate("/admin/orders")}
          img={orders}
          text={t("adminSidebarOrders")}
        />
        <SidebarItem
          click={() => navigate("/admin/offers")}
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
  );
};

export default AdminSidebar;
