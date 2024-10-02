import React from "react"




type Props = {
    id: string;
    name: string;
    desc: string;
    image: string;
    price: number;
    click: () => void;
}

const RestaurantListItem: React.FC<Props> = ({id, name, desc, image,price ,click}) => {
  return (
    <div className='flex items-center gap-2 sm:gap-0 p-4 border-t-2 border-neutral-300 w-full justify-between'>
        <div className="flex items-center gap-8 w-full ">
            <img  src={image} alt="" className="w-[80px] hidden sm:block" loading='lazy' />
            <div className="flex flex-col gap-1">
                <p className="text-neutral-800 font-semibold text-xl">{name}</p>
                <p className="text-neutral-500 text-sm sm:text-md font-medium">{desc}</p>


            </div>
            <div className="flex items-center gap-1 ml-auto">
                <p className="text-neutral-500 hidden sm:block font-medium text-sm">From</p>
                <div className="flex items-center gap-2 sm:gap-8">
                    <p className="font-semibold text-neutral-800 text-lg">&#x20BC;{price}</p>
                    <button onClick={click} className="py-2 px-4 rounded-full border-2 border-whiteLight3 text-neutral-300 text-2xl hover:border-green-500 hover:bg-green-500 hover:text-white transition-all duration-200">+</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default RestaurantListItem