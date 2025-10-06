import React from 'react'
import brand1 from '../assets/images/Group (1).png'
import brand2 from '../assets/images/Group.png'
import brand3 from '../assets/images/gucci-logo-1 1.png'
import brand4 from '../assets/images/prada-logo-1 1.png'
import brand5 from '../assets/images/zara-logo-1 1.png'
export const Brands = () => {
  return (
    <>
    <section id='brands' className='lg:py-[25px] py-[7px] bg-black'>
        <div>
            <div className='row'>
                <div >
                    <marquee behavior="" direction="right">
                        <div className='flex gap-[37px]  max-sm:h-[13px] lg:gap-[107px] '>
                            <img src={brand1} alt="brands" />
                            <img src={brand2} alt="brands" />
                            <img src={brand3} alt="brands" />
                            <img src={brand4} alt="brands" />
                            <img src={brand5} alt="brands" />
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
