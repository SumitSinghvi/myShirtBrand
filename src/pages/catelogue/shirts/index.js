import React, { useState } from 'react'
import Layout from '../../../components/Layout'

export default function Index() {
    
    const [dropDown,setDropDown] = useState(false);
    const toggleDropDown = () => {
        setDropDown(prev => !prev);

    };

  return (
    <div>
      <Layout>
        <div className='bg-gray-100 flex justify-center items-center h-6 smallsizetext font-semibold tracking-widest'>
                <p>Shop Confidently with Our Fit Guarantee!</p>
        </div>
        <div className='grid grid-cols-2'>
            <div>
                <img src="https://images.tailorstore.com/YToxOntzOjU6IndpZHRoIjtpOjk2MDt9/images%252Fcatalog%252F2452454_1.jpg" alt="product"></img>
            </div>
            <div>
                <p className='text-xs text-grey-400 mx-6 my-2'>HOME &gt;&gt; ALL OVERSHIRTS &gt;&gt;</p>
                <p className='text-3xl font-semibold mx-6'>Gray overshirt</p>
                <p className='text-sm mx-6 my-1'>Leighton, light gray</p>
                <p className='text-sm my-4 mx-6'>$ 149</p>
                <p className='w-[700px] mx-6 text-xs my-4 tracking-wider leading-5'>Step into a world of elegance with Leighton. Enjoy the breathability and temperature-regulating qualities that only 100% wool can offer. This overshirt features a reverse collar, two front pockets, a center back fold and a semi-straight hemline offering a modern and clean silhouette.</p>
                <button className='bg-black text-white mx-6 px-4 py-2 uppercase text-sm'>choose size</button>
                <p className='text-xs mx-6 my-4'>&gt; Free Shipping &gt; 30 days Alteration Period &gt; Fit Guarrantee</p>
                <button onClick={toggleDropDown} className={`border border-black mx-6 mt-4 w-[680px] text-start py-2 px-4 ${!dropDown ? '' : 'border-b-0'}`}>Product features</button>
                {dropDown && (
                <p className='border border-black mx-6 w-[680px] text-start px-4 py-4 text-sm border-t-0 font-semibold'>Collar <span className='underline font-medium'>Cuban</span></p>
                )}
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='text-2xl font-semibold'>Leighton, light gray</p>
                <hr className='border border-black my-4 w-24'></hr>
                <p className='text-sm'>100 % Wool</p>
                <p className='my-6 mx-6 text-center text-xs'>Glen check twill weave in shades of gray. 100% wool combines softness and a natural breathability.</p>
            </div>
            <div>
                <img src="https://images.tailorstore.com/YTo2OntzOjU6IndpZHRoIjtpOjkwMDtzOjY6ImhlaWdodCI7YjowO3M6NjoiY3JvcF94IjtpOjE7czo2OiJjcm9wX3kiO2k6MjA7czo2OiJjcm9wX3ciO2k6OTg7czo2OiJjcm9wX2giO2k6NjA7fQ%3D%3D/images/catalog/3946%20-%20Tempelmore%2C%20light%20gray.jpg" alt="fabric"></img>
            </div>
        </div>
      </Layout>
    </div>
  )
}
