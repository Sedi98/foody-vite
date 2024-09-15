
import Flag from '../Flag/Flag'
import { useNavigate } from 'react-router-dom'
import { ROUTER } from '../../../ROUTER'

const LoginNav = () => {
  const navigate = useNavigate()
  return (
    <div className='flex justify-between m-0 sm:m-8 items-center bg-red-500 py-11 px-5 sm:p-11'>
        <h1 onClick={() => navigate(ROUTER.Home)} className='text-4xl font-extrabold text-white flex items-center'>Foody.</h1>
        <Flag />
    </div>
  )
}

export default LoginNav