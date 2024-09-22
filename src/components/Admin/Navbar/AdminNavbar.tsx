import React, { useContext } from 'react'
import Flag from '../../Shared/Flag/Flag'
import Button from '../../Shared/Button/Button'
import { ProductContext } from '../../../Context/ProductContext'


const AdminNavbar: React.FC = () => {
  const { setValue,setType,setOperation } = useContext(ProductContext)


  const handleClick = () => {
    setValue()
    setType("Product")
    setOperation("Add")
    
  }
  return (
    <nav className='flex justify-between m-0 py-5 mb-4 items-center rounded-md lg:py-5 px-5 sm:m-0 sm:mb-4 bg-[#27283c] sm:p-5'>
        <h1 className='text-white text-3xl font-extrabold flex items-center'>Foody <span className='text-[#EAAB00]'>.</span></h1>
        <Button text="+ Add Product" variation="adminAddProduct" click={handleClick} />
        <Flag />
    </nav>
  )
}

export default AdminNavbar