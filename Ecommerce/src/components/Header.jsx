import React, { useState } from "react";
import { BiCart, BiHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header(){

    return (
        <header className="bg-white/10 shadow mb-4">
            <div className="max-w-screen-xl mx-auto flex items-center px-3 py-5 justify-between">
                    
                <Link to="/" className="text-blue-600 text-2xl font-semibold cursor-pointer ">
                    eCommerce 
                </Link>

                <nav className="">
                    <ul className="flex justify-between gap-6 font-medium text-slate-800 text-base">
                        <li>
                            <Link to="/" className="duration-100 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600 py-1">Home</Link>
                        </li>

                        <li>
                            <Link to="/about" className="duration-100 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600 py-1">About</Link>
                        </li>

                        <li>
                            <Link to="/contact" className="duration-100 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600 py-1">Contact</Link>
                        </li>

                        <li>
                            <Link to="/blogs" className="duration-100 hover:text-yellow-600 hover:border-b-2 hover:border-yellow-600 py-1">Blogs</Link>
                        </li>
                    </ul>
                </nav>

                <div className="flex justify-between items-center gap-4">
                    <Link to="/cart">
                        <BiHeart className="w-6 h-auto cursor-pointer opacity-40 duration-200 hover:opacity-100 hover:text-yellow-600"/>
                    </Link>
                    <BiCart className="w-6 h-auto cursor-pointer opacity-40 duration-200 hover:opacity-100 hover:text-yellow-600"/>
                    <SearchBar />
                </div>
            </div>
        </header>
    );  
};