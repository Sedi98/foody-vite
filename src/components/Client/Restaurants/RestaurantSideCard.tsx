import React from 'react'
import pizza from '../../../assets/img/pizza.svg'

const RestaurantSideCard = () => {
  return (
    <div className='flex items-center  gap-4 cursor-pointer p-1 h-10  hover:bg-mainRedLight transition-all'>
        <img className='w-[40px] h-10 object-cover rounded-full' src={pizza} alt="" />
        <p className='font-semibold text-lg '>All</p>
    </div>
  )
}

export default RestaurantSideCard