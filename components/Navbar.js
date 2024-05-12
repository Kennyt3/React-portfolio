import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import logo from '@/public/img/logo12.png'
import Link from 'next/link'
export const NavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='flex py-[1rem] px-[5rem] max-lg:justify-between max-lg:px-[2rem] max-xsm:px-[1rem]'>
      <div className=' flex justify-center items-center'>
        <Link href='/' className='pointer'>
          <Image
            src={logo}
            alt={'logo'}
            width={70}
            height={70}
            className='max-xsm:w-[100px] max-xsm:h-[80px] rounded-[35px]'
          />
        </Link>
      </div>
      <ul className='flex-1 flex justify-center items-center gap-20 max-lg:hidden'>
        {NavLinks.map((item) => (
          <li key={item.label} className='nav-links'>
            <a
              href={item.href}
              className='font-montserrat leading-normal text-lg text-slate-gray'
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
    // <nav class='max-h-[10vh] max-w-[144rem] mx-auto p-4 py-3 border-b-1 border-blue-500 border-opacity-20 flex items-center justify-between'></nav>
  )
}

export default Nav
