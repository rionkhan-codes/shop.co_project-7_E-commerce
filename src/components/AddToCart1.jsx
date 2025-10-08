import React from 'react'
import product from '../assets/images/Frame 33.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaTag } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";


export const AddToCart1 = () => {
  return (
    <>
    <section id='cart' className='pt-[25px] py-[130px]'>
        <div className='container'>
            <div className='row'>
                <h1 className='font-adamina font-bold text-[40px] text-black mb-[25px]'>Your cart</h1>
            </div>
            <div className='row flex justify-between'>
                {/* -------------- all product ---------- */}
                <div className='border border-[#00000021] w-[715px] rounded-[20px]'>
                    {/* ---------- product 1 ----------- */}
                    <div className='flex justify-between py-[20px] px-[25px]'>
                        <div className='flex gap-[17px]'>
                            <div className='w-[124px] h-[124px] overflow-hidden'><img src={product} alt="product" /></div>
                            <div>
                                <h2 className='font-adamina font-bold text-[20px] text-black mb-[4px]'>Gradient Graphic T-shirt</h2>
                                <p className='font-adamina font-normal text-[14px] text-black mb-[4px]'>Size: <span className='text-[#00000085]'> Large</span></p>
                                <p className='font-adamina font-normal text-[14px] text-black'>Color: <span className='text-[#00000085]'> White</span></p>
                                <h2 className='font-adamina font-bold text-[24px] text-black mt-[15px]'>$145</h2>
                            </div>
                        </div>
                        <div>
                            <button className='mb-[56px] ml-[80px]'><RiDeleteBin6Line className='text-[25px] text-red-500' /></button>
                            <div className='py-[13px] px-[20px] bg-[#F0F0F0] flex gap-[20px] rounded-[63px] items-center'>
                                <button className='font-adamina font-bold text-[25px] text-black'>-</button>
                                <h2 className='text-[19px]'>1</h2>
                                <button className='font-adamina font-bold text-[25px] text-black'>+</button>
                            </div>
                        </div>
                    </div>
                    {/* ------------ border ------------- */}
                    <div className='border border-[#00000015] w-full mt-[25px]'></div>
                    {/* ---------- product 2 ----------- */}
                    <div className='flex justify-between py-[20px] px-[25px]'>
                        <div className='flex gap-[17px]'>
                            <div className='w-[124px] h-[124px] overflow-hidden'><img src={product} alt="product" /></div>
                            <div>
                                <h2 className='font-adamina font-bold text-[20px] text-black mb-[4px]'>Gradient Graphic T-shirt</h2>
                                <p className='font-adamina font-normal text-[14px] text-black mb-[4px]'>Size: <span className='text-[#00000085]'> Large</span></p>
                                <p className='font-adamina font-normal text-[14px] text-black'>Color: <span className='text-[#00000085]'> White</span></p>
                                <h2 className='font-adamina font-bold text-[24px] text-black mt-[15px]'>$145</h2>
                            </div>
                        </div>
                        <div>
                            <button className='mb-[56px] ml-[80px]'><RiDeleteBin6Line className='text-[25px] text-red-500' /></button>
                            <div className='py-[13px] px-[20px] bg-[#F0F0F0] flex gap-[20px] rounded-[63px] items-center'>
                                <button className='font-adamina font-bold text-[25px] text-black'>-</button>
                                <h2 className='text-[19px]'>1</h2>
                                <button className='font-adamina font-bold text-[25px] text-black'>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------ cart ----------- */}
                <div className='border border-[#00000021] w-[505px] rounded-[20px]'>
                    <div className='py-[20px] px-[25px]'>
                        <h2 className='font-bold font-adamina text-[20px] text-black mb-[24px]'>Order Summary</h2>
                        <div className='flex justify-between mt-[20px]'>
                            <p className='font-normal font-adamina text-[20px] text-[#00000080]'>Subtotal</p>
                            <p className='font-adamina font-bold text-[20px] text-black'>$565</p>
                        </div>
                        <div className='flex justify-between mt-[20px]'>
                            <p className='font-normal font-adamina text-[20px] text-[#00000080]'>Discount (-20%)</p>
                            <p className='font-adamina font-bold text-[20px] text-black'>-$113</p>
                        </div>
                        <div className='flex justify-between mt-[20px]'>
                            <p className='font-normal font-adamina text-[20px] text-[#00000080]'>Delivery Fee</p>
                            <p className='font-adamina font-bold text-[20px] text-black'>$15</p>
                        </div>
                        <div className='border border-[#00000016] w-full my-[20px]'></div>
                        <div className='flex justify-between'>
                            <p className='font-normal font-adamina text-[20px] text-[#00000080]'>Total</p>
                            <p className='font-adamina font-bold text-[20px] text-black'>$467</p>
                        </div>
                        {/* ------------- promo code ----------- */}
                        <div className='flex justify-between gap-[13px] mt-[25px] mb-[25px]'>
                            {/* --------- input ------------ */}
                            <div className='w-full h-[48px] bg-[#F0F0F0] rounded-[62px] flex items-center gap-[13px] pl-[17px]'>
                                <FaTag />
                                <input className='w-full h-full border-none outline-none font-adamina font-normal text-[16px]' type="text"  placeholder='Add promo code' />
                            </div>
                            {/* ----------- apply button ------------ */}
                            <div>
                                <button className='w-[119px] h-[48px] bg-black rounded-[62px] flex justify-center items-center text-white text-[16px] font-adamina font-medium'>Apply</button>
                            </div>
                        </div>
                        {/* ----------- checkout ------------- */}
                        <div>
                            <button className='w-full h-[48px] flex justify-center items-center font-medium font-adamina text-[17px] text-white rounded-[62px] bg-black gap-[13px]'>Go to Checkout<FaArrowRight className='text-[23px] text-white' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
