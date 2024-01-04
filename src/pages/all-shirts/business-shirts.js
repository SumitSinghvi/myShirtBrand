import React from 'react'
import Layout from '../../components/Layout'
import Hero from '../../components/CategoryLayout/Hero'
import Filter from '../../components/CategoryLayout/Filter'
import ProductGrid from '../../components/CategoryLayout/ProductGrid'

export default function BussinessShirts() {
  const products = [
    // Your product data here
    { id: 1, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5, link:"/catelogue/shirts/", },
    { id: 2, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5, link:"/catelogue/shirts/", },
    { id: 4, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5, link:"/catelogue/shirts/", },
    { id: 3, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5, link:"/catelogue/shirts/", },
    { id: 5, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5, link:"/catelogue/shirts/", },
    { id: 6, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5, link:"/catelogue/shirts/", },
    { id: 7, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5, link:"/catelogue/shirts/", },
    { id: 8, img:'https://rnd2.tailorstore.com/MTAyNHx8OTB8ZmZmZmZm/images/catalog/2452852_2.jpg' ,name: 'Chester, gray and blue', description: 'Blue checkered business shirt', price: 29.99, rating:4.8/5, link:"/catelogue/shirts/", },
    // Add more product objects as needed
  ];

  const hero = [
    { 
      img:"https://images.tailorstore.com/YToyOntzOjU6IndpZHRoIjtzOjQ6IjIwMDAiO3M6NjoiaGVpZ2h0IjtzOjA6IiI7fQ%3D%3D/images/cms/2452774_header_business.jpg",
      title:"Business shirts",
      description:"Dressed in one of our impeccable business shirts, you’ll feel comfortable, confident and ready for whatever the day brings. Button up a classic blue business dress shirt, or go all-in with a custom-monogram-cuff luxury business shirt. A perfect-fit business shirt immediately makes a lasting impact in interviews and pitch meetings.",
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
