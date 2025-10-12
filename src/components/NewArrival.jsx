import React, { useEffect, useState } from 'react'
import { CommonHead } from '../common/CommonHead'
import { SinglenewArrival } from '../common/SinglenewArrival'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import Slider from "react-slick";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export const NewArrival = () => {
  const [product, setProduct] = useState([]);


  // ✅ product load
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/smartphones")
      .then((res) => setProduct(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  // ✅ Add to Cart function
  const handleCart = (id) => {
    const existIds = JSON.parse(localStorage.getItem("productID")) || [];
    if (!existIds.includes(id)) {
      existIds.push(id);
      localStorage.setItem("productID", JSON.stringify(existIds));
      toast.success("Added To Cart")
    } else {
      toast.info("Already Added")
    }
  };

   const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };


//   --------- navigate  ----------
 
const navigate = useNavigate()

let handleShow = (productData)=>{
    navigate(`/productDetails/${productData}`)
    
}



  return (
    <>
    <section id='newArrival' className='pt-[15px] lg:pt-[73px] py-[15px] lg:py-[65px] hidden lg:block'>
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
                                <SinglenewArrival clickCart={()=>handleCart(item.id)} showDetails={()=>handleShow(item.id)} key={i} proname={item.title} proimg={item.thumbnail} proprice={item.price} prorate={item.rating} prodis={item.discountPercentage}/>
                            </div>
                           
                        ))
                    }
                </div>
            </div>
            {/* --------- row 3 button -------- */}
            <div className='flex justify-center'>
                <Link to={'/category'} className='main px-[80px] py-[10px] lg:py-[15px] max-sm:w-fit border border-[#00000030] rounded-[63px] font-adamina font-medium text-[13px] lg:text-[16px] text-black mt-[21px] lg:mt-[37px]'>View All</Link>
            </div>

            {/* --- border --------- */}
            <div className='border  w-full border-[#00000030] lg:mt-[64px] mt-[21px]'></div>
            <ToastContainer
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={true}
  closeOnClick
  pauseOnHover
  draggable
/>
        </div>
    </section>

    {/* -------------- responsive ---------------- */}
    <section id='newArrival' className='pt-[15px] py-[15px] lg:hidden'>
        <div className='container'>
            {/*  ----------- row 1 ---------- */}
            <div className='row'>
                <div className='mb-[15px] '>
                    <CommonHead head={'NEW ARRIVALS'}/>
                </div>
            </div>

            {/* ----- row 2 ----------- */}
            <div className='row'>
                <div className=' flex gap-[20px]'>
                    {
                        product.slice(0,1).map((item , i)=>(
                            <div className='w-full' key={i}>
                                <SinglenewArrival showDetails={()=>handleShow(item.id)} key={i} proname={item.title} proimg={item.thumbnail} proprice={item.price} prorate={item.rating} prodis={item.discountPercentage}/>
                            </div>
                           
                        ))
                    }
                </div>
            </div>
            {/* --------- row 3 button -------- */}
            <div className='flex justify-center'>
                <Link to={'/category'} className='main px-[80px] py-[10px] lg:py-[15px] max-sm:w-fit border border-[#00000030] rounded-[63px] font-adamina font-medium text-[13px] lg:text-[16px] text-black mt-[21px] lg:mt-[37px]'>View All</Link>
            </div>

            {/* --- border --------- */}
            <div className='border  w-full border-[#00000030] lg:mt-[64px] mt-[21px]'></div>
        </div>
    </section>
    </>
  )
}
