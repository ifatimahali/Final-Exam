import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
    <div className="relative pt-6 pb-16 sm:pb-24">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="hidden md:flex md:space-x-10 list-none">
                <li>
                    <Link to="/home" className="text-base font-bold text-yellow-500  list-none hover:text-gray-900"
                        target="">Home</Link>
                </li>
                <li>
                    <Link to="/card" className="text-base font-bold text-yellow-500 list-none hover:text-gray-900"
                        target="_blank">Cart
                    </Link>
                </li>
                <li>
                    <Link to="/cheackout/:id" className="text-base font-bold text-yellow-500 list-none hover:text-gray-900"
                        target="_blank">Checkout
                    </Link>
                </li>
            </div>
            <div className="hidden gap-4 md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <div className="inline-flex  rounded-full shadow">
                    <div className="inline-flex items-center px-4 py-2 text-base font-bold text-black bg-yellow-500 border border-transparent rounded-full cursor-pointer font-base hover:bg-gray-50 ">
                    <Link to="/signup"> Sign up</Link>
                    </div>
                </div>
                <div className="inline-flex rounded-full shadow">
                    <div className="inline-flex items-center px-4 py-2 text-base font-bold text-black bg-yellow-500 border border-transparent rounded-full cursor-pointer font-base hover:bg-[#EAB308] ">
                    <Link to="/login"> Login </Link>
                    </div>
                </div>
            </div>
            
        </nav>
    </div>
</div>
  )
}

export default Navbar