import React from 'react'

export default function Hero() {
  return (
    <div className="relative">
        <img src="/sexyman.jpg" alt="Background" className="w-full h-auto" style={{ maxWidth: '100%', height: 'auto' }}></img>
        <discount className="absolute top-0 left-0 right-0 bg-black bg-opacity-60 h-8 flex items-center justify-center px-8">
                <p className="text-gray-200 perfectfit text-xs tracking-widest">
                    <span className="cursor-pointer"> 25% Off Wedding Tailoring - Limited Time Only - Orders Of 2 Or More Suits </span>
                </p>
        </discount>
        <div className="absolute inset-0 text-white flex flex-col justify-center items-center py-16 mt-20">
            <p className="text-xl tracking-widest mt-24">THE STITCH UP SALE</p>
            <hr className="border-t border-white w-3/4 mb-8 mt-2"></hr>
            <p className="text-6xl font-Baskerville">20 % Off Storewide & Sitewide</p>
            <p className="mt-2 text-xl">USE CODE: <span style={{ fontWeight: "bold" }}>STITCH20</span></p>
            <div className="mt-8 flex">
                <button className="border mr-4 px-16 py-1 text-sm transition-all duration-300 hover:bg-white hover:text-black">SHOP DEAL</button>
                <button className="border px-6 py-1 text-sm transition-all duration-300 hover:bg-white hover:text-black">BOOK APPOINTMENT</button>
            </div>
        </div>
    </div>
  )
}
