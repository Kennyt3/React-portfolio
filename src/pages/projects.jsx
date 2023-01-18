import { useProvider } from '../components/context'
import { useEffect } from 'react'
// import Navbar from '../components/navbar'
import Snowfall from 'react-snowfall'
import Project from '../components/projects'
import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  const { lightmode } = useProvider()
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div
        id='projects'
        className={`h-fit w-full pb-5 text-primary800 ${
          lightmode ? 'bg-primary600' : 'bg-white'
        }`}
      >
        <Snowfall
          radius={[0.5, 1.5]}
          snowflakeCount={200}
          speed={[0, 0.5]}
          wind={[-0.5, 1]}
        />
        <div className='plan:max-w-7xl overflow-x-hidden mx-auto px-3'>
          <div>
            {/* <Navbar /> */}
            <motion.div
              initial={{
                x: 150,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                scale: 1,
              }}
              transition={{ duration: 1 }}
            >
              <h1
                className={`text-center ${
                  lightmode && 'text-primary500'
                } font-bold text-4xl mt-20 mb-16`}
                data-aos='fade-down'
              >
                My projects
              </h1>
            </motion.div>
            <Project />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
