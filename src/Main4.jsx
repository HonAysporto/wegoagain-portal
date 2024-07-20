import React from 'react'
import sponsors from './assets/sponsors.png'

const Main4 = () => {
  return (
    <>
        <div className='pl-9 mb-9'>
            <h1 className='font-bold text-gray-700 text-3xl ml-9'>Nigeria’s No. 1 online print shop 👑</h1>
            <p className='text-gray-500 text-lg font-bold w-full sm:w-4/5 md:w-4/5 lg:w-1/2 max-w-2/3 pl-9 sm:text-sm md:text-lg lg:text-lg mt-5 mb-5 '>Our print services and solutions are trusted by these brands and over 15,000 other businesses in Nigeria.</p>
            <img className='pl-9' src={sponsors} alt="" />
        </div>
    </>
  )
}

export default Main4