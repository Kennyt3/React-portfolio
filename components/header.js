import Link from 'next/link'
import bitty from '@/public/img/heroimg.webp'
import logo from '../public/img/gack.png'
import Image from 'next/image'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import CV from '@/public/img/mercy_taiwo.pdf'
import { FaGithub } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState, useEffect } from 'react'
import { useContextValue } from '../context/userContext'
import Typewriter from 'typewriter-effect'
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
        <div className='mx-auto h-full flex justify-center items-center'>
          <main className='dub-col-wrapper'>
            <div className='textDiv w-full mx-auto'>
              <span>Hi there!</span>
              <h1>
                I am <span className='mercy'>Mercy Taiwo</span>
              </h1>
              <h2>A Software Developer</h2>
              <p className='text-[#4db5ff]'>
                <Typewriter
                  options={{
                    strings: [
                      'I specialize in building web solutions and experiences for individuals and organizations.',
                      'I have experience working with a variety of programming languages and technologies',
                      'I am quick to adapt to new technologies quickly and a fast learner. ',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
              <div className=' flex  gap-4 justify-center mt-5'>
                <a href={CV} className='cta btn btn-2 btn-3' download>
                  Resume
                </a>
                <button className='btn btn-primary cta btn-2 btn-3'>
                  Say Hi
                </button>
              </div>
            </div>
            <div></div>
            <Image
              src={bitty}
              className=' mx-auto w-full md:w-[350px] md:h-[350px]'
            />
            <div className='social__links'>
              <a
                href='https://www.linkedin.com/in/mercy-taiwo-002b26131'
                target='_blank'
              >
                <FaLinkedin style={{ color: '#4db5ff', fontSize: '1.5em' }} />
              </a>
              <a href='https://twitter.com/mercyWritesCode' target='_blank'>
                <FaXTwitter style={{ color: '#4db5ff', fontSize: '1.5em' }} />
              </a>
              <a href='https://github.com/Kennyt3' target='_blank'>
                <FaGithub style={{ color: '#4db5ff', fontSize: '1.5em' }} />
              </a>
            </div>
            <a href='#contact' class='scroll'>
              Contact Me
            </a>
          </main>
        </div>
      </header>
    </>
  )
}

export default Header
