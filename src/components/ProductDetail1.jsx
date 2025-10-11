import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi';
import { NavLink, useParams } from 'react-router'

export const ProductDetail1 = () => {
     // ---------- usestate ---------
    const [product , setproduct] = useState([])
const params = useParams()

    // -------- use effect ---------------
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/category/smartphones/${params.productID}`)
        .then((res)=>setproduct(res.data.products))
        .catch((err)=>console.log(err))
    },[])
    console.log(product)
    // --------- color ---------
 const colors = [
  { id: 1, value: "#4b4434" }, // brown
  { id: 2, value: "#2f4f4f" }, // dark green
  { id: 3, value: "#2c2f4a" }, // navy blue
];
// ----------- size ---------
const sizes = ["Small", "Medium", "Large", "X-Large"];

const [selectedColor, setSelectedColor] = useState(1);
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <>
    <section className='lg:pt-[37px] pt-[25px]'>
        <div className='container'>
            <div className='row flex justify-between'>
                {/* --------- slider ---------- */}
                <div className=' hidden  lg:block'>
                    <div className='mb-[17px]'><img src="/src/assets/images/image 2.png" alt="product" /></div>
                    <div className='mb-[17px]'><img src="/src/assets/images/image 5.png" alt="product" /></div>
                    <div className='mb-[17px]'><img src="/src/assets/images/image 6.png" alt="product" /></div>
                </div>
                {/* ---------- big product ----------- */}
                <div className=' hidden lg:block'>
                    <img src="/src/assets/images/image 1.png" alt="product" />
                </div>
                {/* ----------- cart ---------- */}
                <div>
                    <h2 className='font-bold font-adamina text-[21px]  lg:text-[40px] text-black'>One Life Graphic T-shirt</h2>
                    <div className='flex lg:gap-[33px] lg:mt-[15px] mt-[11px] gap-[15px]'>
                        <h2 className='font-bold font-adamina text-[17px] lg:text-[33px] text-[#000]'>$260</h2>
                        <h2 className='font-bold font-adamina text-[17px] lg:text-[33px] text-[#00000032] line-through'>$300</h2>
                    </div>
                    <p className='font-adamina font-normal lg:text-[16px] text-[13px] lg:w-[590px] w-fit mt-[20px] text-[#00000060]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    {/* ------- border ------------- */}
                    <div className='border mt-[25px] border-[#00000020] lg:w-[590px] w-full'></div>
                        {/* ---------- choose colors ------------- */}
                        <div>
                            <h3 className="lg:text-[16px] text-[15px] font-adamina font-normal text-gray-600 my-[15px] lg:mt-[25px] lg:mb-[16px]">Select Colors</h3>
                            <div className="flex space-x-4">
                            {colors.map((color) => (
                            <button
                            key={color.id}
                            onClick={() => setSelectedColor(color.id)}
                            className=" lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center border-2   border-transparent"
                            style={{ backgroundColor: color.value }}>
                            {selectedColor === color.id && (
                            <BiCheck className="icon1 text-white w-5 h-5" strokeWidth={3} />)}
                            </button>))}
                            </div>
                        </div>
                    {/* ------- border ------------- */}
                    <div className='border mt-[25px] border-[#00000020] w-full lg:w-[590px]'></div>

                    {/* ---------- choose size --------------- */}
                    <div className='mb-[25px]'>
                            <h3 className="lg:text-[16px] text-[15px] font-normal font-adamina text-gray-600 my-[15px] lg:mb-[16px] lg:mt-[25px]">Choose Size</h3>
                        <div className="flex space-x-3">
                            {sizes.map((size) => (
                        <button
                            key={size}
                            onClick={() => setSelectedSize(size)}
                            className={`lg:px-[25px] lg:py-[13px] px-[13px] py-[9px] rounded-full text-[13px] lg:text-[16px] font-normal font-adamina transition 
                            ${
                            selectedSize === size
                            ? "bg-black text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}>{size}
                        </button>))}
                        </div>
                    </div>
                    {/* ------- border ------------- */}
                    <div className='border mt-[25px] border-[#00000020] w-full lg:w-[590px]'></div>
                        {/* ----------- quantity ---------- */}
                        <div className='flex gap-[20px] mt-[25px]'>
                        <div className='lg:w-[170px] lg:h-[52px] w-[120px] h-[45px] bg-[#F0F0F0] rounded-[63px] flex justify-center items-center lg:gap-[37px] gap-[21px]'>
                            <button className='lg:text-[29px] text-[25px]'>-</button>
                            <h2 className='lg:text-[21px] text-[19px]'>1</h2>
                            <button className='lg:text-[29px] text-[25px]'>+</button>
                        </div>
                        {/* -------- add to cart ------------ */}
                        <div>
                            <button className='lg:w-[400px] w-[200px] lg:h-[52px] h-[45px] bg-black flex justify-center items-center rounded-[63px] font-adamina font-normal text-[15px] lg:text-[17px] text-white'>Add to Cart</button>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    
    
    


    </>
  )
}
