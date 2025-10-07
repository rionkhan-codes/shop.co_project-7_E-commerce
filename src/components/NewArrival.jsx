import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SinglenewArrival } from '../common/SinglenewArrival'
import { Link } from 'react-router'
import product from '../assets/images/product.png'
export const NewArrival = () => {
  return (
    <>
    <section id='newArrival' className='pt-[15px] lg:pt-[73px] py-[15px] lg:py-[65px]'>
        <div className='container'>
            {/*  ----------- row 1 ---------- */}
            <div className='row'>
                <div className='mb-[15px] lg:mb-[55px]'>
                    <CommonHead head={'NEW ARRIVALS'}/>
                </div>
            </div>

            {/* ----- row 2 ----------- */}
            <div className='row'>
                <div>
                    <SinglenewArrival proimg={product} proname={'SKINNY FIT JEANS'} prodis={'$260'} proprice={'$240'}/>
                </div>
            </div>
            {/* --------- row 3 button -------- */}
            <div className='flex justify-center'>
                <Link className='main px-[80px] py-[10px] lg:py-[15px] max-sm:w-fit border border-[#00000030] rounded-[63px] font-adamina font-medium text-[13px] lg:text-[16px] text-black mt-[21px] lg:mt-[37px]'>View All</Link>
            </div>

            {/* --- border --------- */}
            <div className='border  w-full border-[#00000030] lg:mt-[64px] mt-[21px]'></div>
        </div>
    </section>
    </>
  )
}
