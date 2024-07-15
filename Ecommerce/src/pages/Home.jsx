import React from "react";
import useProduct from "../hooks/useProduct";
import ProductItem from "../components/ProductItem";
import Hero from "../components/Hero";


export default function Home(){
    const products = useProduct();

    return(
        <div className="max-w-screen-xl min-h-[52vh] mx-auto my-6 mb-20">
            
            {
                products.length !== 0 ?  
                <>
                    <div>
                        <Hero products = {products[3]}/>
                    </div>
                    <div className="">
                        <h3 className="text-xl text-gray-700 font-medium my-3">Featured Product</h3>
                    <div className="grid grid-cols-5 gap-4 gap-y-6">

                    {
                        products.map((pro) => (
                            <ProductItem pro ={pro} />
                        ))
                    }
                    </div>
                    </div>
                </> 
                : <div className="text-center flex items-center justify-center h-full text-7xl p-3 m-6 text-black/35">No data found</div>
            }
        </div>
    )
}