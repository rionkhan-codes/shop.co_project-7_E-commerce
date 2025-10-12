import React, { useEffect, useState } from 'react'
import { MdDone } from "react-icons/md";
import { SingleReviewCard } from '../common/SingleReviewCard';
import { useParams } from 'react-router';
import axios from 'axios';
import { FaStar } from "react-icons/fa";

export const ProductDetail2 = () => {

    // --------- usestate --------
    const [active,setactive] = useState('details')
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
    <div className='container pt-[50px] lg:pt-[80px]'>
        <div className='row'>
            {/* --------- row 1 ----------- */}
            <div className='flex justify-around'>
                <button
                    onClick={()=> setactive('details')}
                    className={`font-normal font-adamina text-[13px] lg:text-[20px] text-[#00000070] cursor-pointer ${
                    active === 'details'
                    ? 'border-b-2 text-black border-black'
                    : 'text-gray-500'
                    }`}>Product Details</button>
                <button 
                    onClick={()=> setactive('reviews')}
                    className={`font-normal font-adamina text-[13px] lg:text-[20px] text-[#00000070] cursor-pointer ${
                    active === 'reviews'
                    ? 'border-b-2 text-black border-black'
                    : 'text-gray-500'
                    }`}>Rating & Reviews</button>
                <button onClick={()=> setactive('faq')}
                    className={`font-normal font-adamina text-[13px] lg:text-[20px] text-[#00000070] cursor-pointer ${
                    active === 'faq'
                    ? 'border-b-2 text-black border-black'
                    : 'text-gray-500'
                    }`}>FAQs</button>
            </div>
            {/* ---------- border --------- */}
            <div className='w-full border border-[#0000001c] mb-[15px] lg:mb-[33px]'></div>
            {/* ----------- row 2 ------------ */}
            <div className='col'>
                {/* ---------- details -------------- */}
                {/* ----------- javascript ------ */}
                  {
                      active === 'details' && (

                // ---------- products details ----------
                <div>
                    <div>
                        <h2 className='font-adamina font-semibold text-[19px] lg:text-[31px] text-black'>{product.title}</h2>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563] mt-[11px] lg:mt-[16px] lg:w-[735px] w-fit mb-[21px] lg:mb-[60px]'>{product.description}</p>
                    </div>
                    <div>
                        <h2 className='font-adamina font-semibold text-[19px] lg:text-[23px] text-black mb-[5px]'>{product.availabilityStatus}</h2>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563]'>{product.brand}</p>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563] mb-[21px] lg:mb-[60px]'>{product.category}</p>

                    </div>
                    <div>
                        <h2 className='font-adamina font-semibold text-[19px] lg:text-[23px] text-black mb-[5px]'>Sale performance</h2>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563]'>{product.shippingInformation}</p>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563]'>{product.warrantyInformation}</p>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563] flex gap-[5px] items-center'><FaStar/>{product.rating}</p>
                    </div>
                </div>
                        )
                    }
            </div>

            {/* --------- reviews --------- */}

            <div className='col'>
                {
                    active == 'reviews' && (

                <div>
                    <h2 className='font-adamina font-bold lg:text-[25px] text-[17px] text-black mb-[15px] lg:mb-[33px]'>All Reviews <span className='text-gray-500 font-normal text-[16px]'>(451)</span></h2>
                    <div className='flex items-center justify-between flex-wrap gap-[20px]'>
                    {/* -------- review 1 ----------- */}
                        <div>
                            <SingleReviewCard revdate={'Posted on August 14, 2023'} revname={'Samantha D.'} revdis={"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."}/>
                        </div>
                        {/* ---------- review 2 ------------ */}
                        <div>
                            <SingleReviewCard revname={'Ethan R.'} revdis={"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."} revdate={'Posted on August 16, 2023'}/>
                        </div>
                        {/* ----------- review 3 ---------- */}
                        <div>
                            <SingleReviewCard revname={'Olivia P.'} revdate={'Posted on August 17, 2023'} revdis={"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."}/>
                        </div>
                        {/* ------------ review 4 ------------- */}
                        <div>
                            <SingleReviewCard revdate={'Posted on August 15, 2023'} revname={'Alex M.'} revdis={"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."}/>
                        </div>
                    </div>
                </div>
                    )
                }
            </div>

        </div>
            {/* ------------ button ------------ */}
            {
                active === 'reviews' && (
                    
                <button className='w-[230px] h-[52px] border border-[#00000020] rounded-[63px] font-adamina font-medium text-[16px] text-black flex justify-center items-center m-auto mt-[37px]'>Load More Reviews</button>
                )
            }
            {
                active === 'faq'&&(
                    <div className='flex lg:justify-center justify-between  flex-wrap lg:gap-[30px] gap-[9px]'>
                        {/* ----------- box 1 ------------ */}
                        <div className='lg:w-[600px] w-[150px] h-[200px] lg:py-[21px] lg:px-[21px] py-[9px] px-[9px] border border-[#00000021] rounded-[17px]'>
                            <h2 className='font-adamina font-bold lg:text-[23px] max-sm:text-center text-[15px] text-black mb-[9px]'>General</h2>
                            <ul className='list-disc lg:pl-[21px] pl-[11px]'>
                                <li className='font-normal lg:text-[19px] text-[13px] font-adamina text-gray-600 mb-[7px]'>Do you have a warranty?</li>
                                <li className='font-normal lg:text-[19px] text-[13px] font-adamina text-gray-600 mb-[7px]'>Do I need to sign a contract?</li>
                                <li className='font-normal lg:text-[19px] text-[13px] font-adamina text-gray-600 mb-[7px]'>Do you have any physical locations?</li>
                            </ul>
                        </div>
                        {/* ------------ box 2 -------------- */}
                        <div className='lg:w-[600px] w-[180px] lg:py-[21px] lg:px-[21px] py-[9px] px-[9px] border border-[#00000021] rounded-[17px]'>
                            <h2 className='font-adamina text-center font-bold lg:text-[23px] text-[15px] text-black mb-[9px]'>Orders</h2>
                            <ul className='list-disc lg:pl-[21px] pl-[11px]'>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>What is your return policy?</li>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>What should I do if my order is lost, stolen, or damaged?</li>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>How can I track my order?</li>
                            </ul>
                        </div>
                        {/* ------------ box 3 -------------- */}
                        <div className='lg:w-[600px] w-[150px] lg:py-[21px] lg:px-[21px] px-[9px] py-[9px] border border-[#00000021] rounded-[17px]'>
                            <h2 className='font-adamina text-center font-bold lg:text-[23px] text-[15px] text-black mb-[9px]'>Payment</h2>
                            <ul className='list-disc lg:pl-[21px] pl-[11px]'>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>What payment methods do you accept?</li>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>Do you sell gift cards?</li>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>How can I check my gift card balance?</li>
                            </ul>
                        </div>
                        {/* ------------ box 4 -------------- */}
                        <div className='lg:w-[600px] w-[180px] lg:py-[21px] lg:px-[21px] px-[9px] py-[9px] border border-[#00000021] rounded-[17px]'>
                            <h2 className='font-adamina font-bold lg:text-[23px] text-[15px] text-black mb-[9px] text-center'>Shipping and delivery:</h2>
                            <ul className='list-disc pl-[11px] lg:pl-[21px]'>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>How long does shipping take?</li>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>Do you ship internationally?</li>
                                <li className='font-normal text-[13px] lg:text-[19px] font-adamina text-gray-600 mb-[7px]'>Do you offer free shipping?</li>
                            </ul>
                        </div>
                    </div>
                )
            }
    </div>
    </>
  )
}
