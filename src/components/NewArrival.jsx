import React from 'react'
import { CommonHead } from '../common/CommonHead'
import { SinglenewArrival } from '../common/SinglenewArrival'

export const NewArrival = () => {
  return (
    <>
    <section id='newArrival' className='pt-[73px]'>
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
        </div>
    </section>
    </>
  )
}
