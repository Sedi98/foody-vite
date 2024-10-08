import { useState, useEffect, useContext } from "react";
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import RestaurantCard from "../../../components/Admin/Restaurants/RestaurantCard/RestaurantCard";
import {
  getRestuarants,
  deleteRestuarant,
  getCategory,
} from "../../../services/Api/Api";
import { useTranslation } from "react-i18next";
import { RestaurantContext } from "../../../Context/RestaurantContext";
import { ProductContext } from "../../../Context/ProductContext";
import DeleteModal from "../../../components/Shared/Modal/Modal";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";

type dataProps = {
  address: string;
  category_id: string;
  created: number;
  cuisine: string;
  delivery_min: number;
  delivery_price: number;
  id: string;
  img_url: string;
  name: string;
};

const Restaurants = () => {
  const { t } = useTranslation();
  const { setValue, setActiveData, setVariation, value } =
    useContext(ProductContext);
  const [select, setSelect] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [fetchData, setFetchData] = useState<any>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useEffect(() => {
    getCategory().then((res) => {
      setSelect(res.result.data);
    });
  }, []);

  useEffect(() => {
    if (isDeleted) {
      setIsDeleted(false);
    }

    if (activeCategory === "All") {
      loadData();
    } else {
      (async () => {
        let response = await getRestuarants("", activeCategory);
        setFetchData(response.result.data);
      })();
    }
  }, [activeCategory, isDeleted, !value]);

  const switchCategory = (value: string) => {
    console.log(value);
    setActiveCategory(value);
  };

  const loadData = async () => {
    let response = await getRestuarants();
    console.log(response.result.data);
    setFetchData(response.result.data);
  };

  const handleEdit = (item: any) => {
    setValue();
    setVariation("restaurant");
    setActiveData(item);
  };

  const openModal = (id: string): void => {
    setSelectedItem(id);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleDelete = async() => {
   await deleteRestuarant(selectedItem);
    setIsModalOpen(false);
    setSelectedItem("");
    setIsDeleted(true);
  };

  return (
    <RestaurantContext.Provider
      value={{ options: select, setOption: switchCategory }}
    >
      <div>
        <HelmetLib title="Admin-Restaurants" />
        <AdminHeader variant="Restaurants" text={t("adminSidebarRestaurants")} />
        <main
          className="grid grid-cols-1 content-start
       md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-5 overflow-auto h-[calc(100vh-210px)]"
        >
          {fetchData.map((item: dataProps, index: number) => {
            return (
              <RestaurantCard
                key={index}
                name={item.name}
                description={item.cuisine}
                image={item.img_url}
                onEdit={() => handleEdit(item)}
                onDelete={() => openModal(item.id)}
              />
            );
          })}
        </main>
        <DeleteModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onDelete={handleDelete}
        />
      </div>
    </RestaurantContext.Provider>
  );
};

export default Restaurants;
