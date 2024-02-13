'use client'
import Image from 'next/image'
import Header from '@/components/header'
import About from '@/components/about'
import Nav from '@/components/nav'
import Skills from '@/components/skills'
import Portfolio from '@/components/portfolio'
export default function Home() {
  return (
    <>
      <section className='homePage'>
        <Header />
        <About />
        <Skills />
        <Portfolio />
        <Nav />
      </section>
    </>
  )
}
