import React from 'react'
import AdminHeader from '../../../components/Admin/Shared/AdminHeader'
import AdminProductCard from '../../../components/Admin/Products/ProductCard/AdminProductCard'
import { getProducts,getRestuarants } from '../../../services/Api/Api'
import { RestaurantContext } from "../../../Context/RestaurantContext";


type dataProps= {
  name: string
  description: string
  img_url: string
  price: number
  rest_id: string}

const Products = () => {
  const [products, setProducts] = React.useState([])
  const [restaurants, setRestaurants] = React.useState([])

  const [activeCategory, setActiveCategory] = React.useState("All");
  const [select, setSelect] = React.useState<any[]>([]);



  React.useEffect(() => {
    
    getRestuarants().then((res) => {
      console.log(res.result.data);
      
      setSelect(res.result.data);
    })
  }, []);

  React.useEffect(() => {

    if (activeCategory === "All") {
      (async()=>{
        const response = await getProducts()
        console.log(response);
        
        setProducts(response.result.data)
  
        const rest=await getRestuarants()
        setRestaurants(rest.result.data)
      })()
    } else {
      (async()=>{
        let response = await getProducts('', activeCategory);
        console.log(response);
        
        // setProducts(response.result.data)
  
        // const rest=await getRestuarants()
        // setRestaurants(rest.result.data)
      })()
    }
   
  }, [activeCategory])


  const RestNameFinder = (id:string) => {
    const rest:any = restaurants.find((item:any) => item.id === id)
    return rest? rest.name : ''
  }


  const switchCategory = (value: string) => {
    console.log(value);
    setActiveCategory(value);
  };



  return (
    <RestaurantContext.Provider value={{ options: select, setOption: switchCategory }}>
    <div className='h-full'>
      <AdminHeader text='Products' />
      <main className='grid grid-cols-1 content-start gap-4 md:grid-cols-3 lg:grid-cols-5 mt-5 overflow-auto  h-[calc(100vh-210px)]'>
        

        { 
        products?.map((item:dataProps,index:number)=>{
          return (
            <AdminProductCard key={index} name={item.name} description={RestNameFinder(item.rest_id)} img={item.img_url} price={item.price} onEdit={() => {}} onDelete={() => {}} />
          )
        })

            

        }

      </main>
    </div>
    </RestaurantContext.Provider>
  )
}

export default Products