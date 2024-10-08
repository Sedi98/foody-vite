import React from 'react'
import trash from '../../../../assets/icons/admin/delete.svg'

type Props = {
    id: string
    customerId: string
    createdAt: number
    address: string
    paymentType: number
    total: number
    contact: string
    deleteFunc: () => void
}

const OrderItem: React.FC<Props> = ({id, customerId, createdAt, address, paymentType, total, contact,deleteFunc}) => {

    function timeSince(timestamp: number) {
        const currentTimestamp = Date.now(); // Get current time in milliseconds
        const timeDifference = currentTimestamp - timestamp; // Time difference in milliseconds
    
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
    
        // If more than or equal to one day, return the number of days
        if (days >= 1) {
          return `${days} day${days > 1 ? "s" : ""} ago`;
        }
    
        if (hours >= 1) {
          return `${hours} hour${hours > 1 ? "s" : ""} ago`;
        }
        // If less than one day, return the number of hours
        return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
      }


  return (
    <tr className="h-14 text-center border-slate-700 border-y text-gray-900 text-sm not-italic font-normal leading-5">
      <td>
        <div>
          <p className="border-slate-700 border rounded-lg ml-2">{id}</p>
        </div>
      </td>
      <td>
        <div className="flex justify-center">
          <p className="border-slate-700 border rounded-lg px-2">{customerId}</p>
        </div>
      </td>
      <td>{timeSince(createdAt)}</td>
      <td>{address}</td>
      <td>{paymentType== 0 ? "Cash" : "Card"}</td>
      <td>{total}</td>
      <td>{contact}</td>
      <td>
        <img
          alt=""
          loading="lazy"
          width="24"
          decoding="async"
          className="cursor-pointer"
          src={trash}
          style={{ color: "transparent" }}
          onClick={deleteFunc}
        />
      </td>
    </tr>
  )
}

export default OrderItem