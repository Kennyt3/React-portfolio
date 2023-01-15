import { useEffect } from 'react'
import { useProvider } from './context'
import { motion } from 'framer-motion'
import { skillsData } from '../skillsData'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Skills = () => {
  const { lightmode } = useProvider()
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='my-20 overflow-x-hidden'>
      <motion.div
        initial={{
          x: -200,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 2 }}
      >
        <h2
          className={`text-center  mt-10 mb-5 text-2xl font-bold  
        `}
          data-aos='fade-down'
        >
          SKILLS
        </h2>
      </motion.div>
      <motion.div
        initial={{
          y: 200,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 2 }}
      >
        <p
          className={`text-center text-lg mt-5 mb-10 ${
            lightmode ? 'text-primary500' : 'text-primary600'
          }`}
          data-aos='fade-up'
        >
          Frameworks, Libraries, Tools and Technologies I use are:
        </p>
      </motion.div>
      <div className='grid overflow-x-hidden grid-cols-2 md:grid-cols-3  justify-center items-center align-center text-center'>
        {skillsData.map(({ id, icon, name, aos }) => (
          <div key={id} data-aos={aos}>
            <div className='cursor-pointer flex flex-col m-2 p-4 items-center hover:scale-110'>
              <img
                src={icon}
                alt={name}
                className={`w-20 h-1/2 duration-200 shadow-xl bg-primary600 ${
                  lightmode ? 'shadow-primary500' : 'shadow-primary800'
                } ${
                  lightmode ? 'text-primary800' : 'text-primary600'
                } rounded-full   hover:scale-105 p-4`}
              />
              <h3 className={`text-sm text-center mt-4 `}>{name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
