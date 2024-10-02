
import Navbar from '../../../components/Shared/Navbar/Navbar'
import Accordion from '../../../components/Client/Faq/Accordion'
import Title from '../../../components/Shared/Title/Title'
import HelmetLib from '../../../components/Shared/HelmetLib/HelmetLib'

import Footer from '../Footer/Footer'

const Faqs = () => {
  return (
    <>
    <HelmetLib title="F.A.Q." />
    <div className='my-5 mx-5'>
    <Navbar />
    </div>
    <div className='h-[100vh]'>
        <Title text="F.A.Q." variation="container" />

        <Accordion />
    </div>
      
      <Footer />
    </>
  )
}

export default Faqs