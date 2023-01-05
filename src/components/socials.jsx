import React from 'react'

import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from 'react-icons/bs'
import { useProvider } from './context'
const Socials = () => {
  const { lightmode } = useProvider()
  return (
    <>
      <div className='flex absolute sm:static bottom-10 sm:flex-col gap-5'>
        <a href='https://twitter.com/mercyWritesCode '>
          <BsTwitter
            size={30}
            className={`${lightmode ? 'text-primary900' : 'text-primary100'}`}
          />
        </a>
        <a href='https://www.linkedin.com/in/mercy-taiwo-002b26131/'>
          <BsLinkedin
            size={30}
            className={`${lightmode ? 'text-primary900' : 'text-primary100'}`}
          />
        </a>
        <a href='https://www.instagram.com/mercy.taiwo/'>
          <BsInstagram
            size={30}
            className={`${lightmode ? 'text-primary900' : 'text-primary100'}`}
          />
        </a>
        <a href='https://github.com/Kennyt3'>
          <BsGithub
            size={30}
            className={`${lightmode ? 'text-primary900' : 'text-primary100'}`}
          />
        </a>
      </div>
    </>
  )
}

export default Socials
