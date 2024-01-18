'use client'
import Image from 'next/image'
import Header from '@/components/header'
import Hero from '@/components/hero'
export default function Home() {
  return (
    <>
      <section className='first'>
        <Header />
        <Hero />
      </section>
    </>
  )
}
