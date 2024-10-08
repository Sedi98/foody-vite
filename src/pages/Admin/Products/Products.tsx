import React from "react";
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import AdminProductCard from "../../../components/Admin/Products/ProductCard/AdminProductCard";
import { getProducts, getRestuarants,deleteProduct } from "../../../services/Api/Api";
import { RestaurantContext } from "../../../Context/RestaurantContext";
import DeleteModal from "../../../components/Shared/Modal/Modal";
import { useTranslation } from "react-i18next";
import { ProductContext } from "../../../Context/ProductContext";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";

type dataProps = {
  name: string;
  description: string;
  img_url: string;
  price: number;
  rest_id: string;
};

type itemProps = {
  created: number;
  description: string;
  id: string;
  img_url: string;
  name: string;
  price: number;
  rest_id: string;
};

const Products = () => {
  const { t } = useTranslation();
  const { setValue,setActiveData, setVariation,value } = React.useContext(ProductContext);
  const [products, setProducts] = React.useState([]);
  const [restaurants, setRestaurants] = React.useState([]);
  

  const [activeCategory, setActiveCategory] = React.useState("All");
  const [select, setSelect] = React.useState<any[]>([]);

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const [selectedItem, setSelectedItem] = React.useState<string>('');
  const [isDeleted, setIsDeleted] = React.useState<boolean>(false);

  React.useEffect(() => {
    getRestuarants().then((res) => {
      setSelect(res.result.data);
    });
  }, []);

  React.useEffect(() => {
    if (isDeleted) {
      setIsDeleted(false);
    }
    if (activeCategory === "All") {
      (async () => {
        const response = await getProducts();
        console.log(response);

        setProducts(response.result.data);

        const rest = await getRestuarants();
        setRestaurants(rest.result.data);
      })();
    } else {
      (async () => {
        let response = await getProducts(activeCategory, "");

        setProducts(response.result.data);

        // const rest=await getRestuarants()
        // setRestaurants(rest.result.data)
      })();
    }
  }, [activeCategory, isDeleted,!value]);

  const RestNameFinder = (id: string) => {
    const rest: any = restaurants.find((item: any) => item.id === id);
    return rest ? rest.name : "";
  };

  const switchCategory = (value: string) => {
    console.log(value);
    setActiveCategory(value);
  };

  const handleEdit = (item: dataProps) => {
    console.log(item);
    setActiveData(item);
    setVariation('product');
    setValue();
  };

  const openModal = (id: string): void => {
    setSelectedItem(id);
    console.log(selectedItem);

    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleDelete = (): void => {
    deleteProduct(selectedItem);
    setIsModalOpen(false);
    setSelectedItem('');
    setIsDeleted(true);
  };

  return (
    <RestaurantContext.Provider
      value={{ options: select, setOption: switchCategory }}
    >
      <div className="h-full">
        <HelmetLib title="Admin-Products" />
        <AdminHeader variant="Products" text={t("adminSidebarProducts")} />
        <main className="grid grid-cols-1 content-start gap-4 md:grid-cols-3 lg:grid-cols-5 mt-5 overflow-auto  h-[calc(100vh-210px)]">
          {products?.map((item: itemProps, index: number) => {
            return (
              <AdminProductCard
                key={index}
                name={item.name}
                description={RestNameFinder(item.rest_id)}
                img={item.img_url}
                price={item.price}
                onEdit={() => {
                  handleEdit(item);
                }}
                onDelete={() => {
                  openModal(item.id);
                }}
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

export default Products;
