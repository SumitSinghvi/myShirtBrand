import React from 'react'

export default function Hero({hero}) {
  return (
    <div>
        <div className='bg-gray-100 flex justify-center items-center h-6 smallsizetext font-semibold tracking-widest'>
            <p>Shop Confidently with Our Fit Guarantee!</p>
        </div>
        <div className='relative'>
            <img src={hero[0].img} alt="BusinessShirtheroBanner" />
            <div className='absolute flex flex-col items-center justify-center top-20 left-0 right-0 gap-2'>
                <p className='font-bold text-black text-3xl '>{hero[0].title}</p>
                <hr className='border-b-2 border-black w-24 mt-2'></hr>
                <div className='uppercase text-[12px] flex mt-8 tracking-widest'>
                    <p>Dress Shirts &gt; </p>
                    <p>All Shirts &gt; </p>
                    <p>Business Shirts</p>
                </div>
                <p className='w-[600px] text-xs mt-4 tracking-wider text-center leading-5'>{hero[0].description}</p>
            </div>
        </div>
    </div>
  )
}
