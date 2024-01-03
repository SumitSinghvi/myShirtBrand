import React from 'react'

export default function Filter() {
  return (
    <div className='py-10 px-16'>
      <div className='flex'>
        <button className='border border-grey-600 p-4 w-[400px] text-left'>Category <span></span> </button>
        <button className='border border-grey-600 p-4 w-[400px] text-left'>Price range</button>
        <button className='border border-grey-600 p-4 w-[400px] text-left'>Colour</button>
        <button className='border border-grey-600 p-4 w-[400px] text-left'>Pattern</button>
        <button className='border border-grey-600 p-4 w-[400px] text-left'>Sort</button>
      </div>  
    </div>
  )
}
