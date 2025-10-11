import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SingleTopsell } from '../common/SingleTopsell'
import Pagination from '../pages/Pagination'


export const Category2 = () => {

    // ---------- usestate ---------
    const [product , setproduct] = useState([])
    // --------- pagination -------
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    // -------- use effect ---------------
    useEffect(()=>{
        axios.get('https://dummyjson.com/products/category/smartphones')
        .then((res)=>setproduct(res.data.products))
        .catch((err)=>console.log(err))
    },[])
    // ----------- pagination ---------
    const start = (page - 1) * itemsPerPage;
  const currentItems = product.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(product.length / itemsPerPage);

  return (
    <>
    <div className='container'>
        <div className='row mt-[40px]'>
            <div className=' flex justify-between gap-[30px] flex-wrap'>
                {
                    currentItems.map((item , i)=>(
                     <div className='w-[295px]' key={i}>
                        <SingleTopsell key={i} proname={item.title} proimg={item.images[0]} proprice={item.price} prorate={item.rating} prodis={item.discountPercentage}/>
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
