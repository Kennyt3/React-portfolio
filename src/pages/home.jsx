import Navbar from '../components/navbar'
import Snowfall from 'react-snowfall'

import { useProvider } from '../components/context'
import Loading from '../components/loading'

import Hero from '../components/hero'

const Home = () => {
  const { lightmode, loading } = useProvider()
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={`h-screen text-primary800 ${
            lightmode ? 'bg-primary600' : 'bg-white'
          }`}
        >
          <Snowfall
            className='text-primary800'
            snowflakeCount={200}
            speed={[0, 0.5]}
            wind={[-0.5, 1]}
            color={!lightmode ? 'rgb(183, 92, 255)' : 'rgb(245, 245, 220)'}
          />
          <div className='max-w-7xl mx-auto px-3'>
            <div>
              <Navbar />
              <Hero />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
