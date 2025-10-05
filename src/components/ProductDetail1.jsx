import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi';
import { NavLink } from 'react-router'

export const ProductDetail1 = () => {
    const colors = [
  { id: 1, value: "#4b4434" }, // brown
  { id: 2, value: "#2f4f4f" }, // dark green
  { id: 3, value: "#2c2f4a" }, // navy blue
];

const [selected, setSelected] = useState(1);
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
                        {/* ---------- choose colors ------------- */}
                        <div>
                            <h3 className="text-[16px] font-adamina font-normal text-gray-600 mt-[25px] mb-[16px]">Select Colors</h3>
                            <div className="flex space-x-4">
                            {colors.map((color) => (
                            <button
                            key={color.id}
                            onClick={() => setSelected(color.id)}
                            className=" w-10 h-10 rounded-full flex items-center justify-center border-2   border-transparent"
                            style={{ backgroundColor: color.value }}>
                            {selected === color.id && (
                            <BiCheck className="icon1 text-white w-5 h-5" strokeWidth={3} />)}
                            </button>))}
                            </div>
                        </div>
                        {/* ----------- quantity ---------- */}
                        <div className='flex gap-[20px] mt-[25px]'>
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
