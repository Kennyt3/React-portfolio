import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import logo from '@/public/img/logo.png'
export const NavLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='flex px-[2.5rem] max-lg:justify-between max-lg:px-[2rem] max-xsm:px-[1rem] '>
      <div>
        <Image
          src={logo}
          alt={'logo'}
          width={125}
          height={125}
          className='max-xsm:w-[100px] max-xsm:h-[100px]'
        />
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
  )
}

export default Nav
