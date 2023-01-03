import { NavLink } from 'react-router-dom'
import '../index.css'

import { FaAlignJustify, FaTimes } from 'react-icons/fa'
import { BsLightningCharge } from 'react-icons/bs'
import { useProvider } from './context'

const Navbar = () => {
  const {
    openMenubar,
    closeMenubar,
    isMenuOpen,
    openLightmode,
    lightmode,
    closeLightmode,
  } = useProvider()

  return (
    <div className={`flex h-25 py-5 items-center   justify-between`}>
      <div className='flex items-center   gap-x-1 px-2'>
        <p
          className='h-10 flex w-10 text-xl rounded-2.5xl bg-primary900 justify-center items-center  font-bold '
          style={{
            color: lightmode ? 'rgb(183, 92,255) ' : 'rgb(245, 245, 220)',

            backgroundColor: lightmode
              ? 'rgb(245, 245, 220)'
              : 'rgb(183, 92, 255) ',
          }}
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
      <ul className='hidden xmd:flex pl-8  gap-x-10'>
        <li className=' text-2xl p-4 font-medium leading-9'>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li className=' text-2xl p-4 font-medium leading-9'>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li className=' text-2xl p-4 font-medium leading-9'>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li className=' text-2xl p-4 font-medium leading-9'>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>

      <FaAlignJustify
        size={30}
        onClick={openMenubar}
        className='block xmd:hidden'
      />

      {isMenuOpen && (
        <div
          className={`flex 
         
           flex-col items-center justify-center absolute h-screen  z-10 w-full top-0 left-0`}
          style={{
            backgroundColor: lightmode
              ? 'rgb(40, 44, 52)'
              : 'rgb(255, 255, 255)',
          }}
        >
          <FaTimes
            size={30}
            className='absolute z-7 top-7 right-5'
            onClick={closeMenubar}
          />
          <ul className='flex  flex-col  '>
            <li className=' text-2xl p-4 font-medium leading-9'>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li className=' text-2xl p-4 font-medium leading-9'>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li className=' text-2xl p-4 font-medium leading-9'>
              <NavLink to='/projects'>Projects</NavLink>
            </li>
            <li className=' text-2xl p-4 font-medium leading-9'>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
