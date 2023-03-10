import React from 'react'
// import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useProvider } from './context'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
import Socials from './socials'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  const { lightmode } = useProvider()
  // useEffect(() => {
  //   AOS.init()
  //   AOS.refresh()
  // }, [])
  return (
    <div className='max-w-5xl mx-auto px-5 flex  h-75vh items-center overflow-hidden justify-between'>
      <div className='flex flex-col  sm:gap-0 sm:flex-row m-auto items-center h-full w-full justify-center sm:justify-between p-5 text-center'>
        <div className=' max-w-md'>
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
            <h1 className={`py-2 ll:2xl text-3xl    sys sm:text-5xl font-bold`}>
              Hi, I'm Mercy
              <span className='hidden sm:inline'> Taiwo</span>
            </h1>
          </motion.div>
          <motion.div
            className='name'
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
            <p
              className={`py-2 sys ll:text-xl text-2xl  ${
                lightmode ? 'text-primary500' : 'text-primary600'
              } font-bold`}
            >
              Frontend (React) Developer
            </p>
          </motion.div>
          <Typewriter
            options={{
              strings: [
                'I am a highly motivated, independent and results-driven software developer with a strong track record of delivering high-quality software solutions.',
                'I have experience working with a variety of programming languages and technologies, and I am able to adapt to new technologies quickly. ',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <Socials />
      </div>
    </div>
  )
}

export default Hero
