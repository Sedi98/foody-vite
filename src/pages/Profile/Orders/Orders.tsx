import React from "react";
import { getUserOrders, deleteOrder } from "../../../services/Api/Api";
import OrderTr from "../../../components/Profile/Order/OrderTr";
import DeleteModal from "../../../components/Shared/Modal/Modal";
import OrderDetailsModal from "../../../components/Profile/Order/OrderDetailsModal";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";
import { useTranslation } from "react-i18next";

const Orders: React.FC = () => {
  const {t} = useTranslation();
  const [orders, setOrders] = React.useState<any>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState("");
  const [refresher, setRefresher] = React.useState(false);
  const [detailModalOpen, setDetailModalOpen] = React.useState(false);
  const [productList, setProductList] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (refresher) {
      setRefresher(false);
    }
    (async () => {
      let resp = await getUserOrders();
      console.log(resp.result.data);
      setOrders(resp.result.data);
    })();
  }, [refresher]);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem("");
  };

  const closeDetailModal = () => {
    setDetailModalOpen(false);
    setProductList([]);
  };

  const handleDelete = async () => {
    console.log(selectedItem);
    const orderObj = {
      order_id: selectedItem,
    };

    let resp = await deleteOrder(orderObj);
    console.log(resp);
    setIsModalOpen(false);
    setRefresher(true);
  };

  
  return (
    <>
    <HelmetLib title="Orders" />
    <div className="w-full bg-[#f3f4f6] rounded-md p-4 h-screen">
      <h2 className="font-semibold text-3xl text-neutral-700 pb-2">{t("ProfileMenuOrdersTitle")}</h2>

      <div className="max-w-full overflow-x-auto h-full">
        <table className="min-w-full bg-white  ">
          <thead className="h-16 border-b border-slate-700">
            <tr>
              <th className="max-w-32">{t("ProfileMenuOrderTableThId")}</th>
              <th>{t("ProfileMenuOrderTableThTime")}</th>
              <th>{t("ProfileMenuOrderTableThDeliveryAddress")}</th>
              <th>{t("ProfileMenuOrderTableThAmount")}</th>
              <th>{t("ProfileMenuOrderTableThPayment")}</th>
              <th>{t("ProfileMenuOrderTableThContact")}</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="overflow-auto h-full align-top">
            {orders.map((item: any, index: number) => {
              return (
                <OrderTr
                  key={index}
                  id={item.id}
                  time={item.created}
                  deliveryAddress={item.delivery_address}
                  amount={item.amount}
                  paymentMethod={item.payment_method}
                  contact={item.contact}
                  onDelete={() => {
                    setSelectedItem(item.id);
                    setIsModalOpen(true);
                  }}
                  onShow={() => {
                    setDetailModalOpen(true);
                    setProductList(item.products);
                  }}
                />
              );
            })}
          </tbody>
        </table>
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onDelete={handleDelete}
        />

        <OrderDetailsModal
          isOpen={detailModalOpen}
          onClose={closeDetailModal}
          orders={productList}
        />
      </div>
    </div>
    
    
    
    </>
    
  );
};

export default Orders;
