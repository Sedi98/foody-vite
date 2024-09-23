import { useState, useEffect } from "react";
import AdminHeader from "../../../components/Admin/Shared/AdminHeader";
import RestaurantCard from "../../../components/Admin/Restaurants/RestaurantCard/RestaurantCard";
import { getRestuarants } from "../../../services/Api/Api";
import { getCategory } from "../../../services/Api/Api";
import { RestaurantContext } from "../../../Context/RestaurantContext";

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

  const [select, setSelect] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  
  useEffect(() => {
    
    getCategory().then((res) => {
      setSelect(res.result.data);
    })
  }, []);


  useEffect(() => {
    if (activeCategory === "All") {
      loadData();
    } else {

      (async () => {
        let response = await getRestuarants('', activeCategory);
        setFetchData(response.result.data);
      })()
      
      
    }
    
  
    
  }, [activeCategory])
  


  const switchCategory = (value: string) => {
    console.log(value);
    setActiveCategory(value);
  };

  const loadData = async () => {
    let response = await getRestuarants();
    console.log(response.result.data);
    setFetchData(response.result.data);
  };

  const [fetchData, setFetchData] = useState<any>([]);

  return (
    <RestaurantContext.Provider value={{ options: select, setOption: switchCategory }}>
    <div>
      <AdminHeader text="Restaurants" />
      <main className="grid grid-cols-1 content-start
       md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mt-5 overflow-auto h-[calc(100vh-210px)]">
        {fetchData.map((item: dataProps, index: number) => {
          return (
            <RestaurantCard
              key={index}
              name={item.name}
              description={item.cuisine}
              image={item.img_url}
              onEdit={() => {}}
              onDelete={() => {}}
            />
          );
        })}
      </main>
    </div>
    </RestaurantContext.Provider>
  );
};

export default Restaurants;
