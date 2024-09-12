

import Navbar from '../../../components/Shared/Navbar/Navbar'
import FlexImgContainer from '../../../components/Client/Main/FlexImgContainer/FlexImgContainer'
import FlexTextContainer from '../../../components/Client/Main/FlexTextContainer/FlexTextContainer'


import Footer from '../Footer/Footer'
// 
import howimg from '../../../assets/img/how-it-works.svg'

const HowIt = () => {
  return (
    <>
    <div className='mx-5 my-5'>

    <Navbar />
    </div>

    <div className='flex flex-col px-10 py-10 items-center my-5 mx-5 text-center '>
        <FlexTextContainer title='How it works' text='Delivery may be extended during sale periods. Please refer to the checkout page for an updated estimate for your location. Kindly note that once you have placed an order, it is no longer possible to modify your order. Taxes and duties are included in all product prices.It is possible to place an order with shipment to a different address than your home or billing address when paying with a credit card. Please note that Klarna payments require that your order is shipped to your registered home address.' />
        <FlexImgContainer url={howimg} alt="how-it-works" />


    </div>
    


    <Footer />
    </>
  )
}

export default HowIt