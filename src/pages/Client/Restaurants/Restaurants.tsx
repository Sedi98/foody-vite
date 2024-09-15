
import Navbar from '../../../components/Shared/Navbar/Navbar'
import RestaurantSidebar from '../../../components/Client/Restaurants/RestaurantSidebar'
import RestaurantContent from '../../../components/Client/Restaurants/RestaurantContent'

const Restaurants = () => {
  return (

    <>

    <div className='mx-5 my-5'><Navbar /></div>
    
    <div className='mx-0 px-1 sm:px-0 sm:m-5 flex flex-col sm:flex-row justify-center gap-10'>

    <RestaurantSidebar />

    <RestaurantContent />


    </div>
    </>
    
  )
}

export default Restaurants