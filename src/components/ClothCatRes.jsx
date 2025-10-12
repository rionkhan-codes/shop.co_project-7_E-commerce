
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Pagination from '../pages/Pagination';

import { SingleTopSellRes } from '../common/SingleTopSellRes';
export const ClothCatRes = () => {

            // ---------- usestate ---------
    const [product , setproduct] = useState([])
    // --------- pagination -------
    const [page, setPage] = useState(1);
    const itemsPerPage = 3;

    // -------- use effect ---------------
    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then((res)=>setproduct(res.data))
        .catch((err)=>console.log(err))
    },[])
    // ----------- pagination ---------
    const start = (page - 1) * itemsPerPage;
  const currentItems = product.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(product.length / itemsPerPage);

  return (
    <>
       <div className='container lg:hidden'>
        <div className='row mt-[20px]'>
            <div className=' flex justify-center gap-[10px]'>
                {
                    currentItems.map((item , i)=>(
                     <div className='w-[100px] ' key={i}>
                        <SingleTopSellRes key={i} proname={item.title} proimg={item.images[0]} proprice={item.price} prorate={item.rating} prodis={item.discountPercentage}/>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-[40px]'>
            <Pagination totalPages={totalPages} currentPage={page} setPage={setPage} />
        </div>
    </div>
    </>
  )
}
