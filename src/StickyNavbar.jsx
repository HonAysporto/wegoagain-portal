import React from 'react'
import printivo from './assets/printivo.svg'
import cart from './assets/cart.svg'

const StickyNavbar = () => {
  return (
    <div className='flex justify-between items-center bg-red-100 h-20 sticky top-0 pl-9'>
        <img className='mr-9 ml-9 sm:w-32 md:w-32 w-24 lg:w-32' src={printivo} alt="Printivo" />
        <div className='flex items-center ml-9 mr-9'>
            <a className='mr-7 text-md font-bold text-gray-500 hidden sm:hidden md:hidden lg:inline xl:inline' href="">All products</a>
            <a className='mr-7 text-md font-bold text-gray-500 hidden sm:hidden md:hidden lg:inline xl:inline' href="">Become a Reseller</a>
            <a className='mr-7 text-md font-bold text-gray-500 hidden sm:hidden md:hidden lg:inline xl:inline' href="">Merch Store</a>
            <a className='mr-7 text-md font-bold text-gray-500 hidden sm:hidden md:hidden lg:inline xl:inline' href="">Marketplace</a>
            <a className='mr-7 text-md font-bold text-orange-400 ml-5' href="">Sign in</a>
            <a className='mr-7 text-md font-bold text-gray-500 sm:hidden md:hidden hidden lg:inline xl:inline' href="">Create Account</a>
            <img className='mr-9'  src={cart} alt="cart" />
        </div>
    </div>
  )
}

export default StickyNavbar