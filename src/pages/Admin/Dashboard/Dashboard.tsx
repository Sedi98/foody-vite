import React from "react";
import { PieChart } from "../../../components/Admin/Dashboard/OrderPie/PieChart";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";

const Dashboard: React.FC = () => {
  return (
    <div className="flex ">

      <HelmetLib title="Dashboard" />
      <div className=" mb-20  mmd:mb-0 pt-4 pl-6    bg-[#27283c]    rounded-xl  pb-8 ">
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
