import React from "react";
import pizza from "../../../../assets/img/pizza.svg";
import edit from "../../../../assets/icons/admin/edit.svg";
import trash from "../../../../assets/icons/admin/delete.svg";

const AdminProductCard = () => {
  return (
    <div className="rounded-lg flex-grow py-3 bg-white basis-[calc(100%/6)] last:flex-grow-0">
      <div className="flex  flex-col items-center mt-3 py-2 shrink">
        <img
          src={pizza}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-40 object-cover"
        />
      </div>
      <div className="m-1 mx-5">
        <p className=" text-lg font-medium">Product Name</p>
        <p className=" text-[#8E8E93]">Shop Name</p>
      </div>
      <div className=" mx-5 flex justify-between">
        <p className="text-[#00B2A9;] font-medium">5 &#8380;</p>
        <div className="flex  gap-3">
          <img
            src={edit}
            alt="icon"
            className="w-[24px]"
            loading="lazy"
            decoding="async"
          />

          <img
            src={trash}
            alt="icon"
            className="w-[24px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
