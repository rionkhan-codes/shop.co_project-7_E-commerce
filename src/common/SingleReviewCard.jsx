import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { MdDone } from 'react-icons/md'
import { BsThreeDots } from "react-icons/bs";

export const SingleReviewCard = ({revname,revdis,revdate}) => {
  return (
    <div className='container'>
        <div className='border border-[#00000030] w-[610px] py-[28px] px-[33px] rounded-[20px]'>
            <div className='mb-[15px] flex justify-between items-center'>
                <ul className='flex items-center gap-[7px]'>
                    <li><FaStar className='text-[#FFC633] text-[23px]' /></li>
                    <li><FaStar className='text-[#FFC633] text-[23px]' /></li>
                    <li><FaStar className='text-[#FFC633] text-[23px]' /></li>
                    <li><FaStar className='text-[#FFC633] text-[23px]' /></li>
                </ul>
                <button className='cursor-pointer'><BsThreeDots className='text-[25px] text-gray-500' /></button>
            </div>
            <div className='flex gap-[7px] items-center'>
                <h2 className='font-bold font-adamina text-[20px] text-black'>{revname}</h2>
                <div className='w-[25px] h-[25px] bg-[#01AB31] rounded-full flex justify-center items-center'><MdDone className='text-white font-bold' /></div>
            </div>
                <p className='font-adamina text-[16px] text-gray-500 font-normal mt-[13px] mb-[25px]'>{revdis}</p>
                <p className='font-adamina text-[16px] text-gray-500 font-bold'>{revdate}</p>
        </div>
    </div>
  )
}
