import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/CategoryLayout/Hero'
import Filter from '../../components/CategoryLayout/Filter'
import ProductGrid from '../../components/CategoryLayout/ProductGrid'

export default function BussinessShirts() {
  const [products, setProducts] = useState([
    // Your product data here
    { id: 1, name: 'Business Shirt 1', description: 'Description', price: 29.99 },
    // Add more product objects as needed
  ]);
  return (
    <div>
      <Layout>
        <Hero />
        <Filter />
        <ProductGrid products={products}/>
      </Layout>
    </div>
  )
}
