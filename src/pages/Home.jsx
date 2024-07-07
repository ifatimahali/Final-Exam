import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
const Home = () => {
    const [products , setProducts] = useState([])
    const [search , setSearch] = useState("")

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res=> setProducts(res.data))
    } , [])

    const filteredUsers = products.filter(pro => 
        pro.title.toLowerCase().includes(search.toLowerCase()) 
    )

  return (
    <>
    <Navbar/>
    <div className='sea'>
    <input className='"w-full p-3 rounded-lg border-2  rounded-white border-[#EAB308] placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none' id="search" type="search" value={search} placeholder='search' onChange={(e)=> setSearch(e.target.value)}/>
    </div>
    <div className='continar'>
    {filteredUsers.map ((e)=> (
    <div className='card' key={e}>
     <h1><strong>{e.title}</strong> </h1>
     <div className='image'>
      <img src={e.image}/>
     </div>
     <div>
     <h3><strong>{e.price}$</strong></h3>
     </div>
     <div className='car-bt'>
     <Link to = {`/details/${e.id}`}>
     <button className='btn'>View Details</button>
     </Link>
     </div>
    </div>
    ))}
         
 </div>
 </>
  )
}

export default Home