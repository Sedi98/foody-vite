
import crdImg1 from '../../../../assets/img/card_one.svg'
import crdImg2 from '../../../../assets/img/card_two.svg'
import crdImg3 from '../../../../assets/img/card_three.svg'

import HomeCard from '../HomeCard/HomeCard'

const CardList = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3   gap-16 '>
        <HomeCard url={crdImg1} title="Discount Voucher" text="Save big on your next order with our exclusive voucher. Whether dining solo or with friends, enjoy your favorite meals for less. Grab yours now and start saving!" />
        <HomeCard url={crdImg2} title="Fresh,healthy Food" text="Discover a world of delicious meals made from the freshest ingredients. At Foody, we prioritize your well-being with wholesome, nutritious options that taste as good as they are for you." />
        <HomeCard url={crdImg3} title="Fast Home Delivery" text="Craving something tasty? We’ve got you covered with quick, reliable delivery straight to your door. Enjoy your favorite meals without the wait!" />
    </div>
  )
}

export default CardList