import React from "react";
import RestaurantSideCard from "./RestaurantSideCard";

const RestaurantSidebar = () => {
  return (
    <div className="hidden rounded-md sm:flex flex-col min-h-screen max-h-screen overflow-y-auto gap-8 bg-[#f3f4f6] w-1/6 p-4 aos-init aos-animate">
      <RestaurantSideCard/>
      <RestaurantSideCard/>
      <RestaurantSideCard/>
    </div>
  );
};

export default RestaurantSidebar;
