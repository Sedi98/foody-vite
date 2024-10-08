import React from "react";
import Input from "../../../components/Shared/Input/Input";
import Button from "../../../components/Shared/Button/Button";
import radioChecked from "../../../assets/icons/profile/radio_checked.svg";
import radio from "../../../assets/icons/profile/radio.svg";
import { UserContext } from "../../../Context/UserContext";
import OrderItem from "../../../components/Profile/Order/OrderItem";
import { getBasket, postUserOrder } from "../../../services/Api/Api";
import { showErrorToast } from "../../../services/Utils/ToastUtils";
import checkoutImg from '../../../assets/icons/profile/checkout_success.svg';
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";

type Props = {
  delivery_address: string;
  contact: string;
  payment_method: number;
  basket_id: string;
};

type objProps = {
  delivery_address?: string;
  contact?: string;
  payment_method?: number;
  basket_id?: string;
};

const Checkout: React.FC = () => {
  const { user } = React.useContext(UserContext);
  const [result, setResult] = React.useState<any>([]);
  const [list, setList] = React.useState<any>([]);
  const [resetBasket, setResetBasket] = React.useState<boolean>(false);
  const [showSuccess, setShowSuccess] = React.useState<boolean>(false);
  const [inputVal, setInputVal] = React.useState<Props>({
    delivery_address: "",
    contact: "",
    payment_method: 0,
    basket_id: "",
  });

  React.useEffect(() => {
    if (resetBasket) {
      setResetBasket(false);
    }
    (async () => {
      let resp = await getBasket(user.id);

      setResult(resp.result.data);
      setList(resp.result.data.items);
      console.log(resp.result.data.items);
      

      if (resp.result.data.items.length === 0) {
        setShowSuccess(true);
      }

      setInputVal({
        ...inputVal,
        basket_id: resp.result.data.id ? resp.result.data.id : "",
      });
    })();
  }, [resetBasket]);

  const handleSubmit = async () => {
    setInputVal({
      ...inputVal,
      basket_id: result.id,
    });
    if (inputVal.delivery_address === "") {
      showErrorToast("Delivery address is required");
      return;
    }
    if (inputVal.contact === "") {
      showErrorToast("Contact is required");
      return;
    }

    if (!/^\+994\d{9}$/.test(inputVal.contact)) {
      showErrorToast(
        "Phone number is not valid. It must start with +994 and be 13 characters long."
      );
      return false;
    }

    let dataObj: objProps = {};

    dataObj.delivery_address = inputVal.delivery_address;
    dataObj.contact = inputVal.contact;
    dataObj.payment_method = inputVal.payment_method;
    dataObj.basket_id = inputVal.basket_id;

    if (!/^\+994\d{9}$/.test(inputVal.contact)) {
      showErrorToast(
        "Phone number is not valid. It must start with +994 and be 13 characters long."
      );
      return false;
    }
    await postUserOrder(dataObj);

    setInputVal({
      delivery_address: "",
      contact: "",
      payment_method: 0,
      basket_id: "",
    });
    setResetBasket(true);
    setShowSuccess(true);
  };

  return (
    <>
      <HelmetLib title="Checkout" />
      {showSuccess ? (
        <div className="w-full  flex flex-col justify-center items-center bg-[#f3f4f6]  ">
          <img src={checkoutImg} alt="" />
          <p className="text-3xl font-semibold text-neutral-700 mt-4">Your order has been received</p>
        </div>
      ) : (
        <div className="w-full flex flex-col-reverse md:flex-row gap-8">
          <div className="w-full bg-[#f3f4f6] rounded-md p-7">
            <h2 className="font-semibold text-3xl text-neutral-700">
              Checkout
            </h2>

            <div className="flex flex-col gap-4 mt-4">
              <Input
                label="Delivery Address"
                type="text"
                placeholder="Enter your address"
                variation="profile"
                changeFunc={(e: any) =>
                  setInputVal({ ...inputVal, delivery_address: e.target.value })
                }
                inputVal={inputVal.delivery_address}
              />

              <Input
                label="Phone Number"
                type="text"
                placeholder="Enter your email"
                variation="profile"
                changeFunc={(e: any) =>
                  setInputVal({ ...inputVal, contact: e.target.value })
                }
                inputVal={inputVal.contact}
              />
            </div>
            <div className="paymet mt-4">
              <h2 className="font-semibold text-xl text-neutral-500">
                Payment Method
              </h2>

              <div className="flex gap-8 ">
                <div
                  className="flex gap-2 items-center "
                  onClick={() =>
                    setInputVal({ ...inputVal, payment_method: 0 })
                  }
                >
                  <img
                    src={inputVal.payment_method === 0 ? radioChecked : radio}
                    alt=""
                  />
                  <label className=" text-neutral-500">Cash</label>
                </div>

                <div
                  className="flex gap-2 items-center"
                  onClick={() =>
                    setInputVal({ ...inputVal, payment_method: 1 })
                  }
                >
                  <img
                    src={inputVal.payment_method === 1 ? radioChecked : radio}
                    alt=""
                  />
                  <label className=" text-neutral-500">Credit Card</label>
                </div>
              </div>
            </div>
            <Button variation="profile" text="Checkout" click={handleSubmit} />
          </div>

          <div className="w-full sm:w-[40%] flex flex-col  px-3 sm:px-8 py-5 flex-wrap gap-0 sm:bg-[#f3f4f6] rounded-md">
            <p className="w-full text-center text-neutral-500 font-medium text-xl mb-4">
              Orders
            </p>

            <div className="flex flex-col mt-4 sm:mt-0 gap-6 max-h-72 pr-2 overflow-y-auto ">
              {list.map((item: any, index: number) => (
                <OrderItem
                  key={index}
                  itemCount={item.count}
                  itemName={item.name}
                  item_price={item.amount}
                />
              ))}
            </div>

            <div className="flex justify-between items-center px-0 border-t-2 pt-4 border-t-neutral-300 mt-auto">
              <p className="text-black font-bold text-xl">Total</p>
              <p className="text-xl">{result.total_amount} &#8380;</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Checkout;
