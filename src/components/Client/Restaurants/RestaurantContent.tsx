
import RestaurantCard from './RestaurantCard'

const RestaurantContent = () => {
  return (
    <div className='w-full flex  gap-x-10 justify-center sm:justify-start max-h-[740px] mb-8 sm:mb-0 overflow-y-auto flex-wrap  gap-y-8'>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>

    </div>
  )
}

export default RestaurantContent