import { useEffect, useState } from "react";
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import CategoryItem from "../../../components/Admin/Category/CategoryItem/CategoryItem";
import { getCategory } from "../../../services/Api/Api";

const Category = () => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    getCategoryData();
  }, []);

  const getCategoryData = async () => {
    try {
      const response = await getCategory();
      console.log(response.result.data);
      setCategories(response.result.data);
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <div>
      <AdminHeader text="Category" />

      <div className="h-[calc(100vh-210px)] overflow-auto mt-5">
        <table className="w-[100%] bg-white rounded-lg">
          <thead className="h-16 text-sm px-8">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Slug</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((data) => {
              return (
                <CategoryItem
                  key={data.id}
                  CategoryId={data.id}
                  img={data.img_url}
                  name={data.name}
                  slug={data.slug}
                  editFunc={() => {}}
                  deleteFunc={() => {}}
                />
              );
            })}

            {/* {data.map((data) => {
              return <CategoryItem />;
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Category;
