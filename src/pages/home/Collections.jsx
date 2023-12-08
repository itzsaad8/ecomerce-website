import React from 'react'
// import bf from "../../../public/assets/imgs/collection-bg.png"
// import img from "../../../public/assets/collection/collection-bg.png"
const Collections = () => {
  return (
    <div className='bg-[url("../../../public/assets/collection/banner.webp")] bg-cover bg-center bg-no-repeat xl:px-28 px-4 my-20 '>
        <div className='h-[400px] flex justify-between  md:flex-row  items-center'>
            <div className='md:w-1/2'></div>
            <div className='md:w-1/2'>
                <img src="/assets/collection/zara-logo.png" alt="" />
                <p className='text-md text-white  my-8 md:w-2/3 leading-[22px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel reprehenderit, impedit itaque maiores nesciunt a necessitatibus in tempora beatae deleniti suscipit corporis voluptatibus deserunt officiis totam est corrupti aliquid.</p>
                <button className='px-4 py-1 bg-white text-black rounded-sm font-semibold text-sm'>See Collections</button>
            </div>
        </div>
    </div>
  )
}

export default Collections