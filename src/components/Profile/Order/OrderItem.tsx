import React from 'react'


type Props={
  itemCount:number
  itemName:string
  item_price:number
}
const OrderItem:React.FC<Props> = ({itemCount,itemName,item_price}) => {
  return (
    <div className="flex items-center justify-between">
    <p className="text-neutral-500"> <span className="count text-black font-bold">{itemCount}</span> X {itemName}</p>
    <p className="price text-neutral-500">{item_price} &#8380;</p>
  </div>
  )
}

export default OrderItem