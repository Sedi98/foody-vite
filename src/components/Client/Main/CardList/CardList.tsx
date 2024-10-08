import { useTranslation } from 'react-i18next'
import crdImg1 from '../../../../assets/img/card_one.svg'
import crdImg2 from '../../../../assets/img/card_two.svg'
import crdImg3 from '../../../../assets/img/card_three.svg'

import HomeCard from '../HomeCard/HomeCard'

const CardList = () => {

  const { t } = useTranslation()
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-16 '>
        <HomeCard url={crdImg1} title={t("homeFeaturesCardOneTitle")} text={t("homeFeaturesCardOneText")} />
        <HomeCard url={crdImg2} title={t("homeFeaturesCardTwoTitle")} text={t("homeFeaturesCardTwoText")} />
        <HomeCard url={crdImg3} title={t("homeFeaturesCardThreeTitle")} text={t("homeFeaturesCardThreeText")} />
    </div>
  )
}

export default CardList