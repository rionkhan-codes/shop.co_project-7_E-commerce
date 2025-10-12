import React, { useState } from 'react'
import logo from '../assets/images/SHOP.CO.png'
import { Link } from 'react-router'
import { CiSearch } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { Cart } from './Cart';
import { RxCross1 } from "react-icons/rx";
export const Navbar = () => {
    // ------- cart button ----------
    const [cart,setcart] = useState(false)
    let handleclose = ()=>[
        setcart(!cart)
    ]
    const localData = JSON.parse(localStorage.getItem('productID')) || []
    
  return (
    <>
    <nav id='mainNav' className='py-[25px] border-b border-[#0000001f] hidden lg:block'>
        <div className='container'>
            <div className='row flex justify-between items-center'>
                {/* ------- logo ----- */}
                <Link className='logo'>
                    <img src={logo} alt="logo" />
                </Link>
                {/* --------- menu items ----- */}
                <div className='menuItems'>
                    <ul className='flex items-center gap-[25px]'>
                        <li><Link className='font-adamina font-normal text-black text-[16px]'>Shop</Link></li>
                        <li><Link className='font-adamina font-normal text-black text-[16px]'>On Sale</Link></li>
                        <li><Link className='font-adamina font-normal text-black text-[16px]'>New Arrivals</Link></li>
                        <li><Link className='font-adamina font-normal text-black text-[16px]'>Brands</Link></li>
                    </ul>
                </div>
                {/* -------- menu search ---------- */}
                <div className='menuSrc w-[575px] h-[48px] bg-[#F0F0F0] rounded-[63px] flex items-center pl-[16px] gap-[13px]'>
                    <CiSearch className='text-[25px] text-[#00000052]' />
                    <input className='font-adamina text-[16px] font-normal w-full h-full outline-none border-none' type="text" placeholder='Search for products...' />
                </div>

                {/* ------- buttons --------- */}
                <div className='flex items-center gap-[14px]'>
                    <button onClick={()=>setcart(!cart)} className='relative'><FiShoppingCart className='text-[25px] text-[#000] '/><span className='w-[20px] h-[20px] bg-sky-500 rounded-full flex justify-center items-center text-white absolute top-[-9px] right-[-9px]'>{localData.length}</span></button>
                    <Link to={'/login'}><FaRegUserCircle className='text-[25px] text-[#000]'/></Link>
                </div>
            </div>
        </div>
    </nav>
    {/* ------------ cart ------------- */}
    {
        cart&&
        <Cart closeCart={handleclose} cross={<RxCross1 onClick={()=>setcart(!cart)}/>}/>
    
    }
    </>
  )
}
