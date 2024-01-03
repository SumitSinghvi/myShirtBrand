import * as React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Newsletter from "../components/Newsletter"
import BelowHero from "../components/BelowHero"

export default function Home() {
  return(
  <>
  <Layout>
    <Hero />
    <BelowHero />
    <Newsletter />
  </Layout>
  </>
)}
