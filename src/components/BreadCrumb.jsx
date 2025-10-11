import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, Links } from 'react-router';

export const BreadCrumb = ({end}) => {
  return (
    <>
    <div className='container'>
        <div className='flex bg-gray-500 max-sm:gap-[10px] lg:gap-[20px] items-center w-full lg:px-[15px] px-[11px] py-[11px] lg:py-[15px] rounded-[15px] mt-[20px]'>
            <Link className='font-adamina font-medium text-[15px] lg:text-[17px] text-white' to={'/'}>Home</Link>
            <FaArrowRightLong  className='text-white text-[20px]'/>
            <Link className='font-adamina font-medium text-[15px] lg:text-[17px] text-white'>{end}</Link>
        </div>
    </div>
    </>
  )
}
