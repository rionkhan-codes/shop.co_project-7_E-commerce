import React from 'react'

export const CategoryRes = () => {
  return (
    <>
    <section className='lg:pt-[50px] pt-[30px] max-sm:block lg:hidden'>
        <div className='container'>
            <div className='lg:w-[200px] w-[137px]'>
                {/* ------------ col ------------ */}
            <div className='col'>
                <h2 className='font-adamina font-semibold lg:text-[18px] text-[16px] text-black mb-[17px] lg:mb-[25px]'>Categories</h2>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Men’s fashion</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Women’s fashion</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Kids & Toys</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Accessories</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Cosmetics</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normallg:text-[14px] text-[13px] text-black'>Shoes</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Sports</p>
                </div>
            </div>
            {/* ----------- border -------------- */}
            <div className='border w-full border-[#0000002a] my-[23px] lg:my-[30px]'></div>
            {/* --------------- col ----------- */}
            <div className='col'>
                <h2 className='font-medium font-adamina text-[16px] text-black mb-[13px] lg:mb-[15px]'>Price range</h2>
                <input className='w-full' type="range" />
                <div></div>
            </div>
            {/* ----------- border -------------- */}
            <div className='border w-full border-[#0000002a] my-[23px] lg:my-[30px]'></div>
            {/* ------- col ------------- */}
            <div className='col'>
                <h2 className='font-adamina font-semibold text-[16px] lg:text-[18px] text-black mb-[17px] lg:mb-[25px]'>Sort order</h2>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Most Popular</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Best Rating</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Newest</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Price Low - Hight</p>
                </div>
                <div className='mb-[17px] flex gap-[13px] items-center'>
                    <input className='text-[20px] text-[#94A3B8]' type="checkbox"  />
                    <p className='font-adamina font-normal lg:text-[14px] text-[13px] text-black'>Price Hight - Low</p>
                </div>
            </div>
            </div>
        </div>
    </section>
    </>
  )
}
