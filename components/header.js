import Link from 'next/link'
import bitty from '@/public/img/heroimg.webp'
import logo from '../public/img/gack.png'
import Image from 'next/image'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useContextValue } from '../context/userContext'
const Header = (page) => {
  const [scrolled, setScrolled] = useState(false)
  const {
    loggedIn,
    setUserInfo,
    setLoggedIn,
    logout,
    setShowMenu,
    showMenu,
    toggleScroll,
  } = useContextValue()
  useEffect(() => {
    const func = () => setScrolled(window.pageYOffset > 500)
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', func)
    }
    func()

    return () => {
      window.removeEventListener('scroll', func)
    }
  }, [])
  return (
    <>
      <header className='first'>
        <main className='xl:w-[50vw] mx-auto min-h-[85vh] grid items-center md:flex md:justify-between'>
          <div className='text-center'>
            <span>Hi there,</span>
            <h1>
              I am <span className='mercy'>Mercy Taiwo</span>
            </h1>
            <h2>A Software Developer</h2>
            <div className=' flex  gap-4 justify-center mt-5'>
              <button className='btn'>My Resume</button>
              <button className='btn btn-primary'>Say Hi</button>
            </div>
          </div>
          <Image src={bitty} className='w-[350px] h-[350px]' />
        </main>
      </header>
    </>
  )
}

export default Header
