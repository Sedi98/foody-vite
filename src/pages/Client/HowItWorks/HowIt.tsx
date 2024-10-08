
import HelmetLib from '../../../components/Shared/HelmetLib/HelmetLib'
import Navbar from '../../../components/Shared/Navbar/Navbar'
import FlexImgContainer from '../../../components/Client/Main/FlexImgContainer/FlexImgContainer'
import FlexTextContainer from '../../../components/Client/Main/FlexTextContainer/FlexTextContainer'

import { useTranslation } from 'react-i18next'


import Footer from '../Footer/Footer'
// 
import howimg from '../../../assets/img/how-it-works.svg'

const HowIt = () => {
  const {t} = useTranslation()
  return (
    <>

    <HelmetLib title={t('howItTitle')} />
    <div className='mx-5 my-5'>

    <Navbar />
    </div>

    <div style={{textAlign:'center'}} className='flex flex-col px-10 py-10 items-center my-5 mx-5 text-center '>
        <FlexTextContainer title={t('howItTitle')} text={t('howItText')} />
        <FlexImgContainer url={howimg} alt="how-it-works" />


    </div>
    


    <Footer />
    </>
  )
}

export default HowIt