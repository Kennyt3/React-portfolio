import { useProvider } from '../components/context'
import Navbar from '../components/navbar'
import Me from '../components/me'
import Snowfall from 'react-snowfall'
import IMG from '../assets/me5.jpg'
const About = () => {
  const { lightmode } = useProvider()
  return (
    <>
      <div
        id='about'
        className={`text-primary800 h-fit pb-5 ${
          lightmode ? 'bg-primary600' : 'bg-white'
        }`}
      >
        <Snowfall
          radius={[0.5, 1.5]}
          snowflakeCount={200}
          speed={[0, 0.5]}
          wind={[-0.5, 1]}
        />
        <div className='max-w-7xl mx-auto px-3 py-5'>
          <div>
            <Navbar />
            <div className='max-w-5xl mx-auto'>
              <h1 className='mt-5 sm:mt-10 ml-5 text-2xl font-semibold'>
                About Me
              </h1>
              <div className=' mx-5  flex flex-col xmd:flex-row'>
                <Me />
                <div className='mt-5  basis-1/2 sm:flex items-center'>
                  <img
                    src={IMG}
                    alt='Mercy Taiwo'
                    className='w-50 h-80 mx-auto sm:h-96'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
