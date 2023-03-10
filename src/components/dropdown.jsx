import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useProvider } from './context'
const Dropdown = () => {
  const { lightmode, closeMenubar, goup } = useProvider()

  return (
    <>
      <div
        className={`flex transition ${
          lightmode ? 'bg-primary600' : 'bg-white'
        } ${
          goup ? 'animate-goup' : 'animate-dropdown '
        }  flex-col items-center justify-center absolute h-screen  z-10 w-full top-0 left-0`}
      >
        <FaTimes
          size={30}
          className='absolute z-7 top-7 right-5'
          onClick={closeMenubar}
        />
        <ul className='flex  flex-col  '>
          <li className=' text-2xl p-4 font-medium leading-9'>
            <NavLink to='/' onClick={closeMenubar}>
              Home
            </NavLink>
          </li>
          <li className=' text-2xl p-4 font-medium leading-9'>
            <NavLink to='/about' onClick={closeMenubar}>
              About
            </NavLink>
          </li>
          <li className=' text-2xl p-4 font-medium leading-9'>
            <NavLink to='/projects' onClick={closeMenubar}>
              Projects
            </NavLink>
          </li>
          <li className=' text-2xl p-4 font-medium leading-9'>
            <NavLink to='/contact' onClick={closeMenubar}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Dropdown
