import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/SHOP.CO.png'
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import badge1 from '../assets/images/Badge.png'
import badge2 from '../assets/images/Badge (1).png'
import badge3 from '../assets/images/Badge (2).png'
import badge4 from '../assets/images/Badge (3).png'
import badge5 from '../assets/images/Badge (4).png'
export const FooterNav = () => {
  return (
    <>
    <footer id='footerNav' className='pt-[140px] pb-[83px] bg-[#F0F0F0]'>
        <div className='container'>
            <div className='row flex justify-between'>
                <div>
                    <Link><img src={logo} alt="logo" /></Link>
                    <p className='mt-[25px] w-[248px] font-normal font-adamina text-[14px] text-[#00000081] mb-[35px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className='flex items-center gap-[13px]'>
                        <Link className='main3 w-[33px] h-[33px] flex justify-center items-center rounded-full bg-white border border-[#00000032]'><IoLogoTwitter /></Link>
                        <Link className='main3 w-[33px] h-[33px] flex justify-center items-center rounded-full bg-white border border-[#00000032]'><FaFacebookF /></Link>
                        <Link className='main3 w-[33px] h-[33px] flex justify-center items-center rounded-full bg-white border border-[#00000032]'><IoLogoInstagram /></Link>
                        <Link className='main3 w-[33px] h-[33px] flex justify-center items-center rounded-full bg-white border border-[#00000032]'><FaGithub /></Link>
                    </div>
                </div>
                {/* ------- col 1 -------- */}
                <div className='flex flex-col'>
                    <h2 className='font-adamina font-medium text-[16px] text-black mb-[25px]'>Company</h2>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>About</Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Features  </Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Works</Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Career</Link>
                </div>
                {/* ---------- col 2 ------------ */}
                <div className='flex flex-col'>
                    <h2 className='font-adamina font-medium text-[16px] text-black mb-[25px]'>Help</h2>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Customer Support</Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Delivery Details  </Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Terms & Conditions</Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Privacy Policy</Link>
                </div>
                {/* -------------- col 3 ------------ */}
                <div className='flex flex-col'>
                    <h2 className='font-adamina font-medium text-[16px] text-black mb-[25px]'>FAQ</h2>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Account</Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Manage Deliveries  </Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Orders</Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Payments</Link>
                </div>
                {/* ----------- col 4 ------------- */}
                <div className='flex flex-col'>
                    <h2 className='font-adamina font-medium text-[16px] text-black mb-[25px]'>Resources</h2>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Free eBooks</Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Development Tutorial  </Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>How to - Blog</Link>
                    <Link className='font-adamina font-normal text-[16px] text-[#00000098] mb-[7px]'>Youtube Playlist</Link>
                </div>
            </div>
            {/* ----------- border ---------- */}
            <div className='border w-full  border-[#00000040] mt-[50px] mb-[25px]'></div>
            {/* ------- row 2 ------- */}
            <div className='row flex justify-between'>
                <h2 className='font-adamina font-normal text-[15px] text-[#00000070]'>Shop.co © 2000-2023, All Rights Reserved</h2>
                <div className='flex gap-[13px]'>
                    <Link><img src={badge1} alt="badge" /></Link>
                    <Link><img src={badge2} alt="badge" /></Link>
                    <Link><img src={badge3} alt="badge" /></Link>
                    <Link><img src={badge4} alt="badge" /></Link>
                    <Link><img src={badge5} alt="badge" /></Link>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
