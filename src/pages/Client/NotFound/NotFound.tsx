import error from '../../../assets/img/404.svg'
import Navbar from '../../../components/Shared/Navbar/Navbar'

import Footer from '../Footer/Footer'

const NotFound = (): JSX.Element => {
  return (
<>
<div className='mx-5 my-5'>

<Navbar />
</div>
    <div className='h-[100vh] mx-5 my-5'>
      <img src={error} alt="404" className='block mx-auto' />
    </div>


    <Footer />
</>
   
  )
}

export default NotFound