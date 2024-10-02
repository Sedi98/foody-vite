import React from 'react'
import Basket from '../../../components/Shared/Basket/Basket'

const BasketMenu: React.FC = () => {
  return (
    <div className='w-full bg-[#f3f4f6] rounded-md p-4'>
      <Basket type='profile' />
    </div>
  )
}

export default BasketMenu