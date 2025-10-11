import React from 'react'
import { FaStar } from "react-icons/fa";

export const SinglenewArrival = ({proimg,proname,proprice,prodis,prorate}) => {
  return (
    <>
    <div className='container'>
        <div className='lg:w-[295px] w-fit'>
            <div className='lg:w-[295px] w-fit h-[298px] bg-[#F0EEED] rounded-[20px] overflow-hidden'>
                <img src={proimg} alt="product image" />
            </div>
            <h2 className='font-adamina font-bold lg:text-[20px] text-[13px] text-black mt-[16px] mb-[8px]'>{proname}</h2>
            <div>
                <h2 className='font-adamina font-medium text-[17px] text-black flex gap-[5px] items-center'><FaStar className='text-[#FBBF24] text-[19px]' /> {prorate}/5</h2>
            </div>
            <div className='flex justify-between items-center mt-[13px]'>
                <p className='font-bold font-adamina text-[11px] lg:text-[21px] text-[#000]'>{proprice}$</p>
                <p className='font-bold font-adamina text-[11px] lg:text-[21px] text-[#0000006f] line-through'>{prodis}%</p>
            </div>
        </div>
    </div>
    </>
  )
}
