import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import logo from '@/public/img/logo12.png'
import Link from 'next/link'
export const NavLinks = [
  { href: '#about', label: 'About', num: '00.' },
  { href: '#projects', label: 'Projects', num: '01.' },
  { href: '#contact', label: 'Contact', num: '02.' },
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
          <li className='w-[9rem] flex items-end gap-1 font-semibold '>
            <span className=' text-gray-600  text-[16px]  '>{item.num}</span>
            <a
              className='nav-links font-montserrat leading-normal text-lg text-slate-gray'
              href={item.href}
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
