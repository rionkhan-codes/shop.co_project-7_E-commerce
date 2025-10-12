import React from 'react'
import { Link } from 'react-router'
import logo from '../assets/images/SHOP.CO.png'
import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { BiSearch, BiSearchAlt } from 'react-icons/bi';


export const ResNav = () => {
  // ----------- button usestate -------------
  const [nav,setnav] = useState(false)
  // ----------- input usestate --------
const [showSearch, setShowSearch] = useState(false);

console.log(nav)

  return (
    <>
    <section id='resNav' className=' lg:hidden py-[21px]'>
        <div className='container'>
            <div className='row flex justify-between'>
              <div className='flex justify-between gap-[70px]'>
                <button onClick={()=>setnav(!nav)} className='w-[25px] h-[20px] text-black relative'>
                  <span className={`w-full h-[3px] bg-black absolute right-0  rounded-full ${nav? 'rotate-45 top-[15px] ' : 'rotate-0 top-0'} duration-[.4s]`}></span>
                  <span className={`w-full h-[3px] bg-black absolute top-[50%]  right-0 rounded-full ${nav? 'hidden' : 'block'}`}></span>
                  <span className={`w-full h-[3px] bg-black absolute  right-0 rounded-full ${nav? 'rotate-[-45deg] top-[15px]' : 'rotate-0 top-full'} duration-[.4s]`}></span>
                </button>
                <div className={`w-[85%] py-[13px] px-[13px] bg-gray-500 absolute top-[70px]  rounded-[13px] ${nav? 'left-[30px]' : 'left-[-100%]'} duration-[.4s]`}>
                  <ul className='flex flex-col gap-[13px] items-center'>
                    <li><Link to={'/clothCategory'} className='font-adamina font-normal text-[16px] text-white'>Shop</Link></li>
                    <li><Link className='font-adamina font-normal text-[16px] text-white'>New Arrivals</Link></li>
                    <li><Link className='font-adamina font-normal text-[16px] text-white'>Brands</Link></li>
                    <li><Link className='font-adamina font-normal text-[16px] text-white'>Shop</Link></li>
                  </ul>
              </div>
              <Link className='w-[120px]' to={'/'}>
              <img src={logo} alt="logo" /></Link>
              {/* ---------- input --------- */}
              <div className='flex gap-[13px]'>
              <div className="relative">
                  {/* Search Icon */}
                  <BiSearchAlt
                  className="w-5 h-5 cursor-pointer text-gray-700"
                  onClick={() => setShowSearch(!showSearch)}/>
                {/* Search Input (toggle visible) */}
                  {showSearch && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-gray-100 rounded-full flex items-center px-3 py-2 shadow transition-all duration-300">
                  <BiSearch className="w-4 h-4 text-gray-500" />
                  <input
                  type="text"
                  placeholder="Search products..."
                  className="flex-1 bg-transparent outline-none ml-2 text-sm"/>
                  </div>)}
              </div>
            {/* ------------- cart icon ------- ----------- */}
            <div>
              <Link><MdShoppingCart /></Link>
            </div>
            <div>
              <Link><FaRegCircleUser /></Link>
            </div>
            </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}
