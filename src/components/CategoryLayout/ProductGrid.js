import { Link } from 'gatsby'
import React from 'react'

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-3 gap-4 px-12">
      {products.map((product) => (
          <div key={product.id} className='pb-12'>
            <Link to={product.link}>
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover mb-4"
              />
              <div className='flex justify-between'>
                <div className='flex flex-col'>
                  <h2 className="text-xs font-bold mb-2">{product.name}</h2>
                  <p className="text-[12px]">{product.description}</p>
                </div>
                <p className="text-xs pt-1.5 h-8 px-4 border border-black ">$ {product.price}</p>
              </div>
            </Link>
          </div>
      ))}
    </div>
  )
}
