import React,{useState,useContext} from "react";
import basket from "../../../assets/icons/client/basket.svg";
import emptyBasket from "../../../assets/icons/client/emptyBasket.svg";
import BasketItem from "./BasketItem";
import { UserContext } from "../../../Context/UserContext";
import { getBasket } from "../../../services/Api/Api";


type Props = {
  type?: string;
};


const Basket: React.FC<Props> = ({ type }) => {
  const [data, setData] = useState<any>([]);
  const [prdList, setPrdList] = useState<any[]>([]);
  
  const { userID } =useContext(UserContext);

 
  

 

  React.useEffect(() => {
    (async () => {
  
      if (userID) {
        const resp = await getBasket(userID);
        console.log(resp);
        setData(resp.result.data);
        setPrdList(resp.result.data.items)
        return true
      }else{
        console.log("no user id");
        
        return false
      }
    })();
  }, []);
  return (
    <div
      className={`flex flex-col bg-[#f3f4f6] p-4 w-full ${
        type ? "sm:w-full" : "sm:w-2/5"
      }  `}
    >
      <div className="flex items-center gap-1 border-b-2 py-3 border-b-neutral-300">
        <img src={basket} alt="basket" />
        <p className="font-medium text-neutral-500 text-lg  ">0 Items</p>
      </div>

      {prdList.length>0 ? (
        prdList.map((item:any, index:number) => <BasketItem key={index} />)
      ) : (
        <div className="flex flex-col my-5 items-center mx-auto">
          <img src={emptyBasket} alt="emptyBasket" />
          <p className="text-neutral-500 text-4xl font-medium">Opss!</p>
          <p className="text-neutral-500 text-4xl font-medium">
            Basket is empty
          </p>
        </div>
      )}

      <div className="flex rounded-full items-center justify-between p-2 bg-neutral-300 mt-4">
        <p className="text-white text-lg font-medium ml-4">Checkout</p>
        <button className="bg-white text-whiteLight3 font-medium py-1 px-10 rounded-full shadow-md hover:scale-95 transition-all duration-500">
          0 &#x20BC;
        </button>
      </div>
    </div>
  );
};

export default Basket;
