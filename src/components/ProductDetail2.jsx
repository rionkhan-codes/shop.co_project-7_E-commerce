import React, { useState } from 'react'
import { MdDone } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { SingleReviewCard } from '../common/SingleReviewCard';

export const ProductDetail2 = () => {

    // --------- usestate --------
    const [active,setactive] = useState('details')

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
                        <h2 className='font-adamina font-semibold text-[19px] lg:text-[31px] text-black'>Black Automatic Watch</h2>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563] mt-[11px] lg:mt-[16px] lg:w-[735px] w-fit mb-[21px] lg:mb-[60px]'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic wooden canoes in Valley Park, Missouri ceased in 1978.</p>
                    </div>
                    <div>
                        <h2 className='font-adamina font-semibold text-[19px] lg:text-[23px] text-black mb-[5px]'>Fabric + Care</h2>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563]'>Material: Soft wool blend</p>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563] mb-[21px] lg:mb-[60px]'>Color: Various</p>

                    </div>
                    <div>
                        <h2 className='font-adamina font-semibold text-[19px] lg:text-[23px] text-black mb-[5px]'>Sale performance</h2>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563]'>Sales: 0</p>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563]'>Review Count: -</p>
                        <p className='font-adamina font-normal lg:text-[16px] text-[13px] text-[#4B5563]'>Review Average: -</p>
                    </div>
                </div>
                        )
                    }
            </div>

            {/* --------- revies --------- */}

            <div className='col'>
                {
                    active == 'reviews' && (

                <div>
                    <h2 className='font-adamina font-bold text-[25px] text-black mb-[33px]'>All Reviews <span className='text-gray-500 font-normal text-[16px]'>(451)</span></h2>
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
    </div>
    </>
  )
}
