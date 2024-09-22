import SidebarItem from "./SidebarItem";

import dash from "../../../assets/icons/admin/dashboard.svg";
import category from "../../../assets/icons/admin/category.svg";
import products from "../../../assets/icons/admin/products.svg";
import orders from "../../../assets/icons/admin/orders.svg";
import logout from "../../../assets/icons/admin/logout.svg";
import restaurants from "../../../assets/icons/admin/restaurants.svg";
import offer from "../../../assets/icons/admin/offer.svg";
import { useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const navigate = useNavigate();
  return (
    <div className=" hidden sm:block">
      <aside className=" bg-[#c74feb] w-full sm:w-[256px] h-[474px] flex flex-col gap-2 pt-6 pl-2 sm:pl-6 pr-4 rounded-[14px]">
        <SidebarItem
          click={() => navigate("/admin/")}
          img={dash}
          text="Dashboard"
        />
        <SidebarItem
          click={() => navigate("/admin/products")}
          img={products}
          text="Products"
        />
        <SidebarItem
          click={() => navigate("/admin/restaurants")}
          img={restaurants}
          text="Restaurants"
        />
        <SidebarItem
          click={() => navigate("/admin/category")}
          img={category}
          text="Category"
        />
        <SidebarItem
          click={() => navigate("/admin/orders")}
          img={orders}
          text="Orders"
        />
        <SidebarItem
          click={() => navigate("/admin/offers")}
          img={offer}
          text="Offer"
        />
        <SidebarItem
          click={() => {
            console.log("logout");
          }}
          img={logout}
          text="Logout"
        />
      </aside>
    </div>
  );
};

export default AdminSidebar;
