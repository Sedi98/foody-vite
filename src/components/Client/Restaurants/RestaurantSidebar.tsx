import React from "react";
import RestaurantSideCard from "./RestaurantSideCard";
import RestaurantMobileCard from "./RestaurantMobileCard";
import { getCategory } from "../../../services/Api/Api";
import { useTranslation } from "react-i18next";
import filter_img from "../../../assets/icons/client/filter.svg";

const RestaurantSidebar = () => {
  const { t } = useTranslation();
  const [categories, setCategories] = React.useState<any[]>([]);
  const [active, setActive] = React.useState<string>("all");
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    (async () => {
      let response = await getCategory();
      setCategories(response.result.data);
    })();
  }, []);

  return (
    <>
      <div className={`w-full h-[50vh] fixed  ${mobileOpen ? "bottom-0" : "-bottom-[100vh]"} duration-500 left-0 bg-[#fff] z-50 shadow-md rounded-t-3xl lg:hidden overflow-y-auto`}>
        <div className="X w-full  text-center ">
          <div className="cursor-pointer font-3xl text-red-500 flex justify-center items-center  rounded-full border-2 border-red-500 w-10 h-10 mx-auto mt-2 ">
            <p onClick={() => setMobileOpen(false)}>X</p>
          </div>
        </div>

        <RestaurantMobileCard
          name={t("rstAllText")}
          id="all"
          active={active === "all"}
          click={setActive}
        />
        {categories.map((item) => (
          <RestaurantMobileCard
            key={item.id}
            name={item.name}
            id={item.id}
            active={active === item.name}
            click={setActive}
          />
        ))}
      </div>
      <span onClick={() => setMobileOpen(true)} className="px-4 py-2 w-full font-medium text-lg bg-white shadow-md mt-2 flex justify-center items-center lg:hidden">
        {" "}
        <img src={filter_img} alt="" /> Filter
      </span>
      <div className="hidden rounded-md sm:flex flex-col min-h-screen max-h-screen overflow-y-auto gap-8 bg-[#f3f4f6] w-1/6 p-2 aos-init aos-animate">
        <RestaurantSideCard
          name={t("rstAllText")}
          id="all"
          active={active === "all"}
          click={setActive}
          image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        {categories.map((item) => (
          <RestaurantSideCard
            key={item.id}
            image={item.img_url}
            name={item.name}
            id={item.id}
            active={active === item.name}
            click={setActive}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantSidebar;
