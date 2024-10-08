import React from "react";
import { PieChart } from "../../../components/Admin/Dashboard/OrderPie/PieChart";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";
import { useTranslation } from "react-i18next";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex ">

      <HelmetLib title={t("adminSidebarDashboard")} />
      <div className=" mb-20  mmd:mb-0 pt-4 pl-6    bg-[#27283c]    rounded-xl  pb-8 ">
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
