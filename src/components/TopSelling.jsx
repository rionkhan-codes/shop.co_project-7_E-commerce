import React, { useEffect, useState } from 'react'
import { CommonHead } from '../common/CommonHead'
import { SingleTopsell } from '../common/SingleTopsell'
import { Link, useNavigate } from 'react-router'
import product from '../assets/images/product.png'
import axios from 'axios'
export const TopSelling = () => {

   // ---------- usestate ---------
    const [product , setproduct] = useState([])


    // -------- use effect ---------------
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/category/smartphones')
        .then((res)=>setproduct(res.data.products))
        .catch((err)=>console.log(err))
    },[])

    const navigate = useNavigate()

let handleShow = (productData)=>{
    navigate(`/productDetails/${productData}`)
    
}


  return (
    <section id='topsell'>
        <div className='container'>
          {/* ------------ row 1 -------- */}
            <div className='row'>
                <div>
                    <CommonHead head={'TOP SELLING'}/>
                </div>
            </div>
            {/* ----------- row 2 -------- */}
            <div className='row mt-[40px]'>
              <div className=' flex justify-between gap-[30px] flex-wrap'>
                {
                  product.slice(4,8).map((item , i)=>(
                    <div className='w-[295px]' key={i}>
                      <SingleTopsell showDetails={()=>handleShow(item.id)} key={i} proname={item.title} proimg={item.images[0]} proprice={item.price} prorate={item.rating} prodis={item.discountPercentage}/>
                    </div>
                    ))}
              </div>
                        </div>
            {/* ---------  row 3 button ---------- */}
            <div className='flex justify-center'>
              <Link to={'/category'} className='main px-[80px] py-[10px] lg:py-[15px] max-sm:w-fit border border-[#00000030] rounded-[63px] font-adamina font-medium text-[13px] lg:text-[16px] text-black mt-[21px] lg:mt-[37px]'>View All</Link>
            </div>
        </div>
    </section>
  )
}
