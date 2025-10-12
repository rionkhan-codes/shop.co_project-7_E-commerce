import React, { useEffect, useState } from 'react'
import product from '../assets/images/image 1.png'
import product2 from '../assets/images/image 2.png'
import product3 from '../assets/images/image 5.png'
import product4 from '../assets/images/image 6.png'
import { useParams } from 'react-router'
import axios from 'axios'
export const ProductDetail1res = () => {

           // ---------- usestate ---------
const [product , setproduct] = useState([])
const params = useParams()

    // -------- use effect ---------------
    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.productID}`)
        .then((res)=>setproduct(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(product)

  return (
    <>
    <div className='container lg:hidden pt-[20px]'>
        <div className='row lg:hidden'>
            <div className='lg:hidden w-full  m-auto'>
                <img src={product.thumbnail} alt="product" />
            </div>
            <div className='lg:hidden flex justify-between gap-[13px] mt-[13px]'>
                <div className='lg:hidden '><img src={product?.images?.[0]} alt="product" /></div>
                <div className='lg:hidden '><img src={product?.images?.[1]} alt="product" /></div>
                <div className='lg:hidden '><img src={product?.images?.[2]} alt="product" /></div>
            </div>
        </div>
    </div>
    </>
  )
}
