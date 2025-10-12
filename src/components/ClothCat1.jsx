
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SingleClothCat } from '../common/SingleClothCat';
import Pagination from '../pages/Pagination';
const ClothCat1 = () => {

        // ---------- usestate ---------
    const [product , setproduct] = useState([])
    // --------- pagination -------
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    // -------- use effect ---------------
    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/products')
        .then((res)=>setproduct(res.data))
        .catch((err)=>console.log(err))
    },[])
    console.log(product)
    // ----------- pagination ---------
    const start = (page - 1) * itemsPerPage;
  const currentItems = product.slice(start, start + itemsPerPage);
  const totalPages = Math.ceil(product.length / itemsPerPage);

  return (
    <>
     <div className='container py-[80px]'>
        <div className='row '>
            <div className=' flex justify-center gap-[30px] flex-wrap'>
                {
                    currentItems.map((item , i)=>(
                     <div className='w-[295px]' key={i}>
                        <SingleClothCat key={i} proname={item.title} proimg={item.images[0]} proprice={item.price} prodis={item.discountPercentage}/>
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

export default ClothCat1