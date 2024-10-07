import React from "react";
import { getUserOrders } from "../../../services/Api/Api";
import OrderTr from "../../../components/Profile/Order/OrderTr";

const Orders: React.FC = () => {
  const [orders, setOrders] = React.useState<any>([]);

  React.useEffect(() => {
    (async () => {
      let resp = await getUserOrders();
      console.log(resp.result.data);
      setOrders(resp.result.data);
    })();
  }, []);

  return (
    <div className="w-full bg-[#f3f4f6] rounded-md p-4">
      <h2 className="font-semibold text-3xl text-neutral-700">Orders</h2>

      <div className="max-w-full overflow-x-auto">
        <table className="min-w-full bg-white ">
          <thead className="h-16 border-b border-slate-700">
            <tr>
              <th className="max-w-32">ID</th>
              <th>Time</th>
              <th>Delivery Address</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Contact</th>
              <th></th>
            </tr>
          </thead>

          <tbody className="h-full overflow-auto">
            {orders.map((item: any, index: number) => {
              return (
                <OrderTr
                  key={index}
                  id={item.id}
                  time={item.created}
                  deliveryAddress={item.delivery_address}
                  amount={item.amount}
                  paymentMethod={item.paymentMethod}
                  contact={item.contact}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
