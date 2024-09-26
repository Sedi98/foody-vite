import React, { useContext } from 'react'
import Flag from '../../Shared/Flag/Flag'
import Button from '../../Shared/Button/Button'
import CircleAvatar from '../../Shared/CircleAvatar/CircleAvatar'
import { ProductContext } from '../../../Context/ProductContext'
import { ROUTER } from '../../../ROUTER'
import { useNavigate } from 'react-router-dom'


const AdminNavbar: React.FC = () => {
  const navigate = useNavigate()
  const { setValue,setVariation,setActiveData} = useContext(ProductContext)


  const handleClick = (variation: string) => {
    setVariation(variation)
    setActiveData(null)
    setValue()
  }
  return (
    <nav className='flex gap-4 justify-between m-0 py-5 mb-4 items-center rounded-md lg:py-5 px-5 sm:m-0 sm:mb-4 bg-[#27283c] sm:p-5'>
        <h1 onClick={() => navigate(ROUTER.Home)} className='text-white text-3xl font-extrabold flex items-center'>Foody <span className='text-[#EAAB00]'>.</span></h1>
        <Button text="+ Add Product" variation="adminAddProduct" click={() => handleClick('product')} />
        <Flag />
        <CircleAvatar firstName='Sadi' lastName='Mammadov' localStorageKey="color" />
    </nav>
  )
}

export default AdminNavbar