import React from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Card = () => {
    const [products , setProducts] = React.useState([])
    const {id} = useParams();

    React.useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(res=> setProducts(res.data))
    } , [])

  return (
   <>
   <Navbar/>
   <div className='continar'>
    <div className='card'>
     <h1><strong>{products.title}</strong> </h1>
     <div className='image'>
      <img src={products.image}/>
     </div>
     <div>
     <h3><strong>{products.price}$</strong></h3>
     </div>
     <div className="relative inline-block text-left">
    <div className="group">
        <button type="button"
            className="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-black bg-[#EAB308] hover:bg-white focus:outline-none focus:bg-gray-700">
            Qty:
            <svg className="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>
        <div
            className="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> 1</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> 2</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> 3</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> 4</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> 5</a>

            </div>
        </div>
    </div>
</div>
     <div className='car-bt'>
     <Link to = {`/cheackout/${products.id}`}>
     <button className='btn'>Product to Checkout</button>
     </Link>
     </div>
    </div>         
 </div>
    </>
  )
}

export default Card