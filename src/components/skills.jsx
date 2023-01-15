import { useEffect } from 'react'
import React from 'react'
import { skillsData } from '../skillsData'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='my-20'>
      <div className='grid overflow-x-hidden grid-cols-2 md:grid-cols-3  justify-center items-center align-center text-center'>
        {skillsData.map(({ id, icon, name, aos }) => (
          <div key={id} data-aos={aos}>
            <div className='cursor-pointer flex flex-col m-2 p-4 items-center hover:scale-110'>
              <img
                src={icon}
                alt={name}
                className='w-20 h-1/2 duration-200 shadow-xl bg-primary600 shadow-primary500 rounded-full   hover:scale-105 p-4'
              />
              <h3 className='text-sm text-center mt-4'>{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
