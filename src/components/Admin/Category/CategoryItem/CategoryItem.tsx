import React from "react";
import edit from "../../../../assets/icons/admin/edit.svg";
import trash from "../../../../assets/icons/admin/delete.svg";

type Props = {
  CategoryId?: string|any;
  img?: string;
  name?: string;
  slug?: string;
  editFunc: () => void;
  deleteFunc: () => void;
};

const CategoryItem: React.FC<Props> = ({CategoryId, img, name, slug, editFunc, deleteFunc}) => {
  return (
    <tr className="text-center h-16 border-y border-gray-800 text-sm not-italic font-normal leading-6">
      <td className="text-center max-w-[75px] overflow-x-auto">
        <div className="flex justify-center">
          <p className="border px-2 rounded-lg">{CategoryId}</p>
        </div>
      </td>
      <td className="flex justify-center items-center h-16">
        <img
          alt=""
          loading="lazy"
          width="50"
          height="40"
          decoding="async"
          className="object-cover"
          src={img}
          style={{ color: "transparent" }}
        />
      </td>
      <td className="max-w-56 text-center p-0">
        <p className="whitespace-nowrap p-0  max-w-56 text-center">
          {name}
        </p>
      </td>
      <td className="max-w-56">
        <p className="whitespace-nowrap max-w-56"> {slug}

        </p>
      </td>
      <td>
        <div className="flex justify-center items-right mx-3 gap-3">
          <img
            alt=""
            loading="lazy"
            width="24"
            decoding="async"
            className="cursor-pointer"
            src={edit}
            onClick={editFunc}
            style={{ color: "transparent" }}
          />
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
        </div>
      </td>
    </tr>
  );
};

export default CategoryItem;
