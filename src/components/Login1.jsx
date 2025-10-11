import React from 'react'
import { Link } from 'react-router'

export const Login1 = () => {
  return (
    <>
    <div className='container  py-[120px]'>
            <div className='row flex justify-center '>
                <div className='w-[440px] bg-[#F0F0F0] rounded-[33px] py-[25px] px-[25px]'>
                    <h1 className='text-center font-adamina font-semibold text-[36px] text-black mb-[60px]'>Login</h1>
                    {/* ----------------- Email input ----------- */}
                    <div className='mt-[25px]'>
                        <h2 className='font-adamina font-medium text-[17px] text-black ml-[7px] mb-[7px]'>Email</h2>
                        <input className='w-full h-[40px] bg-white outline-none border-[#E5E7EB] rounded-[13px] pl-[11px]' type="text"/>
                    </div>
                    {/* ----------- password input ---------- ------------- */}
                    <div className='mt-[25px]'>
                        <h2 className='font-adamina font-medium text-[17px] text-black ml-[7px] mb-[7px]'>Password</h2>
                        <input className='w-full h-[40px] bg-white outline-none border-[#E5E7EB] rounded-[13px] pl-[11px]' type="text"/>
                    </div>
                    {/* ----------- button ---------- */}
                    <div className='mt-[25px]'>
                        <button className='w-full h-[40px] bg-black font-adamina font-medium text-[17px] text-white rounded-[17px]'>Continue</button>
                        <span className='flex justify-center font-adamina font-bold text-[21px] mt-[25px] text-black'>OR</span>
                        <h2 className='mt-[25px] font-medium text-[17px] text-black font-adamina flex justify-center'>New user? <Link to={'/register'} className='text-[#0EA5E9]'> Create an account</Link></h2>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
