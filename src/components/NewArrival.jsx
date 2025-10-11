import React, { useEffect, useState } from 'react'
import { CommonHead } from '../common/CommonHead'
import { SinglenewArrival } from '../common/SinglenewArrival'
import { Link } from 'react-router'
import product from '../assets/images/product.png'
import axios from 'axios'
import Slider from "react-slick";



export const NewArrival = () => {
    // ---------- usestate ---------
    const [product , setproduct] = useState([])


    // -------- use effect ---------------
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/category/smartphones')
        .then((res)=>setproduct(res.data.products))
        .catch((err)=>console.log(err))
    },[])

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };



  return (
    <>
    <section id='newArrival' className='pt-[15px] lg:pt-[73px] py-[15px] lg:py-[65px]'>
        <div className='container'>
            {/*  ----------- row 1 ---------- */}
            <div className='row'>
                <div className='mb-[15px] lg:mb-[55px]'>
                    <CommonHead head={'NEW ARRIVALS'}/>
                </div>
            </div>

            {/* ----- row 2 ----------- */}
            <div className='row'>
                <div className=' flex justify-between gap-[30px] flex-wrap'>
                    {
                        product.slice(0,4).map((item , i)=>(
                            <div className='w-[295px]' key={i}>
                                <SinglenewArrival key={i} proname={item.title} proimg={item.images[0]} proprice={item.price} prorate={item.rating} prodis={item.discountPercentage}/>
                            </div>
                           
                        ))
                    }
                </div>
            </div>
            {/* --------- row 3 button -------- */}
            <div className='flex justify-center'>
                <Link to={'/productDetails'} className='main px-[80px] py-[10px] lg:py-[15px] max-sm:w-fit border border-[#00000030] rounded-[63px] font-adamina font-medium text-[13px] lg:text-[16px] text-black mt-[21px] lg:mt-[37px]'>View All</Link>
            </div>

            {/* --- border --------- */}
            <div className='border  w-full border-[#00000030] lg:mt-[64px] mt-[21px]'></div>
        </div>
    </section>
    </>
  )
}
