import React from 'react'

export const SingleTopsell = ({proimg,proname,proprice,prodis,prorate}) => {
  return (
    <>
    <div className='container'>
        <div className='lg:w-[295px] w-fit'>
            <div className='lg:w-[295px] w-fit lg:h-[190px] bg-[#F0EEED] rounded-[20px]'>
                <img src={proimg} alt="product image" />
            </div>
            <h2 className='font-adamina font-bold text-[13px] lg:text-[20px] text-black mt-[16px] mb-[8px]'>{proname}</h2>
            <div>
                {prorate}
            </div>
            <div className='flex justify-between items-center'>
                <p className='font-bold font-adamina text-[11px] lg:text-[24px] text-[#000]'>{proprice}</p>
                <p className='font-bold font-adamina text-[11px] lg:text-[24px] text-[#0000006f] line-through'>{prodis}</p>
            </div>
        </div>
    </div>
    </>
  )
}
