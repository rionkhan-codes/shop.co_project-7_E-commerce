import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SingleTopsell } from '../common/SingleTopsell'
import { Link } from 'react-router'
import product from '../assets/images/product.png'
export const TopSelling = () => {
  return (
    <section id='topsell'>
        <div className='container'>
          {/* ------------ row 1 -------- */}
            <div className='row'>
                <div>
                    <CommonHead head={'TOP SELLING'}/>
                </div>
            </div>
            {/* ----------- row 2 -------- */}
            <div className='row lg:mt-[55px] mt-[15px]'>
              <div>
                <SingleTopsell proimg={'/src/assets/images/product.png'} prodis={'$232'} proname={'LOOSE FIT BERMUDA SHORTS'} proprice={'$80'} />
              </div>
            </div>
            {/* ---------  row 3 button ---------- */}
            <div className='flex justify-center'>
              <Link className='main px-[80px] py-[10px] lg:py-[15px] max-sm:w-fit border border-[#00000030] rounded-[63px] font-adamina font-medium text-[13px] lg:text-[16px] text-black mt-[15px] lg:mt-[37px]'>View All</Link>
            </div>
        </div>
    </section>
  )
}
