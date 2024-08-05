import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
import Header from './Header'
export const row = ['ABOUT', 'EXPERIENCE', 'PROJECTS']
export const icon = [
  {
    icon: <FaGithub className='icon' size={20} />,
    name: 'Github',
    link: 'invite',
  },
  {
    icon: <FaLinkedin className='icon' size={24} />,
    name: 'Linkedin',
    link: 'wishlist',
  },
  {
    icon: <FaXTwitter className='icon' size={24} />,
    name: 'Cash Gift',
    link: 'cash',
  },
  {
    icon: <FaInstagram className='icon' size={24} />,
    name: 'Message',
    link: 'message',
  },
]

const Body = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
      <div
        className='pointer-events-none fixed inset-0 z-30  lg:absolute'
        style={{
          background:
            'radial-gradient(600px at 788px 600px, rgba(29, 78, 216, 0.15), transparent 100%)',
          // left: mousePosition.x - 900,
          // top: mousePosition.y - 300,
        }}
      ></div>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <section className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24'>
            <div>
              <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
                <a href='/'>Mercy K. Taiwo</a>
              </h1>
              <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
                Frontend Engineer
              </h2>
              <p className='mt-4 max-w-xs leading-normal'>
                {/* catch phrase along the lines of I enable business growth by
                building web sites that connects to target audience but more
                creative */}
              </p>
              <nav
                className='nav hidden lg:block'
                aria-label='In-page jump links'
              >
                <ul className='mt-16 w-max'>
                  {row.map((item, index) => (
                    <li key={index}>
                      <a className='group flex items-center py-3' href='#about'>
                        <span className='nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
                        <span className='nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
                          {item}
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
                    className='block hover:text-slate-200'
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
            <section
              id='about'
              className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
              aria-label='About me'
            >
              <div className='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 className='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                  About
                </h2>
              </div>
              <div>
                <p className='mb-4'>
                  My journey into software development began during the economic
                  hardships brought on by COVID-19. As an undergraduate student
                  in my penultimate year, it became challenging for my parents
                  to support my studies. To become financially independent and
                  bridge the gap before I could practice law, I decided to learn
                  a skill that would sustain me.
                </p>
                <p className='mb-4'>
                  In furtherance of this cause, I joined the Women Techsters
                  Fellowship, a prestigious program sponsored by Microsoft,
                  where I graduated summa cum laude and was honored as the Best
                  Graduating Student in my learning track, highlighting my
                  dedication to mastering new skills and striving for
                  excellence. I have taken a number of other certification
                  courses as well as participated in a mentorship program
                </p>
                <p className='mb-4'>
                  Professionally, I've single-handedly built Beesage's current
                  webshop, integrating the Stripe API and a blog CMS tool.
                  Additionally, I've developed various websites for clients,
                  including custom wedding websites and other unique projects.
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default Body
