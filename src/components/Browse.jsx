import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { Link } from 'react-router'
import browse1 from '../assets/images/image 11.png'
import browse2 from '../assets/images/image 13.png'
import browse3 from '../assets/images/image 12.png'
import browse4 from '../assets/images/image 14.png'
export const Browse = () => {
  return (
    <>
    <section id='browse' className='lg:pt-[80px] pt-[21px]'>
        <div className='container'>
            {/* ---------- row 1 ----------- */}
            <div className='lg:py-[70px] py-[15px] px-[43px] lg:px-[65px] bg-[#F0F0F0] rounded-[40px]'>
                <div className=' mb-[15px] lg:mb-[65px]'>
                    <CommonHead head={'BROWSE BY DRESS STYLE'}/>
                </div>
            {/* ---- row 2 ----------- */}
            <div className='row flex flex-wrap justify-center gap-[11px] lg:gap-[33px]'>
                {/* ---------- product 1 ---------- */}
                <div>
                <Link to={'#'} className='w-fit h-fit lg:w-[407px] lg:h-[289px] bg-white rounded-[20px] relative inline-block'>
                    <h2 className='font-adamina font-bold lg:text-[37px] text-[15px] text-black absolute lg:pt-[25px] pt-[11px] lg:pl-[37px] pl-[15px]'>Casual</h2>
                    <img className='rounded-[20px]' src={browse1} alt="browse style" />
                </Link>
                </div>
                {/* ---------- product 2 ---------- */}
                <div>
                <Link to={'#'} className='w-fit h-fit lg:w-[407px] lg:h-[289px] bg-white rounded-[20px] relative inline-block'>
                    <h2 className='font-adamina font-bold lg:text-[37px] text-[15px] text-black absolute lg:pt-[25px] pt-[11px] lg:pl-[37px] pl-[15px]'>Formal</h2>
                    <img className='rounded-[20px]' src={browse2} alt="browse style" />
                </Link>
                </div>
                {/* ---------- product 3 ---------- */}
                <div>
                <Link to={'#'} className='w-fit h-fit lg:w-[407px] lg:h-[289px] bg-white rounded-[20px] relative inline-block'>
                    <h2 className='font-adamina font-bold lg:text-[37px] text-[15px] text-black absolute lg:pt-[25px] pt-[11px] lg:pl-[37px] pl-[15px]'>Party</h2>
                    <img className='rounded-[20px]' src={browse3} alt="browse style" />
                </Link>
                </div>
                {/* ---------- product 4 ---------- */}
                <div>
                <Link to={'#'} className='w-fit h-fit lg:w-[407px] lg:h-[289px] bg-white rounded-[20px] relative inline-block'>
                    <h2 className='font-adamina font-bold lg:text-[37px] text-[15px] text-black absolute lg:pt-[25px] pt-[11px] lg:pl-[37px] pl-[15px]'>Gym</h2>
                    <img className='rounded-[20px]' src={browse4} alt="browse style" />
                </Link>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
