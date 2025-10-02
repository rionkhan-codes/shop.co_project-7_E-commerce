import React from 'react'

export const ProductDetail1 = () => {
  return (
    <>
    <section className='pt-[37px]'>
        <div className='container'>
            <div className='row flex justify-between'>
                {/* --------- slider ---------- */}
                <div className='flex flex-col gap-[15px]'>
                    <div><img src="/src/assets/images/image 2.png" alt="product" /></div>
                    <div><img src="/src/assets/images/image 5.png" alt="product" /></div>
                    <div><img src="/src/assets/images/image 6.png" alt="product" /></div>
                </div>
                {/* ---------- big product ----------- */}
                <div>
                    <img src="/src/assets/images/image 1.png" alt="product" />
                </div>
                {/* ----------- cart ---------- */}
                <div>
                    <h2 className='font-bold font-adamina text-[40px] text-black'>One Life Graphic T-shirt</h2>
                    <div className='flex gap-[33px] mt-[15px]'>
                        <h2 className='font-bold font-adamina text-[33px] text-[#000]'>$260</h2>
                        <h2 className='font-bold font-adamina text-[33px] text-[#00000032] line-through'>$300</h2>
                    </div>
                    <p className='font-adamina font-normal text-[16px] w-[590px] mt-[20px] text-[#00000060]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    <div className='border mt-[25px] border-[#00000020] w-[590px]'></div>
                    <div className='mt-[25px] flex gap-[21px]'>
                        {/* ----------- quantity ---------- */}
                        <div className='w-[170px] h-[52px] bg-[#F0F0F0] rounded-[63px] flex justify-center items-center gap-[37px]'>
                            <button className='text-[29px]'>-</button>
                            <h2 className='text-[21px]'>1</h2>
                            <button className='text-[29px]'>+</button>
                        </div>
                        {/* -------- add to cart ------------ */}
                        <div>
                            <button className='w-[400px] h-[52px] bg-black flex justify-center items-center rounded-[63px] font-adamina font-normal text-[17px] text-white'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
