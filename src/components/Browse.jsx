import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { Link } from 'react-router'

export const Browse = () => {
  return (
    <>
    <section id='browse'>
        <div className='container'>
            {/* ---------- row 1 ----------- */}
            <div className='py-[70px] px-[65px] bg-[#F0F0F0] rounded-[40px]'>
                <div className='mb-[65px]'>
                    <CommonHead head={'BROWSE BY DRESS STYLE'}/>
                </div>
            {/* ---- row 2 ----------- */}
            <div className='row flex flex-wrap justify-center gap-[33px]'>
                {/* ---------- product 1 ---------- */}
                <div>
                <Link to={'#'} className='w-[407px] h-[289px] bg-white rounded-[20px] relative inline-block'>
                    <h2 className='font-adamina font-bold text-[37px] text-black absolute pt-[25px] pl-[37px]'>Casual</h2>
                    <img className='rounded-[20px]' src={'/src/assets/images/image 11.png'} alt="browse style" />
                </Link>
                </div>
                {/* ---------- product 2 ---------- */}
                <div>
                <Link to={'#'} className='w-[685px] h-[289px] bg-white rounded-[20px] relative inline-block'>
                    <h2 className='font-adamina font-bold text-[37px] text-black absolute pt-[25px] pl-[37px]'>Formal</h2>
                    <img className='rounded-[20px]' src={'/src/assets/images/image 13.png'} alt="browse style" />
                </Link>
                </div>
                {/* ---------- product 3 ---------- */}
                <div>
                <Link to={'#'} className='w-[685px] h-[289px] bg-white rounded-[20px] relative inline-block'>
                    <h2 className='font-adamina font-bold text-[37px] text-black absolute pt-[25px] pl-[37px]'>Party</h2>
                    <img className='rounded-[20px]' src={'/src/assets/images/image 12.png'} alt="browse style" />
                </Link>
                </div>
                {/* ---------- product 4 ---------- */}
                <div>
                <Link to={'#'} className='w-[407px] h-[289px] bg-white rounded-[20px] relative inline-block'>
                    <h2 className='font-adamina font-bold text-[37px] text-black absolute pt-[25px] pl-[37px]'>Gym</h2>
                    <img className='rounded-[20px]' src={'/src/assets/images/image 14.png'} alt="browse style" />
                </Link>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
