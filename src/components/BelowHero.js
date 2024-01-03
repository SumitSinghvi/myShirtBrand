import { Link } from 'gatsby'
import React from 'react'

export default function BelowHero() {
  return (
    <div className='pt-6'>
        <p className='font-bold text-xl flex justify-center py-6'>Shop By Category</p>
        <div className='flex gap-4 justify-center pb-24'>            
            <Link to='/all-shirts'>
                <div className='relative h-80 w-60'>
                    <img className='object-cover w-full h-full' src="https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjEwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/catalog/2452791_2.jpg" alt="shirt" />
                    <div className='absolute bottom-4 left-0 right-0 flex justify-center text-white font-bold'>
                        <p>Shirts</p>
                    </div>
                </div> 
            </Link>
            <div className='relative h-80 w-60'>
                <img className='object-cover w-full h-full' src="https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjEwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/catalog/2453686_0.jpg" alt="shirt" />
                <div className='absolute bottom-4 left-0 right-0 flex justify-center text-white font-bold'>
                    <p>T-Shirts</p>
                </div>
            </div> 
            <div className='relative  h-80 w-60'>
                <img className='object-cover w-full h-full' src="https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjEwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/cms/category-polo-shirt-img-2453710_0.jpg" alt="shirt" />
                <div className='absolute bottom-4 left-0 right-0 flex justify-center text-white font-bold'>
                    <p>Pants</p>
                </div>
            </div> 
            <div className='relative  h-80 w-60'>
                <img className='object-cover w-full h-full' src="https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjEwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/catalog/2453704_2.jpg" alt="shirt" />
                <div className='absolute bottom-4 left-0 right-0 flex justify-center text-white font-bold'>
                    <p>Polo Shirts</p>
                </div>
            </div>
        </div>
    </div>
  )
}
