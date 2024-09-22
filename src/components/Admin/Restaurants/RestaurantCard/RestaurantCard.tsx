
import edit from "../../../../assets/icons/admin/edit.svg";
import trash from "../../../../assets/icons/admin/delete.svg";
import pizza from "../../../../assets/img/pizza.svg";

const RestaurantCard = () => {
  return (
    <div className=" flex  flex-grow last:flex-grow-0 items-center justify-between bg-white p-4 rounded-lg ">
      <img
        src={pizza}
        className="h-20 object-cover"
        alt=""
        loading="lazy"
        decoding="async"
      />
      <div className="flex flex-col">
        <span className="text-gray-900 text-lg not-italic font-medium   whitespace-nowrap overflow-x-scroll  max-w-40  ">
          {" "}
          Name
        </span>
        <span className="text-sm text-gray-500 not-italic font-medium whitespace-nowrap overflow-x-scroll  max-w-40    ">
          Description
        </span>
      </div>
      <div className="flex flex-col  gap-3">
        <img
          src={edit}
          alt="icon"
          className="min-w-[24px]"
          loading="lazy"
          decoding="async"
        />
        <img
          src={trash}
          alt="icon"
          className="min-w-[24px]"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};

export default RestaurantCard;
