
import crdImg1 from '../../../../assets/img/card_one.svg'
import crdImg2 from '../../../../assets/img/card_two.svg'
import crdImg3 from '../../../../assets/img/card_three.svg'

import HomeCard from '../HomeCard/HomeCard'

const CardList = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-16 items-center'>
        <HomeCard url={crdImg1} title="Discount Boucher" text="Lorem ipsum is placeholder commonly used in the graphic" />
        <HomeCard url={crdImg2} title="Fresh healthy Food" text="Lorem ipsum is placeholder commonly used in the graphic" />
        <HomeCard url={crdImg3} title="Fast Home Delivery" text="Lorem ipsum is placeholder commonly used in the graphic" />
    </div>
  )
}

export default CardList