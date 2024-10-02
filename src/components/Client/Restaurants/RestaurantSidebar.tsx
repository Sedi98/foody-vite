import React from "react";
import RestaurantSideCard from "./RestaurantSideCard";
import { getCategory } from "../../../services/Api/Api";

const RestaurantSidebar = () => {
  const [categories, setCategories] = React.useState<any[]>([]);
  const [active, setActive] = React.useState<string>("all");

  React.useEffect(() => {
    (async () => {
      let response = await getCategory();
      setCategories(response.result.data);
    })()
  }, []);

  return (
    <div className="hidden rounded-md sm:flex flex-col min-h-screen max-h-screen overflow-y-auto gap-8 bg-[#f3f4f6] w-1/6 p-2 aos-init aos-animate">
      <RestaurantSideCard name="All" id="all" active={active === "all"} click={setActive} image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      {categories.map((item) => (
        <RestaurantSideCard key={item.id} image={item.img_url} name={item.name} id={item.id} active={active === item.name} click={setActive} />
      ))}

    </div>
  );
};

export default RestaurantSidebar;
