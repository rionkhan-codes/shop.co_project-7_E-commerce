import React from 'react'

export const SinglenewArrival = ({proimg,proname,proprice,prodis,prorate}) => {
  return (
    <>
    <div className='container'>
        <div className='w-[295px]'>
            <div className='w-[295px] h-[298px] bg-[#F0EEED] rounded-[20px]'>
                <img src={proimg} alt="product image" />
            </div>
            <h2>{proname}</h2>
            <div>
                {prorate}
            </div>
            <div className='flex justify-between items-center'>
                <p>{proprice}</p>
                <p>{prodis}</p>
            </div>
        </div>
    </div>
    </>
  )
}
