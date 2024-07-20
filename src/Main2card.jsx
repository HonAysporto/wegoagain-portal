import React from 'react'
import printivoMainImage from './assets/printivoMainImage.png'

const Main2card = () => {
  return (
    <>


<div class="min-w-64  sm:w-full md:w-1/5 lg:w-1/5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-9 mb-6">
    <a href="#">
        <img class="rounded-t-lg" src={printivoMainImage} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-4 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Two-sided Business Cards</h5>
        </a>
        <p class="mb-3 font-bold text-sm text-gray-500">STARTING AT</p>
        <p class="mb-3 font-bold text-sm text-gray-600"><span className='text-lg text-gray-900'>₦15,100 </span>per 100</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

    </>
  )
}

export default Main2card