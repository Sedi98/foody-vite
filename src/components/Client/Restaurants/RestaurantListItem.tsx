

const RestaurantListItem = () => {
  return (
    <div className='flex items-center gap-2 sm:gap-0 p-4 border-t-2 border-neutral-300 w-full justify-between'>
        <div className="flex items-center gap-8 w-full ">
            <img  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="w-[80px] hidden sm:block" loading='lazy' />
            <div className="flex flex-col gap-1">
                <p className="text-neutral-800 font-semibold text-xl">Product Name</p>
                <p className="text-neutral-500 text-sm sm:text-md font-medium">Tasty</p>


            </div>
            <div className="flex items-center gap-1 ml-auto">
                <p className="text-neutral-500 hidden sm:block font-medium text-sm">From</p>
                <div className="flex items-center gap-2 sm:gap-8">
                    <p className="font-semibold text-neutral-800 text-lg">$ 11.00</p>
                    <button className="py-2 px-4 rounded-full border-2 border-whiteLight3 text-neutral-300 text-2xl hover:border-green-500 hover:bg-green-500 hover:text-white transition-all duration-200">+</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default RestaurantListItem