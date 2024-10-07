import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import basket from "../../../assets/icons/client/basket.svg";
import basket_red from "../../../assets/icons/profile/basket_red.svg";
import emptyBasket from "../../../assets/icons/client/emptyBasket.svg";
import basketTrash from "../../../assets/icons/profile/basket_trash.svg";
import BasketItem from "./BasketItem";
import { UserContext } from "../../../Context/UserContext";
import { basketContext } from "../../../Context/BasketContext";
import { getBasket,deleteBasket,addBasket,removeFromBasket,clearBasket } from "../../../services/Api/Api";

type Props = {
  type?: string;
};

const Basket: React.FC<Props> = ({ type }) => {
  const { user } = useContext(UserContext);
  const { trigger,setTrigger,setCount } = useContext(basketContext);
  const [data, setData] = useState<any>([]);
  const [prdList, setPrdList] = useState<any[]>([]);
  

  React.useEffect(() => {
    (async () => {
      if (user.id) {
        const resp = await getBasket(user.id);
        setData(resp.result.data);
        setPrdList(resp.result.data.items);
        setCount(resp.result.data.total_count)
        return true;
      } else {
        console.log("no user id");

        return false;
      }
    })();
  }, [trigger]);



  const handleDecrement=async(product_id:string)=>{
    const obj = {
      product_id
    }
    await deleteBasket(user.id,obj)
    setTrigger(true)

  }


  const handleIncrement=async(product_id:string)=>{
    const obj = {
      product_id
    }

    await addBasket(user.id,obj)
    setTrigger(true)

  }


  const handleRemove=async(product_id:string)=>{
    const obj = {
      product_id
    }
    await removeFromBasket(user.id,obj)
    setTrigger(true)
  }

  const handleClear =async ()=>{
    let obj = {
      basket_id:data.id
    }

    await clearBasket(user.id,obj)
    setTrigger(true)

  }

const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col bg-[#f3f4f6] p-4 w-full ${
        type ? "sm:w-full" : "sm:w-2/5"
      }  `}
    >
      <div className="flex items-center gap-1 border-b-2 py-3 border-b-neutral-300">
        <img src={prdList.length > 0 ? basket_red : basket} alt="basket" />
        <p
          className={`font-medium  ${
            prdList.length > 0 ? "text-red-600" : "text-neutral-500"
          } text-lg`}
        >
          {data.total_count} Items
        </p>

        <span className="ml-auto w-8" onClick={() => handleClear()}>
        <img src={basketTrash} alt="icon" className="w-full" />
      </span>
      </div>
      <div className="h-full overflow-y-auto">
        {prdList.length > 0 ? (
          prdList.map((item: any, index: number) => (
            <BasketItem key={index} data={item} minusFunc={()=>handleDecrement(item.id)} plusFunc={()=>handleIncrement(item.id) } removeFunc={()=>handleRemove(item.id)}  />
          ))
        ) : (
          <div className="flex flex-col my-5 items-center mx-auto">
            <img src={emptyBasket} alt="emptyBasket" />
            <p className="text-neutral-500 text-4xl font-medium">Opss!</p>
            <p className="text-neutral-500 text-4xl font-medium">
              Basket is empty
            </p>
          </div>
        )}

      </div>

      <div className={`flex rounded-full items-center justify-between p-2 ${prdList.length > 0 ? "bg-red-600" : "bg-neutral-300"}  mt-4`}>
        <p className={`text-white text-lg font-medium ml-4`}>Checkout</p>
        <button onClick={() => navigate("/profile/checkout")} className={`${prdList.length>0?"text-red-500":"text-white"} bg-white font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500`}>
          {data.total_amount} &#x20BC;
        </button>
      </div>
    </div>
  );
};

export default Basket;
