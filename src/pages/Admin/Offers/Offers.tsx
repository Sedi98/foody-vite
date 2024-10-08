import { useEffect, useState, useContext } from "react";
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import OfferItem from "../../../components/Admin/Offers/OfferItem/OfferItem";
import { getOffers, deleteOffer } from "../../../services/Api/Api";
import { ProductContext } from "../../../Context/ProductContext";
import { useTranslation } from "react-i18next";
import DeleteModal from "../../../components/Shared/Modal/Modal";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";

const Offers = () => {
  const { t } = useTranslation();
  const { value, setValue, setVariation, setActiveData } =
    useContext(ProductContext);
  const [offers, setOffers] = useState<any[]>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useEffect(() => {
    getOffersData();
  }, [isDeleted, !value]);

  const handleEdit = (item: any) => {
    setActiveData(item);
    setValue();
    setVariation("offer");
  };

  const openModal = (id: string): void => {
    setSelectedItem(id);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleDelete = (): void => {
    deleteOffer(selectedItem);
    setIsModalOpen(false);
    setSelectedItem("");
    setIsDeleted(true);
  };

  const getOffersData = async () => {
    const response = await getOffers();
    console.log(response.result.data);
    setOffers(response.result.data);
  };
  return (
    <div>
      <HelmetLib title="Admin-Offers" />
      <AdminHeader variant="Offers" text={t("adminSidebarOffers")} />

      <main className="h-[calc(100vh-210px)] overflow-auto mt-5">
        <table className=" w-full bg-white ">
          <thead className="h-16  text-center text-sm not-italic font-semibold leading-6">
            <tr>
              <td>{t("adminOfferTableThId")}</td>
              <td>{t("adminOfferTableThImage")}</td>
              <td>{t("adminOfferTableThTitle")}</td>
              <td>{t("adminOfferTableThDescription")}</td>
              <td>#</td>
            </tr>
          </thead>
          <tbody className="">
            {/* <OfferItem /> */}
            {offers.map((data) => {
              return (
                <OfferItem
                  key={data.id}
                  offerID={data.id}
                  img={data.img_url}
                  name={data.name}
                  desc={data.description}
                  editFunc={() => {
                    handleEdit(data);
                  }}
                  deleteFunc={() => {
                    openModal(data.id);
                  }}
                />
              );
            })}
          </tbody>
        </table>
      </main>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Offers;
