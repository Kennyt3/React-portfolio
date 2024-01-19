import React from 'react'
// import './nav.css'
import { BiHomeHeart } from 'react-icons/bi'
import Link from 'next/link'
import { CgUserlane } from 'react-icons/cg'
import { BsPersonWorkspace, BsChatSquareDotsFill } from 'react-icons/bs'
import { MdWork } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav className='nav'>
      <Link
        href='#home'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <span className='nav-span'>Home</span>
        <BiHomeHeart />
      </Link>
      <Link href='#about' className={activeNav === '#about' ? 'active' : ''}>
        <span className='nav-span'>About</span>
        <CgUserlane />
      </Link>
      <Link href='#skills' className={activeNav === '#skills' ? 'active' : ''}>
        <span className='nav-span'>Experience</span>
        <BsPersonWorkspace />
      </Link>
      <Link
        href='#portfolio'
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <span className='nav-span'>Portfolio</span>
        <MdWork />
      </Link>
      <Link
        href='#contact'
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <span className='nav-span'>Contact</span>
        <BsChatSquareDotsFill />
      </Link>
    </nav>
  )
}

export default Nav
