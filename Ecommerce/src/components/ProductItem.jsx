import React from 'react'

export default function ProductItem({pro}) {
  return (
    <div key={pro.id} className="px-2 border cursor-pointer pt-2 pb-6">
        <div className="flex items-center justify-center p-2">
            <img src={pro.image} alt="" className="bg-black w-56 h-56 bg-cover border" />
        </div>
        <div className='p-2 flex flex-col gap-2 '>
            <p className='text-gray-700 font-semibold text-lg text-left w-40 mt-1 truncate'>{pro.title}</p>
            <p className='font-bold'>${pro.price}</p>
            <div>
                <button className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in'>Order Now</button>
            </div>
        </div>
    </div>
  )
}
