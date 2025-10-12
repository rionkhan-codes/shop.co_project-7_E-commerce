import React from 'react'
import { FaStar } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const SinglenewArrival = ({proimg,proname,proprice,prodis,prorate,showDetails,clickCart}) => {
  return (
    <>
    <div className='container'>
        <div className='relative w-[295px]'>
           {/* -------- cart button ----------- */}
            <button onClick={clickCart} className='w-[37px] h-[37px] bg-[#FFFFFF] rounded-full absolute top-[13px] right-[13px] flex justify-center items-center cursor-pointer group'>
                <HiOutlineShoppingBag className='text-[17px] text-primary' />
                {/* -------- cart hover ------------- */}
                <span
                    className="absolute right-12 top-1/2 -translate-y-1/2 
                     bg-gray-600 text-white text-xs px-2 py-1 rounded-md shadow-lg 
                     opacity-0 group-hover:opacity-100 transition w-[100px] text-[15px] duration-[.4s]">
                     Add to Cart
                </span>
            </button>
        <div onClick={showDetails} className='lg:w-[295px] w-fit '>
            <div className='lg:w-[295px] w-fit h-[298px] bg-[#F0EEED] rounded-[20px] overflow-hidden'>
                <img src={proimg} alt="product image" />
            </div>
            <h2 className='font-adamina font-bold lg:text-[20px] text-[15px] text-black mt-[16px] mb-[8px]'>{proname}</h2>
            <div>
                <h2 className='font-adamina font-medium text-[15px] lg:text-[17px] text-black flex gap-[5px] items-center'><FaStar className='text-[#FBBF24] text-[19px]' /> {prorate}/5</h2>
            </div>
            <div className='flex justify-between items-center mt-[13px]'>
                <p className='font-bold font-adamina text-[14px] lg:text-[21px] text-[#000]'>{proprice}$</p>
                <p className='font-bold font-adamina text-[14px] lg:text-[21px] text-[#0000006f] line-through'>{prodis}%</p>
            </div>
        </div>
        </div>
    </div>
        
    </>
  )
}
