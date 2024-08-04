'use client'

import React from 'react'
import Header from '@/components/Header'
import { useContextValue } from '@/context/userContext'
import Body from '@/components/body'
export default function Home() {
  const { colorTheme } = useContextValue()
  return <Body />
}
