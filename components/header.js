import Link from 'next/link'
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
      <header>
        <div className='containerm header'>
          <Link href='/' className='text-4xl design text-primary800 font-bold'>
            {/* <Image src={logo} alt='logo' width={70} height={70} /> */}
            Kennyt
          </Link>
          <div className='navbar'>
            <ul className='nav-list'>
              <li>
                <Link href='#about'>About</Link>
              </li>

              <li>
                <Link href='#projects'>Projects</Link>
              </li>
              <li>
                <Link href='#contact'>Contact</Link>
              </li>
            </ul>
          </div>
          <div className='menu'>
            <AiOutlineMenu size={25} onClick={toggleScroll} />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
