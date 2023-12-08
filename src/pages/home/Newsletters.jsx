import React from 'react'
import { Link } from 'react-router-dom'


const Newsletters = () => {
  return (
    <div className='bg-[#1e2832] bg-opacity-5 md:px-28 px-4 py-16 '>
        <h2 className='title mb-8'>Follow products and discount on instagram </h2>
        {/* insta grid */}
        <div className='flex flex-wrap gap-2 items-center justify-center mb-20'>
            <Link to='/'>
                <img className='object-cover h-40 w-40' src='/assets/imgs/insta/img1.png' alt="" />
            </Link>
            <Link to='/'>
                <img className='object-cover h-40 w-40' src='/assets/imgs/insta/img2.png' alt="" />
            </Link> 
                       <Link to='/'>
                <img className='object-cover h-40 w-40' src='/assets/imgs/insta/img3.png' alt="" />
            </Link>
            <Link to='/'>
                <img className='object-cover h-40 w-40' src='/assets/imgs/insta/img4.png' alt="" />
            </Link>
            <Link to='/'>
                <img className='object-cover h-40 w-40' src='/assets/imgs/insta/img5.png' alt="" />
            </Link>

            <Link to='/'>
                <img className='object-cover h-40 w-40' src='/assets/imgs/insta/img6.png' alt="" />
            </Link>

        </div>
        {/* newsletters */}
        <div className=''>
            <h2 className='title mb-8'>Or subscribe to the newsletters</h2>
            <form className='md:w-1/2 mx-auto text-center'>
                <input type="email" id='email' name='email' placeholder='Email Address..' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3  mb-5 placeholder:text-black/50 mr-4 ' />
                <input type="submit"  className='bg-black text-white px-6 py-1 rounded-sm ' />
            </form>
        </div>
    </div>
  )
}

export default Newsletters 