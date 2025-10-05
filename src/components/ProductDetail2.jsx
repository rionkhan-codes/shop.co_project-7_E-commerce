import React from 'react'

export const ProductDetail2 = () => {
  return (
    <>
    <div className='container pt-[80px]'>
        <div className='row'>
            {/* --------- row 1 ----------- */}
            <div className='flex justify-around'>
                <button className='font-normal font-adamina text-[20px] text-[#00000070]'>Product Details</button>
                <button className='font-normal font-adamina text-[20px] text-[#00000070]'>Rating & Reviews</button>
                <button className='font-normal font-adamina text-[20px] text-[#00000070]'>FAQs</button>
            </div>
            {/* ---------- border --------- */}
            <div className='w-full border border-[#0000001c] mb-[33px]'></div>
            {/* ----------- row 2 ------------ */}
            <div className='row'>
                {/* ----------- product details ------------ */}
                <div>
                    <h2 className='font-adamina font-semibold text-[31px] text-black'>Black Automatic Watch</h2>
                    <p className='font-adamina font-normal text-[16px] text-[#4B5563] mt-[16px] w-[735px] mb-[60px]'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                    <div>
                        <h2 className='font-adamina font-semibold text-[23px] text-black mb-[5px]'>Fabric + Care</h2>
                        <p className='font-adamina font-normal text-[16px] text-[#4B5563]'>Material: Soft wool blend</p>
                        <p className='font-adamina font-normal text-[16px] text-[#4B5563] mb-[60px]'>Color: Various</p>

                    </div>
                    <div>
                        <h2 className='font-adamina font-semibold text-[23px] text-black mb-[5px]'>Sale performance</h2>
                        <p className='font-adamina font-normal text-[16px] text-[#4B5563]'>Sales: 0</p>
                        <p className='font-adamina font-normal text-[16px] text-[#4B5563]'>Review Count: -</p>
                        <p className='font-adamina font-normal text-[16px] text-[#4B5563]'>Review Average: -</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
