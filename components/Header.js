import React from 'react'
import { useThemeContext } from '@/context/themeContext'
import { FiSun } from 'react-icons/fi'
import { FiMoon } from 'react-icons/fi'
import { BsHexagon } from 'react-icons/bs'
const Header = () => {
  const { toggleTheme, theme } = useThemeContext()
  return (
    <header className='header'>
      <nav>
        <div className='nav_logo' tabindex='-1'>
          <a href='#' aria-label='home' className='cursor-pointer'>
            <div className='hexagon '>
              <svg
                id='hex'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 84 96'
              >
                <title>Hexagon</title>
                <g transform='translate(-8.000000, -2.000000)'>
                  <g transform='translate(11.000000, 5.000000)'>
                    <polygon
                      stroke='currentColor'
                      strokeWidth='5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      points='39 0 0 22 0 67 39 90 78 68 78 23'
                      fill='currentColor'
                    ></polygon>
                  </g>
                </g>
              </svg>
            </div>
            <div className='letter'>
              <svg
                id='logo'
                xmlns='http://www.w3.org/2000/svg'
                role='img'
                viewBox='0 0 84 96'
              >
                <g transform='translate(-8.000000, -2.000000)'>
                  <g transform='translate(11.000000, 5.000000)'>
                    <polygon
                      id='Shape'
                      stroke='currentColor'
                      strokeWidth='5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='white'
                      points='39 0 0 22 0 67 39 90 78 68 78 23'
                    ></polygon>
                    <path
                      d='M28.541667,61 L28.541667,30.3 L32.541667,30.3 L39.541667,45.3 L46.541667,30.3 L50.541667,30.3 L50.541667,61 L46.541667,61 L46.541667,40.3 L39.541667,55.3 L32.541667,40.3 L32.541667,61 Z'
                      fill='currentColor'
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
          </a>
        </div>
        <button
          class='w-10 h-10 max-xxsm:w-12 max-xxsm:h-12 flex items-center justify-center rounded-full relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#EBF2FA]'
          onClick={toggleTheme}
        >
          <div class='w-6 h-6 '>
            {theme === 'light' ? <FiMoon fill /> : <FiSun fill />}
          </div>
        </button>
      </nav>
    </header>
  )
}

export default Header
