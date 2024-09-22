import React,{useContext} from 'react'
import { ProductContext } from '../../../Context/ProductContext'





type Props = {
    text: string
}
const AdminHeader:React.FC<Props> = ({text}) => {
  const { setValue,setType,setOperation } = useContext(ProductContext)



  const handleClick = (type: string, operation: string) => {
    setValue()
    setType(type)
    setOperation(operation)
  }
  
    
  return (
    <div className=' bg-[#27283c] rounded-2xl flex flex-col sm:flex-row justify-between items-center p-8 m-0 w-full'>
        <p className='text-white text-xl not-italic font-medium leading-5'>{text}</p>

        {text=== 'Category'&& <button className='bg-[#c035a2] py-2 px-8 text-white font-bold text-sm rounded-[14px] uppercase' onClick={() => handleClick("Category","Add")}>+ Add Category</button>}
        {text=== 'Restaurants'&& <button className='bg-[#c035a2] py-2 px-8 text-white font-bold text-sm rounded-[14px] uppercase' onClick={() => handleClick("Restaurant","Add")}>+ Add Restaurant</button>}
        {text=== 'Offers'&& <button className='bg-[#c035a2] py-2 px-8 text-white font-bold text-sm rounded-[14px] uppercase' onClick={() => handleClick("Offer","Add")}>+ Add Offer</button>}
    </div>
  )
}

export default AdminHeader