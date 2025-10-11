import React from 'react'
import product from '../assets/images/Frame 33.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaTag } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { BreadCrumb } from './BreadCrumb';


export const AddToCart1 = () => {
  return (
    <>
    <section id='cart' className='pt-[25px] pb-[30px]'>
        {/* ---------- container ----------- */}
        <div className='container'>
            <div className='row'>
                <h1 className='font-adamina font-bold lg:text-[40px] text-[25px] text-black mb-[15px] lg:mb-[25px]'>Your cart</h1>
            </div>
            <div className='row flex justify-between max-sm:flex-wrap'>
                {/* -------------- all product ---------- */}
                <div className='border border-[#00000021] w-full lg:w-[715px] rounded-[20px] max-sm:mb-[20px]'>
                    {/* ---------- product 1 ----------- */}
                    <div className='flex justify-between lg:py-[20px] lg:px-[25px] py-[15px] px-[15px]'>
                        <div className='flex gap-[17px]'>
                            <div className='lg:w-[124px] lg:h-[124px] w-[90px] h-[90px] overflow-hidden'><img src={product} alt="product" /></div>
                            <div>
                                <h2 className='font-adamina font-bold lg:text-[20px] text-[14px] text-black mb-[4px]'>Gradient Graphic T-shirt</h2>
                                <p className='font-adamina font-normal text-[13px] lg:text-[14px] text-black mb-[4px]'>Size: <span className='text-[#00000085]'> Large</span></p>
                                <p className='font-adamina font-normal text-[13px] lg:text-[14px] text-black'>Color: <span className='text-[#00000085]'> White</span></p>
                                <h2 className='font-adamina font-bold text-[17px] lg:text-[24px] text-black mt-[15px]'>$145</h2>
                            </div>
                        </div>
                        <div>
                            <button className='mb-[56px] ml-[80px]'><RiDeleteBin6Line className='text-[25px] text-red-500' /></button>
                            <div className='lg:py-[13px] lg:px-[20px] py-[5px] px-[13px] max-sm:w-[90px] max-sm:ml-[20px] bg-[#F0F0F0] flex gap-[15px] lg:gap-[20px] rounded-[63px] items-center'>
                                <button className='font-adamina font-bold lg:text-[25px] text-[19px] text-black'>-</button>
                                <h2 className='lg:text-[19px] text-[15px]'>1</h2>
                                <button className='font-adamina font-bold lg:text-[25px] text-[19px] text-black'>+</button>
                            </div>
                        </div>
                    </div>
                    {/* ------------ border ------------- */}
                    <div className='border border-[#00000015] w-full mt-[25px]'></div>
                    {/* ---------- product 2 ----------- */}
                    <div className='flex justify-between lg:py-[20px] lg:px-[25px] py-[15px] px-[15px]'>
                        <div className='flex gap-[17px]'>
                            <div className='lg:w-[124px] lg:h-[124px] w-[90px] h-[90px] overflow-hidden'><img src={product} alt="product" /></div>
                            <div>
                                <h2 className='font-adamina font-bold lg:text-[20px] text-[14px] text-black mb-[4px]'>Gradient Graphic T-shirt</h2>
                                <p className='font-adamina font-normal text-[13px] lg:text-[14px] text-black mb-[4px]'>Size: <span className='text-[#00000085]'> Large</span></p>
                                <p className='font-adamina font-normal text-[13px] lg:text-[14px] text-black'>Color: <span className='text-[#00000085]'> White</span></p>
                                <h2 className='font-adamina font-bold text-[17px] lg:text-[24px] text-black mt-[15px]'>$145</h2>
                            </div>
                        </div>
                        <div>
                            <button className='mb-[56px] ml-[80px]'><RiDeleteBin6Line className='text-[25px] text-red-500' /></button>
                            <div className='lg:py-[13px] lg:px-[20px] py-[5px] px-[13px] max-sm:w-[90px] max-sm:ml-[20px] bg-[#F0F0F0] flex gap-[15px] lg:gap-[20px] rounded-[63px] items-center'>
                                <button className='font-adamina font-bold lg:text-[25px] text-[19px] text-black'>-</button>
                                <h2 className='lg:text-[19px] text-[15px]'>1</h2>
                                <button className='font-adamina font-bold lg:text-[25px] text-[19px] text-black'>+</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ------------ cart ----------- */}
                <div className='border border-[#00000021] w-[505px] rounded-[20px]'>
                    <div className='lg:py-[20px] lg:px-[25px] py-[15px] px-[15px]'>
                        <h2 className='font-bold font-adamina lg:text-[20px] text-[15px] flex justify-center text-black mb-[24px]'>Order Summary</h2>
                        <div className='flex justify-between mt-[15px] lg:mt-[20px]'>
                            <p className='font-normal font-adamina lg:text-[20px] text-[15px] text-[#00000080]'>Subtotal</p>
                            <p className='font-adamina font-bold lg:text-[20px] text-[15px] text-black'>$565</p>
                        </div>
                        <div className='flex justify-between mt-[15px] lg:mt-[20px]'>
                            <p className='font-normal font-adamina lg:text-[20px] text-[15px] text-[#00000080]'>Discount (-20%)</p>
                            <p className='font-adamina font-bold lg:text-[20px] text-[15px] text-red-500'>-$113</p>
                        </div>
                        <div className='flex justify-between mt-[15px] lg:mt-[20px]'>
                            <p className='font-normal font-adamina lg:text-[20px] text-[15px] text-[#00000080]'>Delivery Fee</p>
                            <p className='font-adamina font-bold lg:text-[20px] text-[15px] text-black'>$15</p>
                        </div>
                        <div className='border border-[#00000016] w-full my-[15px] lg:my-[20px]'></div>
                        <div className='flex justify-between'>
                            <p className='font-normal font-adamina lg:text-[20px] text-[15px] text-[#00000080]'>Total</p>
                            <p className='font-adamina font-bold lg:text-[20px] text-[15px] text-black'>$467</p>
                        </div>
                        {/* ------------- promo code ----------- */}
                        <div className='flex justify-between gap-[13px] mt-[25px] lg:mb-[25px] mb-[13px] max-sm:flex-wrap max-sm:justify-center'>
                            {/* --------- input ------------ */}
                            <div className='w-full lg:h-[48px] h-[35px] bg-[#F0F0F0] rounded-[7px] lg:rounded-[62px] flex items-center gap-[13px] pl-[17px]'>
                                <FaTag className='max-sm:text-[14px]' />
                                <input className='w-full lg:h-full h-[35px] border-none outline-none font-adamina font-normal lg:text-[16px] text-[14px]' type="text"  placeholder='Add promo code' />
                            </div>
                            {/* ----------- apply button ------------ */}
                            <div>
                                <button className='lg:w-[119px] lg:h-[48px] w-[90px] h-[37px] bg-black rounded-[13px] lg:rounded-[62px] flex justify-center items-center text-white text-[15px] lg:text-[16px] font-adamina font-medium'>Apply</button>
                            </div>
                        </div>
                        {/* ----------- checkout ------------- */}
                        <div>
                            <button className='w-full lg:h-[48px] h-[37px] flex justify-center items-center font-medium font-adamina lg:text-[17px] text-[15px] text-white lg:rounded-[62px] rounded-[13px] bg-black gap-[13px]'>Confirm order<FaArrowRight className='lg:text-[23px] text-[19px] text-white' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
