import React from 'react'
import img from '../../assets/banner/banner.png'
import { FaShoppingBag } from "react-icons/fa";


const Banner = () => {
  return (
    <div className=' bg-slate-100 py-12 xl:px-28 px-4'>
        <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
        <div className='md:w-1/2'>
            <img src={img} alt="" />
        </div>
        <div className='md:w-1/2'>
            <h1 className='text-5xl font-light mb-5'>Collections</h1>
            <p className='text-xl mb-7'>Lorem ipsum dolor sitamet consectetur adipisicing elit amet consectetur adipisicing elit.</p>
            <button className='bg-black hover:bg-orange-500 px-4 py-2 text-white font-semibold flex items-center rounded-sm gap-2'><FaShoppingBag className='inline-flex'/>
Shop now</button>
        </div>

        </div>
    </div>
  )
}

export default Banner