import React from 'react'

export default function Hero() {
  return (
    <div>
        <div className='bg-gray-100 flex justify-center items-center h-6 smallsizetext font-semibold tracking-widest'>
            <p>Shop Confidently with Our Fit Guarantee!</p>
        </div>
        <div className='relative'>
            <img src="https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjIwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/cms/2452774_header_business.jpg" alt="BusinessShirtheroBanner" />
            <div className='absolute flex flex-col items-center justify-center top-20 left-0 right-0 gap-2'>
                <p className='font-bold text-black text-3xl '>Business shirts</p>
                <hr className='border-b-2 border-black w-24 mt-2'></hr>
                <div className='uppercase text-[12px] flex mt-8 tracking-widest'>
                    <p>Dress Shirts &gt; </p>
                    <p>All Shirts &gt; </p>
                    <p>Business Shirts</p>
                </div>
                <p className='w-[600px] text-xs mt-4 tracking-wider text-center leading-5'>Dressed in one of our impeccable business shirts, you’ll feel comfortable, confident and ready for whatever the day brings. Button up a classic blue business dress shirt, or go all-in with a custom-monogram-cuff luxury business shirt. A perfect-fit business shirt immediately makes a lasting impact in interviews and pitch meetings.</p>
            </div>
        </div>
    </div>
  )
}
