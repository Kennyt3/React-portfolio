import React, { useState, useEffect } from 'react'
import { FaGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa6'
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
    <div className='relative group/spotlight'>
      <div
        className='pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute'
        style={{
          background:
            'radial-gradient(600px at 788px 600px, rgba(29, 78, 216, 0.15), transparent 100%)',
          left: mousePosition.x - 900,
          top: mousePosition.y - 300,
        }}
      ></div>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-40'>
            <div>
              <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>
                <a href='/'>Mercy K. Taiwo</a>
              </h1>
              <h2 className='mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl'>
                Frontend Engineer
              </h2>
              <p className='mt-4 max-w-xs leading-normal'>
                I build pixel-perfect, engaging, and accessible digital
                experiences.
              </p>
              <nav
                className='nav hidden lg:block'
                aria-label='In-link jump links'
              >
                <ul
                  className='ml-1 mt-8 flex items-center'
                  aria-label='Social media'
                >
                  {icon.map((item, index) => (
                    <li key={index}>
                      <a
                        class='block hover:text-slate-200'
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
              </nav>
            </div>
          </header>
          <main id='content' class='pt-24 lg:w-1/2 lg:py-24'>
            <section
              id='about'
              class='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
              aria-label='About me'
            >
              <div class='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
                <h2 class='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
                  About
                </h2>
              </div>
              <div>
                <p class='mb-4'>
                  My journey into software development began during the economic
                  hardships brought on by COVID-19. As an undergraduate student
                  in my penultimate year, it became challenging for my parents
                  to support my studies. To become financially independent and
                  bridge the gap before I could practice law, I decided to learn
                  a skill that would sustain me.
                </p>
                <p class='mb-4'>
                  In furtherance of this cause, I joined the Women Techsters
                  Fellowship, a prestigious program sponsored by Microsoft,
                  where I graduated summa cum laude and was honored as the Best
                  Graduating Student in my learning track, highlighting my
                  dedication to mastering new skills and striving for
                  excellence. I have taken a number of other certification
                  courses as well as participated in a mentorship program
                </p>
                <p class='mb-4'>
                  Professionally, I've single-handedly built Beesage's current
                  webshop, integrating the Stripe API and a blog CMS tool.
                  Additionally, I've developed various websites for clients,
                  including custom wedding websites and other unique projects.
                </p>
              </div>
            </section>
          </main>
          <div>
            <button
              class='hover:-text-teal-300 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300'
              type='button'
              aria-haspopup='dialog'
              aria-expanded='false'
              aria-controls='radix-:R4l6:'
              data-state='closed'
            >
              <span class='sr-only'>Click to time travel</span>
              <img
                alt='Spinning Tardis from Doctor Who'
                loading='lazy'
                width='100'
                height='86'
                decoding='async'
                data-nimg='1'
                style={{ color: 'transparent' }}
                srcset='/_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=256&amp;q=75 2x'
                src='/_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=256&amp;q=75'
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
