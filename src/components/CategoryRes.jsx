import React, { useState } from 'react'

export const CategoryRes = () => {

    const [nav,setnav] = useState(false)

  return (
    <>
    <h2 className='ml-[20px] mt-[20px] font-adamina font-medium text-[15px] text-black lg:hidden'>Filter</h2>
    <button onClick={()=>setnav(!nav)} className='w-[25px] h-[20px] text-black relative ml-[20px] mt-[7px] lg:hidden'>
                  <span className={`w-full h-[3px] bg-black absolute right-0  rounded-full ${nav? 'rotate-45 top-[15px] ' : 'rotate-0 top-0'} duration-[.4s]`}></span>
                  <span className={`w-full h-[3px] bg-black absolute top-[50%]  right-0 rounded-full ${nav? 'hidden' : 'block'}`}></span>
                  <span className={`w-full h-[3px] bg-black absolute  right-0 rounded-full ${nav? 'rotate-[-45deg] top-[15px]' : 'rotate-0 top-full'} duration-[.4s]`}></span>
        </button>


        <div className={`w-[85%] py-[13px] px-[13px] bg-gray-500 absolute top-[150px]  rounded-[13px] ${nav? 'left-[50px]' : 'left-[-100%]'} duration-[.4s]`}>
            <div>
                {/* ---------- row ---------- */}
            <div className='flex gap-[25px]'>
                {/* ------------- col 1 ---------- */}
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
            <div className='w-[1px] h-[150px] bg-[#00000031] mt-[50px]'></div>
            {/* ------------ col 2 ---------- */}
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
            {/* --------------- col ----------- */}
            <div className='col'>
                <h2 className='font-medium font-adamina text-[16px] text-black mb-[13px] lg:mb-[15px]'>Price range</h2>
                <input className='w-[60%]' type="range" />
                <div></div>
            </div>

            </div>
        </div>
    </>
  )
}
