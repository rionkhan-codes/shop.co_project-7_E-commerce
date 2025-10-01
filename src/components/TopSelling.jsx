import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SingleTopsell } from '../common/SingleTopsell'
import { Link } from 'react-router'

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
            <div className='row mt-[55px]'>
              <div>
                <SingleTopsell proimg={'/src/assets/images/product.png'} prodis={'$232'} proname={'LOOSE FIT BERMUDA SHORTS'} proprice={'$80'} />
              </div>
            </div>
            {/* ---------  row 3 button ---------- */}
            <div className='flex justify-center'>
              <Link className='main px-[80px] py-[15px] border border-[#00000030] rounded-[63px] font-adamina font-medium text-[16px] text-black mt-[37px] mb-[80px]'>View All</Link>
            </div>
        </div>
    </section>
  )
}
