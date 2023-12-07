import React from 'react'
import { FaFilter } from 'react-icons/fa'

const Products = () => {
  return (
   <div>

    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
       <h2 className='title'>or subscribe to the news letter</h2>

       {/* cards */}
       <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
        <div className='flex space-x-2 md:items-center md:gap-2 gap-2 flex-wrap'>
            <button>All Products</button>
            <button>Clothing</button>
            <button>Hoddies</button>
            <button>Bags</button>
        </div>
        {/* filter */}
        <div className='flex justify-end mb-4 rounded-sm' >
            <div className='bg-black p-2'>
            <FaFilter className='text-white w-4 h-4 mt-1  '/>
             
            </div>
            <select name="" id="" className='bg-black text-white px-2 py-1 rounded-sm'>
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low To High</option>
                <option value="high-to-low">High To Low</option>
            </select>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Products