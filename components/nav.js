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
        href='/#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <span className='nav-span'>Home</span>
        <BiHomeHeart />
      </Link>
      <Link
        href='/#about'
        onClick={() => setActiveNav('about')}
        className={activeNav === 'about' ? 'active' : ''}
      >
        <span className='nav-span'>About</span>
        <CgUserlane />
      </Link>
      <Link
        href='/#resume'
        onClick={() => setActiveNav('resume')}
        className={activeNav === 'resume' ? 'active' : ''}
      >
        <span className='nav-span'>Resume</span>
        <BsPersonWorkspace />
      </Link>
      <Link
        href='/#portfolio'
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <span className='nav-span'>Portfolio</span>
        <MdWork />
      </Link>
      <Link
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <span className='nav-span'>Contact</span>
        <BsChatSquareDotsFill />
      </Link>
    </nav>
  )
}

export default Nav
