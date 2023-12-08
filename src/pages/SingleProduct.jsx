import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaStar } from 'react-icons/fa';
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id} = useParams();
    // console.log(id)
    const [products,setProducts] = useState([])

    useEffect (()=>{
        const func = async()=>{
          try {
            const res = await fetch('/products.json')
            const data = await res.json();
            const product = data.filter((p) => p.id == id)
            
            setProducts(product[0])
            // console.log(product[0])
            
          } catch (error) {
            console.log(error)
          }
        }
        func();
        window.scrollTo({top:0, behavior:'smooth'})
      },[id])

      const {title,category,price,image,status}= products;
  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
        <div className='p-3 max-w-7xl m-auto '>
          <div className='mt-4'>
            <a href="/" className='text-black/75'>Home</a>
            <a href="/shop" className='font-bold'> / Shop</a>
          </div>
            <div className='mt-2 md:mt-4'>
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
                    <div>
                        <img src={image} alt="" className='w-full'/>
                    </div>
                    {/* pro details */}
                    <div>
                       <h1 className='title text-left'>{title}</h1>
                       <p className=' text-gray-500 text-sm leading-6 text-justify sm:text-left sm:mt-4 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, corrupti nesciunt ipsa quasi, tenetur porro minus error maxime velit adipisci et. Optio nam fugiat iusto, ad fugit nulla voluptates sint? Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
                       <span className='my-2 text-xl text-yellow-400 items-center gap-1    flex sm:my-4 '>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                       </span>
                       <p className='text-xl font-semibold text-red-500 sm:text-2xl'>${price}</p>
                       <div className=''>
                        <div className='text-left flex flex-col gap-2 w-full'>
                            <label className='font-semibold'>Quantity</label>
                            <input type="number" id="price" name='price ' defaultValue={1} required className='border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none m-0 rounded-md py-2 px-4 md:py-2 md:px-4 focus:border-red-500' />
                        </div>
                        <div className='w-full text-left'>
                          <button className='flex justify-center items-center gap-2 w-full py-2 px-4 bg-red-500 text-white font-bold border border-red-500 rounded ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500'><span className=''>Confirm Order</span><FaArrowAltCircleRight/></button>
                        </div>
                       </div>
                    </div>
                </div>
                <div className='mt-6'>
                  <p className='text-gray-600 text-justify'><span className='font-bold text-black capitalizie underline'>Details:</span>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit dolor ipsa sint at laudantium minima sunt quam, velit, harum culpa, quasi odit iste omnis aspernatur vel error animi quo. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non ipsam quaerat impedit enim assumenda voluptate hic blanditiis soluta odio. Unde, pariatur. Numquam at recusandae ipsa nobis quidem consectetur, cumque nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis debitis quae qui hic praesentium alias, labore ullam mollitia aliquam animi ab fugiat vel nihil quibusdam repellat numquam minus! Cum.</p>
                </div>

            </div>
        </div>
        

    </div>
  )
}

export default SingleProduct