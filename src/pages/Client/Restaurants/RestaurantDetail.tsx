
import Navbar from "../../../components/Shared/Navbar/Navbar";
import Button from "../../../components/Shared/Button/Button";

import RestaurantListItem from "../../../components/Client/Restaurants/RestaurantListItem";

const RestaurantDetail = () => {
  return (
    <>
      <div className="mx-5 my-5">
        <Navbar />
      </div>

      <div className="mx-0 sm:m-5 p-2 sm:p-0 flex flex-col">
        <div className="imageCnt flex justify-center">
          <img
            className=" h-[448px] w-full object-cover"
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="detail"
            loading="lazy"
          />
        </div>
        <div className="aboutCnt flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <div className="flex flex-col gap-1">
            <p className="font-semibold text-neutral-800 text-2xl">Mizza Hut</p>
            <p className="font-medium text-neutral-500">Khirdalan District</p>
          </div>

          <div className="flex gap-10 border-y-2 sm:border-none py-2 sm:p-0 w-full sm:w-max my-2 sm:my-0 items-center justify-between sm:justify-center">
            <div className="flex flex-col gap-1 text-neutral-500">
              <p className="text-lg">Cousine</p>
              <p>Pizza, Italian, American, Chinese</p>
            </div>

            <div className="flex items-center gap-2">
              <Button text="5$ Delivery" variation="detailContained" />
              <Button text="Order Now" variation="detail" />
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-5 mt-8">

          <div className=" bg-[#f3f4f6] w-full sm:w-3/5">
          <p className="text-center text-3xl text-neutral-800 font-semibold my-8">Products</p>
          <RestaurantListItem />
          <RestaurantListItem />
          <RestaurantListItem />


          </div>




          <div className="flex flex-col bg-[#f3f4f6] p-4 w-full sm:w-2/5"></div>



        </div>

      </div>
    </>
  );
};

export default RestaurantDetail;
