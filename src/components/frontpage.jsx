import React from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useProvider } from './context'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Frontpage = () => {
  const { lightmode } = useProvider()
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <div className='max-w-5xl mx-auto px-5 flex  h-75vh items-center justify-between'>
      <div className='flex m-auto items-center h-full w-full  justify-center text-center'>
        {/* <div className='mx-auto'> */}
        {/* <p className='text-base leading-7 font-light text-primary500'></p> */}
        {/* <h1 className='text-4xl font-semibold'>Hi, I'm Mercy</h1> */}
        <div className=''>
          <motion.div
            className='name'
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`py-2 text-2xl    sys sm:text-5xl font-bold`}>
              Hi, I'm Mercy Taiwo
            </h1>
          </motion.div>
          <motion.div
            className='name'
            initial={{
              x: 100,
            }}
            animate={{
              x: 0,
            }}
            transition={{ duration: 0.5 }}
          >
            <p
              className={`py-2 sys text-xl ${
                !lightmode && 'text-black'
              } text-primary500 font-bold`}
            >
              Frontend (React) Developer
            </p>
          </motion.div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Frontpage
