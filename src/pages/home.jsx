import Navbar from '../components/navbar'

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
