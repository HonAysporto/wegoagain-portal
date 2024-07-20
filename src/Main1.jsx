import React from 'react'
import printivoMainImage from './assets/printivoMainImage.png'

const Main1 = () => {
  return (
    <>
    <div className='flex justify-between items-center pt-9 bg-red-100 pl-9 h-96'>
        <div className='flex flex-col ml-9 mr-9 '>
        <h1 className='text-6xl font-bold text-gray-700 mb-4'>Quality Prints</h1>
        <p className='text-2xl font-bold text-gray-400 mb-9'>Shipped to your doorstep</p> 
        <p className='font-bold text-gray-700 mb-2'>What would you like to print today?</p>
        <div>
            <input className='bg-white h-20 mb-9 w-full p-5' type="text" placeholder='Search for Business cards, T-shirts, Mugs, etc'/>
        </div>
        </div>
        
        <img className='w-96 hidden sm:hidden md:inline' src={printivoMainImage} alt="" />
        </div>
    </>
  )
}

export default Main1