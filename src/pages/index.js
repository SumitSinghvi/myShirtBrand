import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import Socialproofs from "../components/carosuels/Socialproofs"
import Maincarosuel from "../components/carosuels/Maincarosuel"
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
