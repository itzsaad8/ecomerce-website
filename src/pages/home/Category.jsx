import React from 'react'
import img1 from '/assets/brand1.png'
import { Link } from 'react-router-dom'

const logos = [
    {
        id:1,
        img:'/assets/brand1.png'
    },
    {
        id:2,
        img:'/assets/brand2.png'
    },
    {
        id:3,
        img:'/assets/brand3.png'
    },
    {
        id:4,
        img:'/assets/brand4.png'
    },
    {
        id:5,
        img:'/assets/brand5.png'
    },

]
const Category = () => {

  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
        {/* logoos */}
        <div className='flex items-center justify-around flex-wrap py-5 gap-2'>
           
          {
            logos.map(({img,id})=>(
                <div key={id}>
                    <img src={img} alt="" />
                </div>
            ))
          }
          
           
        </div>
        {/* products grid */}
        <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
            <p className='font-semibold uppercase md:-rotate-90 text-center text-white bg-black md:p-1.5 p-2 rounded-sm inline-flex hover:bg-orange-500 '>Explore new and popular styles</p>
            <div>
                <Link to='/'><img src="/assets/imgs/image1.png" alt="" className='w-full hover:scale-105 transirion-all duration-200 '/></Link>

            </div>
            <div>
                <div className='grid grid-cols-2 gap-2'>
                <Link to='/'><img src="/assets/imgs/image2.png" alt=""  className='w-full hover:scale-105 transirion-all duration-200' /></Link>
                <Link to='/'><img src="/assets/imgs/image3.png" alt=""  className='w-full hover:scale-105 transirion-all duration-200' /></Link>
                <Link to='/'><img src="/assets/imgs/image4.png" alt=""  className='w-full hover:scale-105 transirion-all duration-200' /></Link>
                <Link to='/'><img src="/assets/imgs/image5.png" alt=""  className='w-full hover:scale-105 transirion-all duration-200' /></Link>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Category