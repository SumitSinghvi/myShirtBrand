import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/CategoryLayout/Hero'
import Filter from '../../components/CategoryLayout/Filter'
import ProductGrid from '../../components/CategoryLayout/ProductGrid'

export default function WorkShirts() {
  const products =[
    // Your product data here
    { id: 1, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5 },
    { id: 2, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5 },
    { id: 4, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5 },
    { id: 3, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5 },
    { id: 5, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5 },
    { id: 6, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5 },
    { id: 7, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5 },
    { id: 8, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5 },
    // Add more product objects as needed
  ];

  const hero = [
    { 
      img:"https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjIwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/cms/yrkesskjortor_2453665_1_header_.jpg",
      title:"Work shirts",
      description:"Elevate your professional attire with our custom-made shirts designed for priests and pilots. These work shirts prioritize both comfort and timeless style. You have the option to select from our pre-made designs or unleash your creativity using our shirt designer tool."
    },
  ]

  return (
    <div>
      <Layout>
        <Hero hero={hero}/>
        <Filter />
        <ProductGrid products={products}/>
      </Layout>
    </div>
  )
}

