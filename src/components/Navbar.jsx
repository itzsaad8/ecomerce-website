import React, { useState } from 'react'
import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isMenuopen,setIsMenuopen]=useState(false)

    const toggle = () =>{
        setIsMenuopen (!isMenuopen)
    }
    const catItems = [
        {
            title:"Catalog-name",
            path:'/'
        },
        {
            title:"full-name",
            path:'/'
        },
        {
            title:"email-address",
            path:'/'
        },
        {
            title:"address",
            path:'/'
        },
        {
            title:"phone-number",
            path:'/'
        },
        {
            title:"about-us",
            path:'/'
        },
    ]
  return (
    <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
        {/* navbar */}
        <nav className='flex items-center justify-between md:py-4 pt-6 pb-3'>
            <FaSearch className='text-black w-5 h-5 cursor-pointer hidden md:block'/>
            <a href=""><img src={logo} alt="" /></a>
            <div className='text-lg text-black sm:flex items-center  gap-2 hidden'>
                <a href="" className='flex items-center gap-2'>
                <FaUser /> Account
                </a>
                <a href="" className='flex items-center gap-2'>
                <FaShoppingBag /> Shopping
                </a>
            </div>

            {/* navbr for small device */}
            <div className='sm:hidden'>
                <button onClick={toggle}>
                    {
                        isMenuopen ? <FaTimes className=' w-5 h-5 text-black  '/> : <FaBars className=' w-5 h-5 text-black '/>
                    }
                </button>
            </div>

        </nav>

        <hr />

        {/* cats */}
        <div className='pt-4'>
            <ul className='lg:flex items-center justify-between text-black hidden'>
                {
                    catItems.map(({title,path})=>(
                        <li key={title} className='hover:text-orange-600'><Link>{title}</Link></li>
                    ))
                }
            </ul>

        </div>

        {/* small screen menu */}
        <div>
        <ul className={`bg-black text-white px-2 py-4 rounded ${isMenuopen? "" : "hidden"}`}>
                {
                    catItems.map(({title,path})=>(
                        <li key={title} className='hover:text-orange-600 py-2 cursor-pointer text-center'><Link>{title}</Link></li>
                    ))
                }
            </ul>
        </div>
    </header>
  )
}

export default Navbar