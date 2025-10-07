import React from 'react'
import product from '../assets/images/image 1.png'
import product2 from '../assets/images/image 2.png'
import product3 from '../assets/images/image 5.png'
import product4 from '../assets/images/image 6.png'
export const ProductDetail1res = () => {
  return (
    <>
    <div className='container lg:hidden pt-[20px]'>
        <div className='row lg:hidden'>
            <div className='lg:hidden w-full  m-auto'>
                <img src={product} alt="product" />
            </div>
            <div className='lg:hidden flex justify-between gap-[13px] mt-[13px]'>
                <div className='lg:hidden '><img src={product2} alt="product" /></div>
                <div className='lg:hidden '><img src={product3} alt="product" /></div>
                <div className='lg:hidden '><img src={product4} alt="product" /></div>
            </div>
        </div>
    </div>
    </>
  )
}
