'use client'
require('dotenv').config()
import Image from 'next/image'
import Header from '@/components/header'
import About from '@/components/about'
import Nav from '@/components/nav'
import Resume from '@/components/resume'
import Contact from '@/components/contact'
import Portfolio from '@/components/portfolio'
export default function Home() {
  return (
    <>
      <section className='homePage'>
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Nav />
      </section>
    </>
  )
}
