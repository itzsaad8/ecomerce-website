import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';



const BestSellers = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>{
       
            
          fetch("products.json").then(res => res.json()).then(data => setProducts(data))
       
    },[])
    const bestseller =  products.filter((item) => item.status === "Best Selers")
    // console.log(bestseller)
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 '>
        <div className='text-center'>
           <h2 className='title'>Best Seller</h2>
           <p className='text-black/60 capitalize md:w-2/3 mx-auto mb-8 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus impedit aut voluptatibus laborum, saepe quam explicabo, autem praesentium ipsam .</p>
        </div>

        {/* slider for best seller products */}
        <div className='mb-16'>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >

        {
            bestseller.map((product) => (
                <SwiperSlide key={product.id}>
                                    <Link to={`/shop/${product.id}`}>
                    <img src={product.image} alt="" className='mx-auto w-full hover:scale-105 transition-all duration-300'/>
                </Link>
                <div className='mt-4 px-4'>
                    <h4 className='text-base font-semibold mb-2'>{product.title}</h4>
                </div>
                <div className='flex justify-between'>
                    <p className='text-black/50'>{product.category}</p>
                    <p className='font-semibold'>${product.price}</p>
                </div>
                </SwiperSlide>
            ))
        }


      </Swiper>
        </div>
    </div>
  )
}

export default BestSellers