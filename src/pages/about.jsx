import { useProvider } from '../components/context'
import Navbar from '../components/navbar'
import Snowfall from 'react-snowfall'
const About = () => {
  const { lightmode } = useProvider()
  return (
    <>
      <div
        id='about'
        className={`h-screen text-primary800 ${
          lightmode ? 'bg-primary600' : 'bg-white'
        }`}
      >
        <Snowfall snowflakeCount={200} speed={[0, 0.5]} wind={[-0.5, 1]} />
        <div className='max-w-7xl mx-auto px-3'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default About
