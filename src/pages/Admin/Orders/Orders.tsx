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

      <main className="h-[calc(100vh-210px)] mt-5">
        <table className="min-w-full bg-white">
          <thead className="h-16 text-center text-sm not-italic font-semibold leading-6">
            <tr>
              <td>{t("ProfileMenuOrderTableThId")}</td>
              <td>{t("ProfileMenuOrderTableCustomerId")}</td>
              <td>{t("ProfileMenuOrderTableThTime")}</td>
              <td>{t("ProfileMenuOrderTableThDeliveryAddress")}</td>
              <td>{t("ProfileMenuOrderTableThPayment")}</td>
              <td>{t("ProfileMenuOrderTableThAmount")}</td>
              <td>{t("ProfileMenuOrderTableThContact")}</td>
            </tr>
          </thead>
          <tbody>
            {/* <OrderItem /> */}
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
      </main>
    </div>
  );
};

export default Orders;
