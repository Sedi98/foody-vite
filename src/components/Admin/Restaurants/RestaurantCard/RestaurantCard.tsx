import React from "react";
import edit from "../../../../assets/icons/admin/edit.svg";
import trash from "../../../../assets/icons/admin/delete.svg";
// import pizza from "../../../../assets/img/pizza.svg";

type props = {
  name: string;
  description: string;
  image: string;
  onEdit: () => void;
  onDelete: () => void;
};

const RestaurantCard: React.FC<props> = ({
  name,
  description,
  image,
  onEdit,
  onDelete,
}) => {
  return (
    <div className=" flex  items-center justify-between bg-white p-2 rounded-lg h-28 gap-0 ">
      <img
        src={image}
        className="h-20 object-cover rounded-lg"
        alt="img"
        loading="lazy"
        decoding="async"
        width={65}
        height={65}
      />
      <div className="flex flex-col">
        <span className="text-gray-900 text-lg not-italic font-medium   whitespace-nowrap overflow-x-auto  max-w-32  ">
          {" "}
          {name}
        </span>
        <span className="text-sm text-gray-500 not-italic font-medium whitespace-nowrap overflow-x-auto  max-w-32    ">
          {description}
        </span>
      </div>
      <div className="flex flex-col  gap-3">
        <img
          src={trash}
          alt="icon"
          className="min-w-[20px]"
          loading="lazy"
          decoding="async"
          onClick={onDelete}
        />
        <img
          src={edit}
          alt="icon"
          className="min-w-[20px]"
          loading="lazy"
          decoding="async"
          onClick={onEdit}
        />
      </div>
    </div>
  );
};

export default RestaurantCard;
