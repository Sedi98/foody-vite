import React from "react";
import menuIcon from "../../../assets/icons/profile/order_menu.svg";

type Props = {
  id: string;
  time: number;
  deliveryAddress: string;
  amount: number;
  paymentMethod: number;
  contact: string;
  onDelete: () => void;
  onShow: () => void;
};

const OrderTr: React.FC<Props> = ({
  id,
  time,
  deliveryAddress,
  amount,
  paymentMethod,
  contact,
  onDelete,
  onShow
}) => {
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

  const [showMenu, setShowMenu] = React.useState<boolean>(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <tr className="border-b border-gray-200">
        <td className=" py-2 px-4 flex justify-center items-center">
          {" "}
          <span className="border-[1px] border-gray-500 rounded-lg px-2 py-2 max-w-32 w-32 overflow-hidden text-ellipsis text-sm">
            {id}
          </span>{" "}
        </td>
        <td className="text-center py-2 px-4">{timeSince(time)}</td>
        <td className="text-center py-2 px-4">{deliveryAddress}</td>
        <td className="text-center py-2 px-4">{amount} &#8380;</td>
        <td className="text-center py-2 px-4">
          {paymentMethod === 0 ? "Cash" : "Card"}
        </td>
        <td className="text-center py-2 px-4">{contact}</td>
        <td
          onClick={handleMenu}
          className="text-center py-2 px-4 relative "
        >
          <img src={menuIcon} alt="icon" className="min-w-[5px] w-[5px]" />

          <div
            onMouseLeave={() => setShowMenu(false)}
            className={`absolute top-10 -left-10 shadow-md text-left  bg-white px-4 py-2 z-20 ${
              showMenu ? "" : "hidden"
            }`}
          >
            <p onClick={onShow} className="text-green-500">Show</p>
            <p onClick={onDelete} className="text-red-700">
              Delete
            </p>
          </div>
        </td>
      </tr>
    </>
  );
};

export default OrderTr;
