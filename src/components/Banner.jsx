import React from 'react'
import banner from '../assets/images/banner.png'
import { Link } from 'react-router'
import { render } from "react-dom";
import CountUp from "react-countup";


export const Banner = () => {
  return (
    <>
    <section id='banner' style={{background:`url(${banner})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} className='pt-[93px] pb-[116px]'>
        <div className='container'>
            <div className='row'>
                <div>
                    <h1 className='font-adamina font-normal text-[64px] text-black w-[577px] mb-[23px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className='font-akatab text-[17px] text-[#00000070] font-normal w-[545px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link className='py-[15px] px-[67px] bg-black mt-[21px] font-medium font-adamina text-[16px] text-white inline-block rounded-[63px]'>Shop Now</Link>
                    {/* --------- counter up ----------- */}
                    <div className='flex items-center gap-[33px] mt-[49px]'>
                        <div className='font-bold text-black text-[40px] font-adamina'>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={200}
                            duration={6}
                            useEasing={true}
                            separator=","
                            />+
                            <p className='font-adamina text-[16px] text-[#00000075] font-normal'>International Brands</p>
                        </div>
                        <div className='h-[75px] w-[1px] bg-[#00000021]'></div>
                        <div className='font-bold text-black text-[40px] font-adamina'>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={2000}
                            duration={5}
                            useEasing={true}
                            separator=","
                            />+
                            <p  className='font-adamina text-[16px] text-[#00000075] font-normal'>High-Quality Products</p>
                        </div>
                        <div className='h-[75px] w-[1px] bg-[#00000021]'></div>
                        <div className='font-bold text-black text-[40px] font-adamina'>
                            <CountUp
                            className="account-balance"
                            start={0}
                            end={30000}
                            duration={4}
                            useEasing={true}
                            separator=","
                            />+
                            <p  className='font-adamina text-[16px] text-[#00000075] font-normal'>Happy Customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
           
    </>
  )
}
