import { useProvider } from '../components/context'
import { useEffect } from 'react'
// import Navbar from '../components/navbar'
import Me from '../components/me'
import { motion } from 'framer-motion'
import Snowfall from 'react-snowfall'
import IMG from '../assets/me5.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Skills from '../components/skills'

const About = () => {
  const { lightmode } = useProvider()
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <>
      <div
        id='about'
        className={`text-primary800 h-fit  ${
          lightmode ? 'bg-primary600' : 'bg-white'
        }`}
      >
        <Snowfall
          radius={[0.5, 1.5]}
          snowflakeCount={200}
          speed={[0, 0.5]}
          wind={[-0.5, 1]}
        />
        <div className='max-w-7xl  mx-auto px-3  pb-5'>
          <div>
            {/* <Navbar /> */}
            <div className='max-w-5xl pt-10 sm:p-20 mx-auto'>
              <motion.div
                initial={{
                  x: 150,
                  scale: 0.5,
                }}
                animate={{
                  x: 0,
                  scale: 1,
                }}
                transition={{ duration: 2 }}
              >
                <h1
                  className=' ml-5 text-2xl font-semibold'
                  data-aos='fade-down'
                >
                  About Me
                </h1>
              </motion.div>
              <div className=' mx-5  flex flex-col xmd:flex-row'>
                <Me />
                <div className='mt-5 overflow-x-hidden  basis-1/2 sm:flex items-center'>
                  <img
                    src={IMG}
                    alt='Mercy Taiwo'
                    className='w-50 an h-80 mx-auto sm:h-96'
                    data-aos='flip-right'
                    data-aos-easing='ease-out-cubic'
                    data-aos-duration='2000'
                  />
                </div>
              </div>
            </div>
            <Skills />
          </div>
        </div>
      </div>
    </>
  )
}

export default About
