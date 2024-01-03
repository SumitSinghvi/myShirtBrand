import React, { useState } from 'react'

export default function Filter() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [whichElement, setWhichElement] = useState('');

  const toggleDropdown = (element) => {
    setShowDropdown(!showDropdown);
    setWhichElement(element)
  };
  return (
    <div className='py-10 px-16'>
      <div className='flex'>
        <button onClick={() => {toggleDropdown('Category')}} className='border border-grey-600 p-4 w-[400px] text-left'>Category <span className='ml-24'><i className="fas fa-caret-right"></i></span> </button>
        {showDropdown && (
        <div className='absolute top-12 left-0'>
          <p className='text-2xl'>{whichElement}</p>
        </div>
        )}
        <button onClick={() => {toggleDropdown('Price')}} className='border border-grey-600 p-4 w-[400px] text-left'>Price range <span className='ml-20'><i className="fas fa-caret-right"></i></span></button>
        <button onClick={() => {toggleDropdown('Colour')}} className='border border-grey-600 p-4 w-[400px] text-left'>Colour <span className='ml-28'><i className="fas fa-caret-right"></i></span></button>
        <button onClick={() => {toggleDropdown('Pattern')}} className='border border-grey-600 p-4 w-[400px] text-left'>Pattern <span className='ml-28'><i className="fas fa-caret-right"></i></span></button>
        <button onClick={() => {toggleDropdown('Sort')}} className='border border-grey-600 p-4 w-[400px] text-left'>Sort <span className='ml-32'><i className="fas fa-caret-right"></i></span></button>
      </div>  
    </div>
  )
}
