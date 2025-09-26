import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SinglenewArrival } from '../common/SinglenewArrival'
import { Link } from 'react-router'

export const NewArrival = () => {
  return (
    <>
    <section id='newArrival' className='pt-[73px] py-[65px]'>
        <div className='container'>
            {/*  ----------- row 1 ---------- */}
            <div className='row'>
                <div className='mb-[55px]'>
                    <CommonHead head={'NEW ARRIVALS'}/>
                </div>
            </div>

            {/* ----- row 2 ----------- */}
            <div className='row'>
                <div>
                    <SinglenewArrival/>
                </div>
            </div>
            {/* --------- row 3 button -------- */}
            <div className='flex justify-center'>
                <Link className='main px-[80px] py-[15px] border border-[#00000030] rounded-[63px] font-adamina font-medium text-[16px] text-black'>View All</Link>
            </div>

            {/* --- border --------- */}
            <div className='border w-full border-[#00000030] mt-[64px]'></div>
        </div>
    </section>
    </>
  )
}
