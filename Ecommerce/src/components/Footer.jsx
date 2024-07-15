import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){
    
    return (
        <footer className='bg-blue-950 border-y'>
            <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
                <div className='md:flex md:justify-between '>
                    <div className='mb-6 md:mb-0'>
                        <Link to="/" className="text-white text-2xl font-semibold cursor-pointer ">
                            eCommerce 
                        </Link>
                    </div>
    
                    <div className='grid grid-cols-2 gap-12 sm:gap-6 sm:grid-cols-3'>
                        <div>
                            <h2 className='mb-6 text-sm font-semibold text-white/60 uppercase'>Resources</h2>
                            <ul className='text-white/75 font-medium'>
                                <li className='mb-4'>
                                    <Link to="/" className='hover:underline'>
                                        Home
                                    </Link>
                                </li>
    
                                <li className='mb-4'>
                                    <Link to="/about" className='hover:underline'>
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                           <h2 className='mb-6 text-sm font-semibold text-white/60 uppercase'>Follow us</h2> 
                           <ul className='text-white/75 font-medium'>
                                <li className='mb-4'>
                                    <a href='#' className='hover:underline' target='_blank' >
                                        Instagram
                                    </a>
                                </li>
    
                                <li className='mb-4'>
                                    <Link to="/about" className='hover:underline'>
                                        Twitter
                                    </Link>
                                </li>
                            </ul>
                        </div>
    
                        <div>
                        <h2 className='mb-6 text-sm font-semibold text-white/60 uppercase'>Legal</h2> 
                           <ul className='text-white/80 font-medium'>
                                <li className='mb-4'>
                                    <Link to="#" className='hover:underline' >
                                        Privacy Policy
                                    </Link>
                                </li>
    
                                <li className='mb-4'>
                                    <Link to="/about" className='hover:underline'>
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <hr className='my-6 border-gray-200 sm:mx-auto lg:my-8'/>
    
            </div>
    
        </footer>
      );
    }
    
    