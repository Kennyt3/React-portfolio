import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import { projectData } from '../projectData'
import { useProvider } from './context'

const Project = () => {
  const { lightmode } = useProvider()
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='max-w-sm plan:max-w-5xl  mx-auto mt-10 grid plan:grid-cols-2 gap-8'>
      {projectData.map(({ id, name, pic, details, live, github, aos }) => {
        return (
          <div
            // data-aos={aos}
            key={id}
            className={`mb-5 border-2 w-full plan:w-proj pb-5 pt-2 px-2 rounded-2xl ${
              lightmode ? 'border-primary500' : 'border-transparent'
            } 
               ${!lightmode && 'bg-primary500'} `}
          >
            <img
              className=' mx-auto w-full h-48 rounded-lg border-transparent'
              src={pic}
              alt={name}
            />
            <div className='mt-2'>
              <h1
                className={`text-center text-2xl sm:text-3xl my-10 ${
                  lightmode && 'text-primary500'
                }`}
              >
                {name}
              </h1>
              <h4
                className={`text-center text-xl ${
                  !lightmode && 'text-primary600'
                } my-10`}
              >
                {details}
              </h4>
              <div className='flex gap-5 mt-10 mb-5 items-center justify-center'>
                <a
                  href={live}
                  className={`${
                    lightmode ? 'bg-primary500' : 'bg-primary800'
                  } font-bold p-5 ${
                    lightmode ? 'text-primary800' : 'text-primary500'
                  } rounded-lg text-lg`}
                >
                  View Site
                </a>
                <a
                  href={github}
                  className={`${
                    lightmode ? 'bg-primary500' : 'bg-primary800'
                  } font-bold p-5 ${
                    lightmode ? 'text-primary800' : 'text-primary500'
                  } rounded-lg text-lg`}
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Project
