
import Navbar from '../../../components/Shared/Navbar/Navbar'
import RestaurantSidebar from '../../../components/Client/Restaurants/RestaurantSidebar'
import RestaurantContent from '../../../components/Client/Restaurants/RestaurantContent'
import { UserRstContextProvider } from '../../../Context/UserRstContext'
import HelmetLib from '../../../components/Shared/HelmetLib/HelmetLib'

const Restaurants = () => {
  return (

    <>

    <HelmetLib title="Restaurants" />

    <div className='mx-0 my-0  lg:mx-5 lg:my-5'><Navbar /></div>
    
    <div className='mx-0 px-2 sm:px-0 sm:m-5 flex flex-col sm:flex-row justify-center gap-10'>

    <UserRstContextProvider>

    <RestaurantSidebar />
    <RestaurantContent />

    </UserRstContextProvider>


    </div>
    </>
    
  )
}

export default Restaurants