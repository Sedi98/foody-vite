import React from "react";
import Navbar from "../../../components/Shared/Navbar/Navbar";
import Button from "../../../components/Shared/Button/Button";
import { useLocation,useNavigate } from "react-router-dom";
import { getRestaurantById, getProducts } from "../../../services/Api/Api";
import Basket from "../../../components/Shared/Basket/Basket";
import { UserContext } from "../../../Context/UserContext";
import { basketContext } from "../../../Context/BasketContext";
import { addBasket } from "../../../services/Api/Api";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";


import RestaurantListItem from "../../../components/Client/Restaurants/RestaurantListItem";

const RestaurantDetail = () => {
  let location: any = useLocation();
  const navigate=useNavigate()
const {setTrigger} = React.useContext(basketContext)
  const {user} = React.useContext(UserContext)
 
  
 

  const [details, setDetails] = React.useState<any>({});
  const [products, setProducts] = React.useState<any>([]);

  React.useEffect(() => {
    (async () => {
      location = location.pathname.split("/").pop();
      const response = await getRestaurantById(location);
      setDetails(response.result.data);
      if (response) {
        const prdResponse = await getProducts(location, "");
        setProducts(prdResponse.result.data);
        
      }
    })();
  }, []);


  const addToBasket = async(product_id:string) => {
    
    const obj = {
      product_id
    }

    await addBasket(user?.id, obj);
    setTrigger(true)
  }

  return (
    <>
    <HelmetLib title={details?.name} />
      <div className="mx-5 my-5">
        <Navbar />
      </div>

      <div className="mx-0 sm:m-5 p-2 sm:p-0 flex flex-col">
        <div className="imageCnt flex justify-center">
          <img
            className=" h-[448px] w-full object-cover"
            src={details.img_url}
            alt="detail"
            loading="lazy"
          />
        </div>
        <div className="aboutCnt flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-neutral-800 text-2xl">
              {details?.name || " "}
            </p>
            <p className="font-medium text-neutral-500">
              {details?.address || " "}
            </p>
          </div>

          <div className="flex gap-10 border-y-2 sm:border-none py-2 sm:p-0 w-full sm:w-max my-2 sm:my-0 items-center justify-between sm:justify-center">
            <div className="flex flex-col gap-1 text-neutral-500">
              <p className="text-lg">Cousine</p>
              <p>{details?.cuisine || " "}</p>
            </div>

            <div className="flex items-center gap-2">
              <Button
                text={`${details?.delivery_price || " "}$ Delivery`}
                variation="detailContained"
              />
              <Button text="Back" variation="detail" click={() => {navigate('/restaurants-client')} } />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-5 mt-8 h-[65vh]">
          <div className=" bg-[#f3f4f6] w-full sm:w-3/5 overflow-y-auto">
            <p className="text-center text-3xl text-neutral-800 font-semibold my-8">
              Products
            </p>
            {products.map((product: any, index: number) => (
              <RestaurantListItem
                key={index}
                id={product.id}
                name={product.name}
                desc={product.description}
                image={product.img_url}
                price={product.price}
                click={() => addToBasket(product.id)}
              />
            ))}
       
          </div>

          <Basket />

          
        </div>
      </div>
    </>
  );
};

export default RestaurantDetail;
