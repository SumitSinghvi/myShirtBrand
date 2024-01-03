import React from 'react'

export default function Hero() {
  return (
    <div>
      <div className='bg-gray-100 flex justify-center items-center h-6 smallsizetext font-semibold tracking-widest'>
            <p>Shop Confidently with Our Fit Guarantee!</p>
      </div>
      <div className='relative'>
        <img src="https://rnd2.tailorstore.com/MTkyMHx8OTB8ZmZmZmZm/images%2Fcms%2Fovershirt-2x1-text.jpg-launch-major.jpg" alt="heroBanner" />
        <div className='absolute flex flex-col items-center justify-center bottom-8 left-0 right-0 gap-2'>
          <p className='text-lg tracking-wider text-white font-semibold'>Custom-made overshirts in wool</p>
          <button className='bg-green-800 text-white font-bold text-xs py-3 px-6'>EXPLORE COLLECTION</button>
        </div>
      </div>
    </div>
  )
}
