import React from 'react'
// import { Link } from 'react-scroll'
import { NavLink, Outlet } from 'react-router-dom'

const Links = () => {
  return (
    <div>
      <>
        <ul className='hidden xmd:flex pl-8  gap-x-10'>
          <li className=' text-2xl p-4 font-medium leading-9'>
            <NavLink to={'/'}>Home</NavLink>
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

        <Outlet />
      </>
    </div>
  )
}

export default Links
