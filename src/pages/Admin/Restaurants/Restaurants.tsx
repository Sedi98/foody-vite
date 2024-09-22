
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import RestaurantCard from "../../../components/Admin/Restaurants/RestaurantCard/RestaurantCard";

const Restaurants = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22,23,24,25,26,27,28,29,30];
  return (
    <div>
      <AdminHeader text="Restaurants" />
      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 mt-5 overflow-auto h-[calc(100vh-210px)]">
        {data.map(() => {
          return <RestaurantCard />;
        })}
      </main>
    </div>
  );
};

export default Restaurants;
