'use client'

import React from 'react'
import Header from '@/components/Header'
import { useContextValue } from '@/context/userContext'
export default function Home() {
  const { colorTheme } = useContextValue()
  return (
    <section className='bg-color'>
      <Header />
    </section>
  )
}
