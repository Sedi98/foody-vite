import React from 'react';



type Props= {
    isOpen: boolean;
    onClose: () => void;
    orders: any[];
}

const OrderDetailsModal: React.FC<Props> = ({ isOpen, onClose, orders }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-4/5 ">
        <div className="p-6">
          <h2 className="text-lg font-bold mb-4">Your Orders</h2>
          
          <div className='overflow-x-auto'>

          <table className="w-full table-auto text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Image</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Price &#8380;</th>
                <th className="px-4 py-2">Count</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">
                    <img
                      src={order.img_url}
                      alt={order.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="px-4 py-2">{order.name}</td>
                  <td className="px-4 py-2">{order.price} &#8380;</td>
                  <td className="px-4 py-2">{order.count}</td>
                  <td className="px-4 py-2">{(order.price * order.count)} &#8380;</td>
                </tr>
              ))}
            </tbody>
          </table>

          </div>
          
          <div className="flex justify-between items-center mt-4">
            <button className="text-gray-500 hover:text-gray-700 border-2 border-gray-500 hover:border-gray-700 px-4 py-2 rounded" onClick={onClose}>
              Close
            </button>
            <div className="flex items-center space-x-2">
              <button className="px-2 py-1 bg-gray-200 rounded">1</button>
              <span>/</span>
              <button className="px-2 py-1 bg-gray-200 rounded">03</button>
              <select className="px-2 py-1 bg-gray-200 rounded">
                <option>02</option>
                <option>04</option>
                <option>06</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
