import React from "react";
import { PieChart } from "../../../components/Admin/Dashboard/OrderPie/PieChart";

const Dashboard: React.FC = () => {
  return (
    <div className="flex ">
      <div className=" mb-20  mmd:mb-0 pt-4 pl-6    bg-[#27283c]    rounded-xl  pb-8 ">
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
