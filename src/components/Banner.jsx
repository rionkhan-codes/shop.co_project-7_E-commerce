import React from 'react'
import banner from '../assets/images/banner.png'
import { Link } from 'react-router'
import { render } from "react-dom";
import CountUp from "react-countup";


export const Banner = () => {
  return (
    <>
    <section id='banner' style={{background:`url(${banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='lg:pt-[93px] py-[15px] lg:pb-[116px]'>
        <div className='container'>
            <div className='row'>
                <div>
                    <h1 className='font-adamina font-normal w-[75%] text-[17px] lg:text-[64px] text-black lg:w-[577px] mb-[10px] lg:mb-[23px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='font-akatab text-[11px] lg:text-[17px] text-[#00000070] font-normal w-[75%] lg:w-[545px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link to={'/clothCategory'} className='lg:py-[15px] py-[8px] px-[16px] lg:px-[67px] bg-black mt-[11px] lg:mt-[21px] font-medium font-adamina lg:text-[16px] text-[10px] text-white inline-block rounded-[63px]'>Shop Now</Link>
                    {/* --------- counter up ----------- */}
                    <div className='flex lg:items-center max-sm:flex-wrap gap-[15px] lg:gap-[33px] mt-[15px] lg:mt-[49px]'>
                        <div className='font-bold max-sm:text-center text-black text-[13px] lg:text-[40px] font-adamina'>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={200}
                            duration={6}
                            useEasing={true}
                            separator=","
                            />+
                            <p className='font-adamina text-[10px] lg:text-[16px] text-[#00000075] font-normal'>International Brands</p>
                        </div>
                        <div className='lg:h-[75px] h-[53px] w-[1px] bg-[#00000021]'></div>
                        <div className='font-bold max-sm:text-center text-black text-[13px] lg:text-[40px] font-adamina'>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={2000}
                            duration={5}
                            useEasing={true}
                            separator=","
                            />+
                            <p  className='font-adamina text-[10px] lg:text-[16px] text-[#00000075] font-normal'>High-Quality Products</p>
                        </div>
                        <div className='lg:h-[75px] h-[53px] w-[1px] bg-[#00000021]'></div>
                        <div className='font-bold max-sm:text-center max-sm:ml-[70px] text-black text-[13px] lg:text-[40px] font-adamina'>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={30000}
                            duration={4}
                            useEasing={true}
                            separator=","
                            />+
                            <p  className='font-adamina text-[10px] lg:text-[16px] text-[#00000075] font-normal'>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
           
    </>
  )
}
