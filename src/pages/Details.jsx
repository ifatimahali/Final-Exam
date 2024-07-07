import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
const Details = () => {
    const [products , setProducts] = useState([])
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=> setProducts(res.data))
    } , [])

  return (
    <>
    <Navbar/>
    <div className='continar'>
       <div className="max-w-sm m-5 p-4 rounded overflow-hidden shadow-lg">
        <h1><strong>{products.title}</strong> </h1>
        <div className='image'>
         <img className='w-full' src={products.image}/>
        </div>
        <div className='font-bold text-xl mb-2'>
        <p className='text-gray-700 text-base'>{products.description}</p>
        <h3 className='px-6 py-4'>{products.price}</h3>
        </div>
        <div className='car-bt'>
        <Link to="/card">
        <button className='btn'> Add to card</button>
        </Link>
        <Link to="/">
        <button className='btn'>Back to Home Page</button>
        </Link>
        </div>
       </div>
            
    </div>
    </>
  )
}

export default Details