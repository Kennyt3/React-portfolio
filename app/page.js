'use client'
require('dotenv').config()
import Image from 'next/image'
import Hero from '@/components/hero'
import About from '@/components/about'
import Nav from '@/components/nav'
import Resume from '@/components/resume'
import Contact from '@/components/contact'
import Portfolio from '@/components/portfolio'
export default function Home() {
  return (
    <>
      <div className='homePage'>
        <main>
          <Hero />
          <About />
          <Resume />
          <Portfolio />
          <Contact />
          <Nav />
        </main>
      </div>
    </>
  )
}
