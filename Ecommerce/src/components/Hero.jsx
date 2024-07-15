import React from 'react'

export default function Hero({products}) {
  return (
    <div className='flex justify-between mb-5 items-center p-2'>
        <div className='w-full flex flex-col gap-5'>
            <p className='text-black font-[500]'>${products.price}</p>
            <h2 className='text-4xl text-blue-800 font-semibold'>{products.title}</h2>
            <p>{products.description}</p>
            <div>
                <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[16px] py-1.5 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in'>Order Now</button>
            </div>
        </div>

        <div className='w-full flex items-center justify-center'>
            <img src={products.image} alt="" className='w-80' />
        </div>
    </div>
  )
}
