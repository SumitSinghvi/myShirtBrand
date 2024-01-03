import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/CategoryLayout/Hero'
import Filter from '../../components/CategoryLayout/Filter'
import ProductGrid from '../../components/CategoryLayout/ProductGrid'

export default function Home() {
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
      img:"https://rnd2.tailorstore.com/MTkyMHx8OTB8ZmZmZmZm/images%2Fcms%2Falla_skjortor_2452802_1_header.jpg",
      title:"All shirts",
      description:"Get inspired by our selection of pre-designed dress shirts, all with your unique fit to them. Grab them as they are or customize to your needs using our design tool. Discover the superior quality in a custom-made dress shirt easy, fast and customized to your wishes."
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

