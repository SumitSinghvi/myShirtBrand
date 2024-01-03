import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown';

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownElement, setDropdownElement] = useState('');

    const toggleDropdown = (element) => {
        if(dropdownElement === '' || dropdownElement === element) {
            setIsDropdownOpen(prev => !prev);
        }          
        setDropdownElement(element)
    };

    useEffect(() => {
        const navSecondDiv = document.getElementById('navseconddiv');
        if (isDropdownOpen) {
          navSecondDiv.classList.remove('shadow-md');
          navSecondDiv.classList.add('shadow-sm');
        } else {
          navSecondDiv.classList.remove('shadow-sm');
          navSecondDiv.classList.add('shadow-md');
        }
        }, [isDropdownOpen]);

    return (
    <nav className='bg-white sticky top-0 z-10'>
        <div className='bg-black text-white uppercase h-4 smallsizetext flex justify-center gap-12'>
            <p>Perfect fit Assurance</p>
            <p>fast delivery</p>
            <p>custom fitting</p>
        </div>
        <div id="navseconddiv" className='shadow-md relative z-10 flex items-center justify-center px-10 py-4'>
            <div className='text-xs flex gap-8 text-gray-600 font-semibold flex-1 mr-auto'>
                <button className='hover:border-b-2 hover:border-black' onClick={() => { toggleDropdown('Shop') }}>Shop</button>
                <button className='hover:border-b-2 hover:border-black' onClick={() => { toggleDropdown('Collections') }}>Collections</button>
                <button className='hover:border-b-2 hover:border-black' onClick={() => { toggleDropdown('About') }}>About</button>
            </div>
            <p className='font-semibold flex-1'>BARUCHE</p>
            <div className='flex gap-4 ml-auto items-center justify-center'>
                <i className="fas fa-user"></i>
                <i className="fas fa-heart"></i>
                <i className="fas fa-shopping-cart"></i>
            </div>
        </div>
        <div>
            {isDropdownOpen && (<Dropdown whichelement={dropdownElement}/>)}
        </div>
    </nav>
  )
}
