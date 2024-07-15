import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

export default function SearchBar() {
    const [query, setQuery] = useState("");

    function searchProduct(query){


        setQuery("");
    }

  return (
    <div className='flex items-center relative'>
        <input type="text" placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} className={`border-[2px] border-red-300 transition-all duration-300 ease-in-out rounded focus:outline-none focus:border-red-600 mr-2 w-52 px-2 py-[3px] opacity-100`}/>
        <BiSearch onClick={searchProduct} className="w-6 h-auto cursor-pointer opacity-40 duration-200 hover:opacity-100 hover:text-yellow-600"/>
    </div>
  )
}
