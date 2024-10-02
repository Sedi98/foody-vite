import React from 'react'
import pizza from '../../../assets/img/pizza.svg'
import basketMinus from '../../../assets/icons/profile/basket_minus.svg'
import basketPlus from '../../../assets/icons/profile/basket_plus.svg'
import basketTrash from '../../../assets/icons/profile/basket_trash.svg'


const BasketItem = () => {
  return (
    <div className='flex relative sm:px-5 justify-between items-center border-b-2 border-neutral-300 py-2'>
      <img className='w-[50px]' src={pizza} alt="product" loading='lazy' />
      <div className="flex flex-col w-full pl-7">
        <p className='font-medium text-neutral-600 text-xl'>Product name</p>
        <p className='font-medium text-lg'>$10</p>
      </div>

      <div className="flex flex-col bg-white sm:bg-white py-1 px-3 rounded-full gap-1 items-center">
        <img src={basketPlus} className='w-[20px] min-w-[20px]' alt="plus" onClick={()=> console.log('plus')} />
        <p>1</p>
        <img src={basketMinus} className='w-[20px] min-w-[20px]' alt="minus" onClick={()=> console.log('minus')}  />
      </div>
    </div>
  )
}

export default BasketItem