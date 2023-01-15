import React from 'react'
import { useProvider } from './context'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Me = () => {
  const { lightmode } = useProvider()
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  return (
    <div className='basis-3/6'>
      <motion.div
        initial={{
          x: 200,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 2 }}
      >
        <p
          className={` sys   ${
            lightmode ? 'text-primary500' : 'text-primary600'
          } my-10 sm:text-2xl sm:my-15`}
          data-aos='fade-down-right'
        >
          Hi there! My name is Mercy Taiwo and I am a frontend React developer.
        </p>
      </motion.div>
      <motion.div
        initial={{
          y: -100,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 2 }}
      >
        <p
          className={` sys   ${
            lightmode ? 'text-primary500' : 'text-primary600'
          } my-10 sm:text-2xl sm:my-15`}
          data-aos='fade-right'
        >
          As a frontend developer, I have experience working with a variety of
          programming languages, technologies, and tools.
        </p>
      </motion.div>
      <motion.div
        initial={{
          y: 100,
          scale: 0.5,
        }}
        animate={{
          y: 0,
          scale: 1,
        }}
        transition={{ duration: 2 }}
      >
        <p
          className={` sys   ${
            lightmode ? 'text-primary500' : 'text-primary600'
          } my-10 sm:text-2xl sm:my-15`}
          data-aos='fade-left'
        >
          I have a natural aptitude for picking up new technologies and
          techniques, which has allowed me to quickly become proficient in a
          wide range of programming languages and frameworks.
        </p>
      </motion.div>
      <motion.div
        initial={{
          x: -150,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
        }}
        transition={{ duration: 2 }}
      >
        <p
          className={` sys   ${
            lightmode ? 'text-primary500' : 'text-primary600'
          } my-10 sm:text-2xl sm:my-15`}
          data-aos='fade-up-left'
        >
          In addition to my technical skills, I am also a dedicated and
          hardworking individual with excellent problem-solving abilities.
        </p>
      </motion.div>
    </div>
  )
}

export default Me
