import React from 'react'

export const CommonHead = ({head}) => {
  return (
    <>
    <div className='container'>
        <div>
            <h2 className='font-adamina text-[21px] lg:text-[48px] text-black font-bold text-center'>{head}</h2>
        </div>
    </div>
    </>
  )
}
