import React from 'react'
import { FaStar } from 'react-icons/fa'

export const SingleTopSellRes = ({proimg,proname,proprice,prodis,prorate,showDetails}) => {
  return (
    <>
        <div className='container lg:hidden'>
            <div className='w-[100px]'>
                <div className='w-fit h-[100px]  bg-[#F0EEED] rounded-[20px]'>
                    <img src={proimg} alt="product image" />
                </div>
                <h2 className='font-adamina font-bold text-[15px] lg:text-[20px] text-black mt-[16px] mb-[8px] '>{proname}</h2>
                <div>
                    <h2 className='font-adamina font-medium text-[15px] lg:text-[17px] text-black flex gap-[5px] items-center'><FaStar className='text-[#FBBF24] text-[19px]' /> {prorate}/5</h2>
                </div>
                <div className=' mt-[13px]'>
                    <p className='font-bold font-adamina text-[14px] lg:text-[24px] text-[#000]'>{proprice}$</p>
                </div>
                    <p className='font-bold font-adamina text-[14px] lg:text-[24px] text-[#0000006f] line-through'>{prodis}%</p>
            </div>
        </div>
    </>
  )
}
