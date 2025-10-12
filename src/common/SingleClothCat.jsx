import React from 'react'

export const SingleClothCat = ({proimg,proname,proprice,prodis,prorate}) => {
  return (
    <>
    <div className='container'>
            <div className='lg:w-[295px] w-fit'>
                <div className='lg:w-[295px] w-fit h-[298px]  bg-[#F0EEED] rounded-[20px]'>
                    <img src={proimg} alt="product image" />
                </div>
                <h2 className='font-adamina font-bold text-[15px] lg:text-[20px] text-black mt-[16px] mb-[8px]'>{proname}</h2>
                {/* <div>
                    <h2 className='font-adamina font-medium text-[15px] lg:text-[17px] text-black flex gap-[5px] items-center'><FaStar className='text-[#FBBF24] text-[19px]' /> </h2>
                </div> */}
                <div className='flex justify-between items-center mt-[13px]'>
                    <p className='font-bold font-adamina text-[14px] lg:text-[24px] text-[#000]'>{proprice}$</p>
                    {/* <p className='font-bold font-adamina text-[14px] lg:text-[24px] text-[#0000006f] line-through'>{prodis}%</p> */}
                </div>
            </div>
        </div>
    </>
  )
}
