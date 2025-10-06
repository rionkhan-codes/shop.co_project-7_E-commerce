import React from 'react'
import { MdOutlineMail } from "react-icons/md";

export const Update = () => {
  return (
    <section id='update' className='lg:mt-[80px] mt-[25px] '>
        <div className='container'>
            <div className='row'>
                <div className='main2 bg-black lg:py-[43px] py-[15px] rounded-[21px] lg:px-[65px] px-[15px] flex lg:justify-between  max-sm:flex-col'>
                    <h2 className='font-adamina font-bold text-white text-[11px]  max-sm:text-center lg:text-[40px] lg:w-[551px] w-fit '>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    <div>
                        {/* ---------- input --------- */}
                    <div className='lg:w-[349px] w-fit max-sm:mt-[15px]  h-[25px] lg:h-[48px] bg-white rounded-[63px] flex items-center gap-[13px] pl-[17px]'>
                        <MdOutlineMail className='lg:text-[25px] text-[15px] text-[#00000050]' />
                        <input className='w-full h-full outline-none border-none font-adamina font-normal text-[13px] lg:text-[16px] text-[#0000007f]' type="email" placeholder='Enter your email address' />
                    </div>
                    {/* --------- button -------- */}
                    <div>
                        <button className=' max-sm:h-[33px] max-sm:w-full lg:py-[13px] lg:px-[88px] bg-white font-adamina font-normal rounded-[63px] lg:text-[16px] text-[13px] text-black mt-[15px]'>Subscribe to Newsletter</button>
                    </div>
                    </div>
                  
                </div>
            </div>
        </div>
    </section>
  )
}
