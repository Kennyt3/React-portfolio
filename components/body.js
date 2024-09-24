import React, { useState, useEffect } from 'react'
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaMenu,
} from 'react-icons/fa6'
import Header from './Header'
import About from './about'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'
import { useContextValue } from '@/context/userContext'
export const navItem = [
  { name: 'ABOUT', id: 'about' },
  { name: 'EXPERIENCE', id: 'experience' },
  { name: 'PROJECTS', id: 'projects' },
  { name: 'CONTACT', id: 'contact' },
]

export const icon = [
  {
    icon: <FaGithub className='icon' size={20} />,
    name: 'Github',
    link: 'https://github.com/Kennyt3',
  },
  {
    icon: <FaLinkedin className='icon' size={24} />,
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/mercy-taiwo-002b26131',
  },
  {
    icon: <FaXTwitter className='icon' size={24} />,
    name: 'Twitter',
    link: 'https://twitter.com/mercyWritesCode',
  },
  {
    icon: <FaInstagram className='icon' size={24} />,
    name: 'Instagram',
    link: 'https://www.instagram.com/taiwomercykehinde/',
  },
]

const Body = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeId, setActiveId] = useState('')
  const [selectedId, setSelectedId] = useState('')

  useEffect(() => {
    setSelectedId('about')
  }, [])
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      let current = ''
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.pageYOffset >= sectionTop - 60) {
          current = section.getAttribute('id')
        }
      })
      setSelectedId('')
      setActiveId(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const { toggleMenu, showMenu } = useContextValue()
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className='relative'>
      <Header />
      {showMenu ? (
        <div className='mx-auto min-h-screen max-w-screen-xl px-6 pt-28 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'></div>
      ) : (
        <>
          <div className='mx-auto min-h-screen max-w-screen-xl px-6 pt-28 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
            <div className='lg:flex lg:justify-between lg:gap-4'>
              <section
                className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'
                id='home'
              >
                <div>
                  <h1 className='text-4xl font-bold tracking-tight  sm:text-5xl'>
                    <a href='#' className='headingText'>
                      Mercy K. Taiwo
                    </a>
                  </h1>
                  <h2 className='mt-3 text-lg font-medium tracking-tight sm:text-xl'>
                    Frontend Engineer
                  </h2>
                  <p className='mt-4 max-w-xs leading-normal'>
                    I create digital experiences that fuel business growth and
                    captivate target audience.
                  </p>
                  <nav
                    className='nav hidden lg:block'
                    aria-label='In-page jump links'
                  >
                    <ul className='mt-16 w-max'>
                      {navItem.map((item, index) => (
                        <li key={index}>
                          <a
                            className='group flex items-center py-3'
                            href={`#${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                          >
                            <span
                              className={`nav-indicator  mr-4 h-px w-10 bg-accentPrimary transition-all group-hover:w-20 group-hover:bg-textPrimary group-focus-visible:w-20 group-focus-visible:bg-textPrimary motion-reduce:transition-none ${
                                activeId === item.id || selectedId === item.id
                                  ? 'bg-textPrimary w-20'
                                  : ''
                              }  ${
                                item.id === 'about' && activeId === 'home'
                                  ? 'bg-textPrimary w-20'
                                  : ''
                              }`}
                            ></span>
                            <span
                              className={`nav-text text-xs font-bold uppercase tracking-widest  group-hover:text-textPrimary group-focus-visible:text-textPrimary ${
                                activeId === item.id || selectedId === item.id
                                  ? 'text-textPrimary'
                                  : ''
                              } ${
                                item.id === 'about' && activeId === 'home'
                                  ? 'text-textPrimary'
                                  : ''
                              }`}
                            >
                              {item.name}
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
                <ul
                  className='ml-1 mt-8 flex items-center'
                  aria-label='Social media'
                >
                  {icon.map((item, index) => (
                    <li key={index} className='mr-5 text-xs shrink-0'>
                      <a
                        className='block links'
                        href={item.link}
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label='Goodreads (opens in a new tab)'
                        title={item.name}
                      >
                        {item.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
              <main id='content' className='pt-24 lg:w-1/2 lg:py-24'>
                <About />
                <Experience />
                <Projects />
                <Contact />
              </main>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Body
