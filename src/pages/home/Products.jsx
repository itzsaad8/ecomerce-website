import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../components/Cards'

const Products = () => {
  const [products,setProducts] =useState([])
  const [filtereditem,setFilterditem]= useState([])
  const [selected,setSelected] = useState('all')
  const [sortoption,setSortoption] = useState('default')
  useEffect(()=>{
    const func = async()=>{
      try {
        const res = await fetch('/products.json')
        const data = await res.json();
        setProducts(data)
        setFilterditem(data)
        
      } catch (error) {
        console.log(error)
      }
    }
    func();
    
  },[])

  console.log(products)
  //  filter functionality
  const filteritem = (category) => {
           const filtered = category === "all" ? (products) : products.filter((item) =>item.category === category
           )
           setFilterditem(filtered);
           setSelected(category)

  }
  //All products
  const showall = () =>{
    setFilterditem(products);
    setSelected("all");
  }

  // sortin 
  const handlesortchange = (option) =>{
    setSortoption(option);
    //logic 
    let sorteditem = [...filtereditem];


    switch (option) {
      case "A-Z":
        sorteditem.sort((a,b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
          sorteditem.sort((a,b) => b.title.localeCompare(a.title));
          break;
      case "low-to-high":
        sorteditem.sort((a,b) => a.price - b.price);
        break;
     case "high-to-low":
          sorteditem.sort((a,b) => b.price - a.price);
          break;
      default:
        break;
    }
    setFilterditem(sorteditem)

  }






    
  return (
   <div>

    <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12'>
       <h2 className='title'>or subscribe to the news letter</h2>

       {/* cards */}
       <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
        <div className='flex space-x-2 md:items-center md:gap-2 gap-2 flex-wrap'>
            <button onClick={showall}>All Products</button>
            <button onClick={() => filteritem("Dress")}>Clothing</button>
            <button onClick={() => filteritem("Hoodies")}>Hoddies</button>
            <button onClick={() => filteritem("Bag")}>Bags</button>
        </div>
        {/* filter */}
        
        <div className='flex justify-end mb-4 rounded-sm' >
            <div className='bg-black p-2'>
            <FaFilter className='text-white w-4 h-4 mt-1  '/>
             
            </div>
            <select
            id="sort"
            onChange={(e) => handlesortchange(e.target.value)}
            value={sortoption}
             className='bg-black text-white px-2 py-1 rounded-sm'>
                <option value="default">Default</option>
                <option value="A-Z">A-Z</option>
                <option value="Z-A">Z-A</option>
                <option value="low-to-high">Low To High</option>
                <option value="high-to-low">High To Low</option>
            </select>
        </div>
       </div>
       <Cards productsfilter={filtereditem}/> 
    </div>
    </div>
  )
}

export default Products