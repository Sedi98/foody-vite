import { useEffect, useState } from "react";
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import OfferItem from "../../../components/Admin/Offers/OfferItem/OfferItem";
import { getOffers } from "../../../services/Api/Api";


const Offers = () => {
  const [offers, setOffers] = useState<any[]>([]);


  useEffect(() => {
    getOffersData();
  }, []);

  const getOffersData = async () => {
    const response = await getOffers();
    console.log(response.result.data);
    setOffers(response.result.data);
    
  }
  return (
    <div>
      <AdminHeader text="Offers" />

      <main className="h-[calc(100vh-210px)] overflow-auto mt-5">
        <table className=" w-full bg-white ">
          <thead className="h-16  text-center text-sm not-italic font-semibold leading-6">
            <tr>
              <td>ID</td>
              <td>Image</td>
              <td>Title</td>
              <td>Description</td>
              <td>#</td>
            </tr>
          </thead>
          <tbody className="">

            {/* <OfferItem /> */}
            {offers.map((data) => {
              return <OfferItem key={data.id} offerID={data.id} img={data.img_url} name={data.name} desc={data.description} editFunc={() => {}} deleteFunc={() => {}}/>
            })}


          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Offers;
