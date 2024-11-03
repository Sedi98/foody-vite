import React from "react";

import { useTranslation } from "react-i18next";
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import { getAllOrders } from "../../../services/Api/Api";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";
import OrderItem from "../../../components/Admin/Orders/OrderItem/OrderItem";

const Orders: React.FC = () => {
  const { t } = useTranslation();
  const [orders, setOrders] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const res = await getAllOrders();
      console.log(res);
      setOrders(res.result.data);
    })();
  },[]);
  return (
    <div>
      <HelmetLib title="Admin-Orders" />
      <AdminHeader variant="Orders" text={t("adminSidebarOrders")} />

      <main className="h-[calc(100vh-210px)] mt-5 overflow-x-auto">
  <div className="min-w-full inline-block align-middle">
    <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
      <thead className="bg-gray-100 h-16 text-center text-sm font-semibold leading-6">
        <tr>
          <td className="px-4 py-2">{t("ProfileMenuOrderTableThId")}</td>
          <td className="px-4 py-2">{t("ProfileMenuOrderTableCustomerId")}</td>
          <td className="px-4 py-2">{t("ProfileMenuOrderTableThTime")}</td>
          <td className="px-4 py-2">{t("ProfileMenuOrderTableThDeliveryAddress")}</td>
          <td className="px-4 py-2">{t("ProfileMenuOrderTableThPayment")}</td>
          <td className="px-4 py-2">{t("ProfileMenuOrderTableThAmount")}</td>
          <td className="px-4 py-2">{t("ProfileMenuOrderTableThContact")}</td>
          <td className="px-4 py-2">#</td>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <OrderItem
            key={index}
            id={order.id}
            customerId={order.customer_id}
            createdAt={order.created}
            address={order.delivery_address}
            paymentType={order.payment_method}
            total={order.amount}
            contact={order.contact}
            deleteFunc={() => {}}
          />
        ))}
      </tbody>
    </table>
  </div>
</main>

    </div>
  );
};

export default Orders;
