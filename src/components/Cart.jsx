import React from 'react'
import { Link } from 'react-router'
import { RxCross1 } from "react-icons/rx";

export const Cart = ({closeCart,cross}) => {
    
  return (
    <>
    <div onClick={closeCart} className='w-full h-screen  fixed right-0 top-0 z-1 '></div>
    {/* ---------- cart ------------ */}
    <div className='w-full h-screen bg-[#00000025] absolute top-0 right-0 z-11'>
        <div className='w-[400px] h-screen bg-white ml-auto p-[13px]'>
            <div className='flex justify-between mt-[13px]'>
                <h2 className='font-adamina font-medium text-[23px]'>Cart</h2>
                <button className='w-[40px] h-[40px] bg-[#91ADC8] flex justify-center items-center text-[20px] rounded-[20px] border border-[#715A5A] text-[#37353E] font-bold'>{cross}</button>
            </div>
            {/* ------------ all product ---------- */}
            <div className='h-[700px] overflow-y-scroll mt-[15px]'>
                {/* ------------ single product ------------ */}
                <div className='mt-[13px] flex justify-between  items-center mb-[25px]'>
                    <div className='flex items-center gap-[13px]'>
                        <div className='w-[60px] h-[60px] bg-black rounded-[15px]'>
                            <img src="erg" alt="product" />
                        </div>
                        <h2 className='font-adamina font-medium text-[21px] text-black'>Product Name</h2>
                    </div>
                    <h2 className='font-adamina font-medium text-[21px] text-black'>50$</h2>
                </div>
            </div>
            {/* ---------- total ---------- */}
            <div className='flex justify-between mt-[25px]'>
                <h2 className='font-adamina font-medium text-[19px] text-black'>Total:</h2>
                <h2 className='font-adamina font-medium text-[19px] text-black'>100$</h2>
            </div>
            {/* ------------ button ----------- */}
            <div>
                <Link to={'/addCart'} className='w-full h-[40px] bg-gray-500 text-white flex justify-center items-center font-adamina font-medium text-[21px] rounded-[13px] mt-[25px]'>Checkout</Link>
            </div>
        </div>
    </div>
    </>
  )
}
