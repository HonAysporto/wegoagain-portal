import React from 'react'
import Main2card from './Main2card'

const Main3 = () => {
  return (
    <>
        <div className='mt-9 pt-4 pb-9 pl-9'>
            <div className='flex justify-between items-center mr-9'>
                <h1 className='ml-9 text-2xl font-bold text-gray-700'>Popular Categories</h1>
                <p className='mr-9 text-orange-400 font-bold'>See all Categories</p>
            </div>
            <div className='mt-9 pl-9 flex flex-wrap'>
                    <Main2card/>
                    <Main2card/>
                  

            </div>
        </div>
    </>
  )
}

export default Main3