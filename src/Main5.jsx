import React from 'react'
import twitter from './assets/twitter.svg'

const Main5 = () => {
  return (
    <>
        <div className='bg-blue-100 mt-9 pt-9 pl-9 pb-9'>
            <h1 className='ml-9 mt-9 text-3xl font-bold text-gray-600 mb-9'>What Customers Say About Us 🙌🏾</h1>
            <div className='flex flex-wrap'>
            
            <div className='ml-9 flex items-top md:w-1/3 sm:w-1/2 lg:w-1/4 bg-white pt-5 pb-7 mb-5'>
                <div ><img className='w-6 border m-3 mr-4 p-1 rounded-full' src={twitter} alt="" /></div>
                <div className='pl-2 w-3/4'>
                    <div>
                        <p className='text-sm mb-2'>Amina Ebele <span className='text-blue-400'> @DeliciousAmina</span></p>
                        
                    </div>
                    <div className='text-sm'>
                    I am now the unofficial <span className='text-blue-400'>@Printivo</span> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!
                    </div>
                </div>
            </div>

            <div className='ml-9 flex items-top md:w-1/3 sm:w-1/2 lg:w-1/4  bg-white pt-5 pb-7 mb-5'>
                <div ><img className='w-6 border m-3 mr-4 p-1 rounded-full' src={twitter}  /></div>
                <div className='pl-2 w-3/4'>
                    <div>
                        <p className='text-sm mb-2'>Amina Ebele <span className='text-blue-400'> @DeliciousAmina</span></p>
                        
                    </div>
                    <div className='text-sm'>
                    I am now the unofficial <span className='text-blue-400'>@Printivo</span> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!
                    </div>
                </div>
            </div>

            <div className='ml-9 flex items-top md:w-1/3 sm:w-1/2 lg:w-1/4   bg-white pt-5 pb-7 mb-5'>
                <div ><img className='w-6 border m-3 mr-4 p-1 rounded-full' src={twitter} alt="" /></div>
                <div className='pl-2 w-3/4'>
                    <div>
                        <p className='text-sm mb-2'>Amina Ebele <span className='text-blue-400'> @DeliciousAmina</span></p>
                        
                    </div>
                    <div className='text-sm'>
                    I am now the unofficial <span className='text-blue-400'>@Printivo</span> ambassador. What these guys just pulled to ensure I got my menu cards today is stunning!
                    </div>
                </div>
            </div>
            </div>
  
        </div>
    </>
  )
}

export default Main5