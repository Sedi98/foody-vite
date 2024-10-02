import React from 'react'

import basketMinus from '../../../assets/icons/profile/basket_minus.svg'
import basketPlus from '../../../assets/icons/profile/basket_plus.svg'
import basketTrash from '../../../assets/icons/profile/basket_trash.svg'



type Props = {
data: any
minusFunc: ()=> void
plusFunc: ()=> void
removeFunc: ()=> void
}

// amount
// count
// created
// description
// id
// img_url
// name
// price
// rest_id

const BasketItem:React.FC<Props> = ({data,minusFunc,plusFunc,removeFunc}) => {
  return (
    <div className='flex relative sm:px-10 justify-between items-center border-b-2 border-neutral-300 py-2'>
      <img className='w-[50px]' src={data.img_url} alt="product" loading='lazy' />
      <div className="flex flex-col w-full pl-5">
        <p className='font-medium text-neutral-600 text-xl'>{data.name}</p>
        <p className='font-medium text-lg'>{data.price} &#x20BC;</p>
      </div>

      <div className="flex flex-col bg-white sm:bg-white py-1 px-2 rounded-full gap-1 items-center">
        <img src={basketPlus} className='w-[20px] min-w-[20px]' alt="plus" onClick={plusFunc} />
        <p>{data.count}</p>
        <img src={basketMinus} className='w-[20px] min-w-[20px]' alt="minus" onClick={minusFunc}  />
      </div>


      <span className="absolute top-0 right-0 sm:right-0 sm:top-2 w-8" onClick={removeFunc}>
        <img src={basketTrash} alt="icon" />
      </span>
    </div>
  )
}

export default BasketItem