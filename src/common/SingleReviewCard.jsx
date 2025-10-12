import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { MdDone } from 'react-icons/md'
import { BsThreeDots } from "react-icons/bs";

export const SingleReviewCard = ({revname,revdis,revdate}) => {
  return (
    <div className='container'>
        <div className='border border-[#00000030] lg:w-[610px] w-full lg:py-[28px] lg:px-[33px] py-[15px] px-[15px] rounded-[20px]'>
            <div className='lg:mb-[15px] mb-[7px] flex justify-between items-center'>
                <ul className='flex items-center gap-[7px]'>
                    <li><FaStar className='text-[#FFC633] text-[15px] lg:text-[23px]' /></li>
                    <li><FaStar className='text-[#FFC633] text-[15px] lg:text-[23px]' /></li>
                    <li><FaStar className='text-[#FFC633] text-[15px] lg:text-[23px]' /></li>
                    <li><FaStar className='text-[#FFC633] text-[15px] lg:text-[23px]' /></li>
                </ul>
                <button className='cursor-pointer'><BsThreeDots className='text-[25px] text-gray-500' /></button>
            </div>
            <div className='flex gap-[7px] items-center'>
                <h2 className='font-bold font-adamina lg:text-[20px] text-[16px] text-black'>{revname}</h2>
                <div className='lg:w-[25px] lg:h-[25px] w-[18px] h-[18px] bg-[#01AB31] rounded-full flex justify-center items-center'><MdDone className='text-white font-bold' /></div>
            </div>
                <p className='font-adamina lg:text-[16px] text-[14px] w-full text-gray-500 font-normal lg:mt-[13px] lg:mb-[25px] mt-[9px] mb-[13px]'>{revdis}</p>
                <p className='font-adamina lg:text-[16px] text-[13px] text-gray-500 font-bold'>{revdate}</p>
        </div>
    </div>
  )
}
