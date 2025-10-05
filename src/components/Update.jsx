import React from 'react'
import { MdOutlineMail } from "react-icons/md";

export const Update = () => {
  return (
    <section id='update' className='mt-[80px] '>
        <div className='container'>
            <div className='row'>
                <div className='main2 bg-black py-[43px] rounded-[21px] px-[65px] flex justify-between'>
                    <h2 className='font-adamina font-bold text-white text-[40px] w-[551px]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    <div>
                        {/* ---------- input --------- */}
                    <div className='w-[349px] h-[48px] bg-white rounded-[63px] flex items-center gap-[13px] pl-[17px]'>
                        <MdOutlineMail className='text-[25px] text-[#00000050]' />
                        <input className='w-full h-full outline-none border-none font-adamina font-normal text-[16px] text-[#0000007f]' type="email" placeholder='Enter your email address' />
                    </div>
                    {/* --------- button -------- */}
                    <div>
                        <button className='py-[13px] px-[88px] bg-white font-adamina font-normal rounded-[63px] text-[16px] text-black mt-[15px]'>Subscribe to Newsletter</button>
                    </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
  )
}
