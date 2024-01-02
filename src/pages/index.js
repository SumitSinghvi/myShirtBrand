import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import Socialproofs from "../components/carousels/Socialproofs"
import Maincarosuel from "../components/carousels/Maincarousel"
import Secondhero from "../components/Secondhero"

export default function Home() {
  return(
  <>
  <Layout>
    <Hero />
    <Secondhero />  
     <Socialproofs />
     <Maincarosuel />
    <Newsletter />
  </Layout>
  </>
)}
