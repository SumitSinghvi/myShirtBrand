import React, { useState } from 'react'

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
    <nav>
        <div className='bg-black text-white uppercase h-4 smallsizetext flex justify-center gap-12'>
            <p>Perfect fit Assurance</p>
            <p>fast delivery</p>
            <p>custom fitting</p>
        </div>
        <div className='shadow-md relative z-10 flex justify-between px-10 py-4'>
            <div className='text-xs flex gap-8 text-gray-600 font-semibold'>
                <button className='hover:border-b-2 hover:border-black' onClick={toggleDropdown} onBlur={closeDropdown}>Shop</button>
                {isDropdownOpen && (
                <div className='absolute '>
                    <p>hi</p>
                </div>
                )}
                <button className='hover:border-b-2 hover:border-black'>Collections</button>
                
                <button className='hover:border-b-2 hover:border-black'>About</button>
            
            </div>
            <p className='font-semibold mr-24'>BARUCHE</p>
            <div className='flex gap-4 pt-1'>
                <i className="fas fa-user"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>
        <div className='bg-gray-100 flex justify-center items-center h-6 smallsizetext font-semibold tracking-widest'>
            <p>Shop Confidently with Our Fit Guarantee!</p>
        </div>
    </nav>
  )
}
