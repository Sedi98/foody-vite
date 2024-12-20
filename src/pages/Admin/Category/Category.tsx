import { useEffect, useState, useContext } from "react";
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import CategoryItem from "../../../components/Admin/Category/CategoryItem/CategoryItem";
import DeleteModal from "../../../components/Shared/Modal/Modal";
import { getCategory, deleteCategory } from "../../../services/Api/Api";
import { ProductContext } from "../../../Context/ProductContext";
import HelmetLib from "../../../components/Shared/HelmetLib/HelmetLib";
import { useTranslation } from "react-i18next";

const Category = () => {
  const { t } = useTranslation();
  const { setValue, setVariation, setActiveData, value } =
    useContext(ProductContext);
  const [categories, setCategories] = useState<any[]>([]);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  useEffect(() => {
    if (isDeleted) {
      setIsDeleted(false);
    }
    getCategoryData();
  }, [isDeleted, !value]);

  const getCategoryData = async () => {
    try {
      const response = await getCategory();
      console.log(response.result.data);
      setCategories(response.result.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  const handleEdit = (item: any) => {
    setActiveData(item);
    setValue();
    setVariation("category");
    
  };

  const openModal = (id: string): void => {
    setSelectedItem(id);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  const handleDelete = async() => {
    await deleteCategory(selectedItem);
    setIsModalOpen(false);
    setSelectedItem("");
    setIsDeleted(true);
  };

  return (
    <div>
      <HelmetLib title="Admin-Category" />
      <AdminHeader variant="Category" text={t("adminSidebarCategory")} />

      <div className="h-[calc(100vh-210px)] overflow-auto mt-5">
  <div className="w-full overflow-x-auto">
    <table className="min-w-full bg-white rounded-lg border border-gray-200 shadow-md">
      <thead className="h-16 text-sm bg-gray-100">
        <tr className="text-left">
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Image</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Slug</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((data) => (
          <CategoryItem
            key={data.id}
            CategoryId={data.id}
            img={data.img_url}
            name={data.name}
            slug={data.slug}
            editFunc={() => handleEdit(data)}
            deleteFunc={() => openModal(data.id)}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>


      <DeleteModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Category;
