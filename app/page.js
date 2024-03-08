'use client'

import React from 'react'
import { useContextValue } from '@/context/userContext'
export default function Home() {
  const { colorTheme } = useContextValue()
  return (
    <div className={`${colorTheme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
      <section className=''>

      </section>
    </div>
  )
}
