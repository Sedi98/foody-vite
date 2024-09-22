
import AdminHeader from '../../../components/Admin/Shared/AdminHeader'
import AdminProductCard from '../../../components/Admin/Products/ProductCard/AdminProductCard'

const Products = () => {

  let products = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

  return (
    <div className='h-full'>
      <AdminHeader text='Products' />
      <main className='grid grid-cols-2 gap-4 lg:grid-cols-5 mt-5 overflow-auto  h-[calc(100vh-210px)]'>
        

        { 

            products.map(()=>{
              return <AdminProductCard />
            })

        }

      </main>
    </div>
  )
}

export default Products