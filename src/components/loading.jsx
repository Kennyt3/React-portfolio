import React from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Snowfall from 'react-snowfall'

const Loading = () => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='bg-primary100 overflow-x-hidden text-primary800 h-screen'>
      <Snowfall
        radius={[0.5, 1.5]}
        snowflakeCount={200}
        speed={[0, 0.5]}
        wind={[-0.5, 1]}
      />
      <div className='max-w-7xl h-full  mx-auto px-3 flex flex-col items-center gap-4 justify-center'>
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
          transition={{ duration: 1 }}
        >
          <h2
            className='text-3xl design  text-primary500 text-center sm:text-6xl'
            data-aos='fade-down'
          >
            Hello There,
          </h2>
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
          transition={{ duration: 1 }}
        >
          <h2
            className='text-3xl text-center sm:text-6xl'
            data-aos='fade-right'
          >
            I am Mercy Taiwo
          </h2>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            scale: 1,
          }}
          transition={{ duration: 1 }}
        >
          <p
            className='text-primary500 text-xl sm:text-4xl '
            data-aos='fade-up'
          >
            A frontend developer
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Loading
