import React from "react";
// import pizza from "../../../../assets/img/pizza.svg";
import edit from "../../../../assets/icons/admin/edit.svg";
import trash from "../../../../assets/icons/admin/delete.svg";


type Props = {
  name: string;
  description: string;
  img: string;
  price: number;
  onEdit: () => void;
  onDelete: () => void;
};

const AdminProductCard: React.FC<Props> = ({name,description,img,price, onEdit,onDelete}) => {
  return (
    <div className="rounded-lg flex-grow py-3 bg-white basis-[calc(100%/6)] last:flex-grow-0">
      <div className="flex  flex-col items-center mt-3 py-2 shrink">
        <img
          src={img}
          alt="img"
          loading="lazy"
          decoding="async"
          className="h-40 object-cover"
        />
      </div>
      <div className="m-1 mx-5">
        <p className=" text-lg font-medium">{name}</p>
        <p className=" text-[#8E8E93]">{description}</p>
      </div>
      <div className=" mx-5 flex justify-between">
        <p className="text-[#00B2A9;] font-medium">{price} &#8380;</p>
        <div className="flex  gap-3">
          <img
            src={edit}
            alt="icon"
            className="w-[24px]"
            loading="lazy"
            decoding="async"
            onClick={onEdit}
          />

          <img
            src={trash}
            alt="icon"
            className="w-[24px]"
            loading="lazy"
            decoding="async"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
