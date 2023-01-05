import { NavLink } from 'react-router-dom'

import '../index.css'

import { FaAlignJustify } from 'react-icons/fa'
import { BsLightningCharge } from 'react-icons/bs'
import { useProvider } from './context'
import Dropdown from './dropdown'
import Links from './links'

const Navbar = () => {
  const { openMenubar, isMenuOpen, openLightmode, lightmode, closeLightmode } =
    useProvider()

  return (
    <div className={`flex h-25 py-5 items-center   justify-between`}>
      <div className='flex items-center   gap-x-1 px-2'>
        <p
          className={`h-10 flex w-10 text-xl rounded-2.5xl ${
            lightmode ? 'text-primary800' : 'text-primary600'
          } ${
            lightmode ? 'bg-primary900' : 'bg-primary800'
          } justify-center items-center  font-bold `}
        >
          K
        </p>

        <NavLink
          to='/'
          className='text-4xl design text-primary800 font-bold hover:animate-bounce'
        >
          Kenny
        </NavLink>
      </div>

      <div className=''>
        <BsLightningCharge
          size={40}
          onClick={lightmode ? closeLightmode : openLightmode}
        />
      </div>
      <Links />

      <FaAlignJustify
        size={30}
        onClick={openMenubar}
        className='block xmd:hidden'
      />

      {isMenuOpen && <Dropdown />}
    </div>
  )
}

export default Navbar
