import React from "react";

import edit from "../../../../assets/icons/admin/edit.svg";
import trash from "../../../../assets/icons/admin/delete.svg";


type Props = {
    offerID?: string|any;
    img?: string;
    name?: string;
    desc?: string;
    editFunc: () => void;
    deleteFunc: () => void;
};

const OfferItem: React.FC<Props> = ({offerID, img, name, desc, editFunc, deleteFunc}) => {
  return (
    <tr className="text-center h-16 border-y border-gray-800 text-sm not-italic font-normal leading-6">
      <td className="text-center max-w-[75px] overflow-x-hidden">
        
          <p className="border px-2 rounded-lg">{offerID}</p>
       
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
          {/* {name} */} {name}
        </p>
      </td>
      <td className="max-w-56">
        <p className="whitespace-nowrap max-w-56"> {desc}

        </p>
      </td>
      <td>
        <span className="flex justify-center items-right mx-3 gap-3">
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
        </span>
      </td>
    </tr>
  )
}

export default OfferItem