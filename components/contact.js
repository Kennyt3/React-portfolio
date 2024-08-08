import { MdOutlineMailOutline } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa6'
import { FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { useState, useRef } from 'react'
import { FaInstagram } from 'react-icons/fa6'
import emailjs from '@emailjs/browser'

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

const Contact = (page) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_qgo4bdj',
        'contact_form',
        { name, email, subject, message },
        'cRQmou1HpEeCnEv5T'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
    setEmail('')
    setName('')
    setMessage('')
    setSubject('')
  }

  return (
    <>
      <section
        id='contact'
        class='mb-16  md:mb-24 lg:mb-36'
        aria-label='Contact'
      >
        <div className='mx-auto md:mt-0 h-full xl:relative'>
          <div class='mb-4 py-10 backdrop-blur md:-mx-12 md:px-12'>
            <h2 class='text-sm font-bold uppercase tracking-widest  '>
              CONTACT
            </h2>
          </div>
          <div className='md:basis-[70%]'>
            <form ref={form} onSubmit={submitHandler} className='md:px-10'>
              <input
                type='text'
                placeholder='Full Name'
                value={name}
                required
                name='name'
                onChange={(e) => setName(e.target.value)}
                className='border-borderPrimary focus:border-borderHover  text-text max-w-[400px] w-full rounded-[10px] border-[3px] p-3 mb-3 text-[16px] '
              />
              <input
                type='text'
                placeholder='Email Address'
                value={email}
                name='email'
                required
                onChange={(e) => setEmail(e.target.value)}
                className='border-borderPrimary focus:border-borderHover  text-text max-w-[400px] w-full rounded-[10px] border-[3px] p-3 mb-3 text-[16px] '
              />
              <input
                type='text'
                placeholder='Subject'
                value={subject}
                name='subject'
                required
                onChange={(e) => setSubject(e.target.value)}
                className='border-borderPrimary focus:border-borderHover  text-text max-w-[400px] w-full rounded-[10px] border-[3px] p-3 mb-3 text-[16px] '
              />
              <textarea
                className='border-borderPrimary focus:border-borderHover  text-text max-w-[400px] w-full rounded-[10px] border-[3px] p-3 mb-3 text-[16px] '
                placeholder='Your Message'
                value={message}
                name='message'
                required
                onChange={(e) => setMessage(e.target.value)}
                id=''
                cols='10'
                rows='5'
              ></textarea>
              <button className='border-borderPrimary text-textPrimary max-w-[400px] w-full rounded-[10px] border-[3px] p-3 mb-3  hover:border-borderHover hover:text-borderHover '>
                Submit
              </button>
            </form>
          </div>
          {/* <div className='w-full flex justify-center items-center'>
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
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Contact
