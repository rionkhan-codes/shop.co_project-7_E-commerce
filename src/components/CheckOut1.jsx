import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";
import { TbRouteAltLeft } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { AddToCart } from '../pages/AddToCart';
import { AddToCart1 } from './AddToCart1';

export const CheckOut1 = () => {
  return (
    <>
    <section id='Check' className='pt-[20px]'>
        <div className='container'>
            <div className='row'>
            <div>
                <div className='flex justify-between max-sm:flex-wrap max-sm:gap-[13px]'>
                    {/* --------------- contact box -------------- */}
                <div className='lg:py-[25px] lg:px-[25px] py-[15px] px-[15px] lg:w-[638px] w-full lg:h-[400px] border border-[#0000002d] rounded-[17px]'>
                    <div className='flex lg:gap-[13px] gap-[7px] items-center justify-center'>
                        <FaRegCircleUser className='lg:text-[20px] text-[17px] text-[#00000095]' />
                        <h2 className='font-adamina font-medium lg:text-[16px] text-[13px] text-black'>CONTACT INFO</h2>
                    </div>
                    {/* ----------- border -------------- */}
                    <div className='border w-full border-[#0000002d] lg:my-[25px] my-[13px]'></div>
                    <div className='flex items-center justify-between'>
                        {/* ----------- first name input ----------- */}
                        <div>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>First name</h2>
                            <input className='lg:w-[283px] w-[150px] h-[30px] lg:h-[43px] border border-[#0000001c] lg:rounded-[13px] rounded-[7px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                        </div>
                        {/* ------------ Last name input ------------- */}
                        <div>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>Last name</h2>
                            <input className='lg:w-[283px] lg:h-[43px] w-[150px] h-[30px] border border-[#0000001c] lg:rounded-[13px] rounded-[7px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                        </div>
                    </div>
                        {/* ----------- phone input ----------- */}
                        <div className='lg:mt-[25px] mt-[13px]'>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>Your phone number</h2>
                            <input className='w-full lg:h-[43px] h-[30px] border border-[#0000001c] rounded-[7px] lg:rounded-[13px] outline-none lg:pl-[10px] pl-[5px]' type="number" />
                        </div>
                        {/* ------------ email input ------------- */}
                        <div className='lg:mt-[25px] mt-[13px]'>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>Email address</h2>
                            <input className='w-full lg:h-[43px] h-[30px] border border-[#0000001c] rounded-[7px] lg:rounded-[13px] outline-none lg:pl-[10px] pl-[5px]' type="email" />
                        </div>
                </div>

                {/* --------------- payment box -------------- */}
                <div className='lg:py-[25px] lg:px-[25px] py-[15px] px-[15px] lg:w-[638px] w-full lg:h-[400px] border border-[#0000002d] rounded-[17px]'>
                    <div className='flex lg:gap-[13px] gap-[7px] items-center justify-center'>
                        <MdPayment className='lg:text-[20px] text-[17px] text-[#00000095]' />
                        <h2 className='font-adamina font-medium lg:text-[16px] text-[13px] text-black'>PAYMENT</h2>
                    </div>
                    {/* ----------- border -------------- */}
                    <div className='border w-full border-[#0000002d] my-[13px] lg:my-[25px]'></div>
                    {/* --------- row 1 ------------ */}
                        {/* ----------- Card number input ----------- */}
                    <div>
                        <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>Card number</h2>
                        <input className='w-full lg:h-[43px] h-[30px] border border-[#0000001c] rounded-[7px] lg:rounded-[13px] outline-none lg:pl-[10px] pl-[5px]' type="number" />
                    </div>
                        {/* -------------- row 2 ------------ */}
                        {/* ------------ Name on the card input ------------- */}
                    <div className='lg:mt-[25px] mt-[13px]'>
                        <h2 className='font-medium font-adamina text-[14px] lg:text-[16px] text-black mb-[8px] ml-[7px]'>Name on the card</h2>
                        <input className='w-full h-[30px] lg:h-[43px] border border-[#0000001c] rounded-[7px] lg:rounded-[13px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                    </div>
                    {/* ----- row 4 --------- */}
                    <div className='flex items-center justify-between lg:mt-[25px] mt-[13px]'>
                        {/* ----------- date input ----------- */}
                        <div>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>Expired date mm/yy</h2>
                            <input className='lg:w-[283px] w-[150px] lg:h-[43px] h-[30px] border border-[#0000001c] rounded-[7px] lg:rounded-[13px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                        </div>
                        {/* ------------ CVC input ------------- */}
                        <div>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>CVC</h2>
                            <input className='lg:w-[283px] w-[150px] lg:h-[43px] h-[30px] border border-[#0000001c] rounded-[7px] lg:rounded-[13px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                        </div>
                    </div>
                </div>
                </div>
                 {/* -------------- shipping box -------------- */}
                <div className='lg:py-[25px] lg:px-[25px] py-[15px] px-[15px] lg:w-[638px] w-full border border-[#0000002d] rounded-[17px] lg:mt-[20px] mt-[13px] m-auto'>
                    <div className='flex lg:gap-[13px] gap-[7px] items-center justify-center'>
                        <TbRouteAltLeft className='lg:text-[20px] text-[17px] text-[#00000095]' />
                        <h2 className='font-adamina font-medium text-[14px] lg:text-[16px] text-black'>SHIPPING ADDRESS</h2>
                    </div>
                    {/* ----------- border -------------- */}
                    <div className='border w-full border-[#0000002d] my-[13px] lg:my-[25px]'></div>
                    {/* --------- row 2 ------------- */}
                    {/* ----------- address input --------- */}
                    <div className='lg:mt-[25px] mt-[13px]'>
                        <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>Address</h2>
                        <input className='w-full h-[30px] lg:h-[43px] border border-[#0000001c] rounded-[7px] lg:rounded-[13px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                    </div>
                    {/* ----------- row 3 ----------- */}
                    <div className='flex items-center justify-between lg:mt-[25px] mt-[13px]'>
                        {/* ----------- city input ----------- */}
                        <div>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>City</h2>
                            <input className='lg:w-[283px] w-[150px] h-[30px] lg:h-[43px] border border-[#0000001c] lg:rounded-[13px] rounded-[7px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                        </div>
                        {/* ------------ country input ------------- */}
                        <div>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>Country</h2>
                            <input className='lg:w-[283px] w-[150px] h-[30px] lg:h-[43px] border border-[#0000001c] lg:rounded-[13px] rounded-[7px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                        </div>
                    </div>
                    {/* -------------- row 4 -------------- */}
                    <div className='flex items-center justify-between lg:mt-[25px] mt-[13px]'>
                        {/* ----------- State/Province input ----------- */}
                        <div>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>State/Province</h2>
                            <input className='lg:w-[283px] w-[150px] h-[30px] lg:h-[43px] border border-[#0000001c] lg:rounded-[13px] rounded-[7px] outline-none lg:pl-[10px] pl-[5px]' type="text" />
                        </div>
                        {/* ------------ Postal code input ------------- */}
                        <div>
                            <h2 className='font-medium font-adamina lg:text-[16px] text-[14px] text-black mb-[8px] ml-[7px]'>Postal code</h2>
                            <input className='lg:w-[283px] w-[150px] h-[30px] lg:h-[43px] border border-[#0000001c] lg:rounded-[13px] rounded-[7px] outline-none lg:pl-[10px] pl-[5px]' type="number" />
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </div>
    </section>
    </>
  )
}
