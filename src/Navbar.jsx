import React from 'react'
import './index.css'
import whatappLogo from './assets/whatappLogo.svg'
import nigeriaFlag from './assets/nigeriaFlag.svg'


const Navbar = () => {
    
  return (
    <div className=' h-20 bg-gray-100 flex justify-around items-center '>
        <div className=' mr-9 flex justify-between hidden sm:hidden md:hidden lg:block xl:block'>
            <a className='mr-9 text-sm font-bold text-gray-500' href="">Cost calculator</a>
            <a className='mr-9 text-sm font-bold text-gray-500' href="">Discover Stores</a>
            <a className='mr-9 text-sm font-bold text-gray-500' href="">Track Orders</a>
        </div>
        <div className='flex justify-between mr-9 '>
            <p className='mr-9 text-sm font-bold text-gray-500'> <span className='hidden sm:hidden md:inline lg:inline xl:inline'>Need help? call</span>  <br/> <span className='text-blue-400'>+2347069000083</span>  <span className='hidden sm:hidden md:inline'>or</span><span className='text-blue-400'>+2349035000505</span> </p>
            <img  className='mr-9 ml-9' src={whatappLogo} />
            <div className=' ml-9 flex items-center border-gray-300 border rounded-3xl px-3 py-2'>
                <img className='mr-2' src={nigeriaFlag} alt="Nigeria logo" />
                <p>Nigeria</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar