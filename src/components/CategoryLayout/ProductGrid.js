import React from 'react'

export default function ProductGrid({ products }) {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id} className="product">
          {/* Display product information */}
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          {/* Additional product details */}
        </div>
      ))}
    </div>
  )
}
