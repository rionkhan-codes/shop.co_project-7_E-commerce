import React from 'react'

export const Cart = () => {
  return (
    <>
    <div className='w-full h-screen bg-[#00000025] absolute top-0 right-0'>
        <div className='w-[400px] h-screen bg-white ml-auto p-[13px]'>
            <h2 className='font-adamina font-medium text-[23px]'>Cart</h2>
            <div className='mt-[13px] flex justify-between  items-center'>
                <div className='flex items-center gap-[13px]'>
                    <div className='w-[60px] h-[60px] bg-black rounded-[15px]'>
                        <img src="erg" alt="product" />
                    </div>
                    <h2 className='font-adamina font-medium text-[21px] text-black'>Product Name</h2>
                </div>
                <h2 className='font-adamina font-medium text-[21px] text-black'>50$</h2>
            </div>
        </div>
    </div>
    </>
  )
}
