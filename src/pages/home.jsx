import Navbar from '../components/navbar'

import { useProvider } from '../components/context'
import Loading from '../components/loading'
import Frontpage from '../components/frontpage'
const Home = () => {
  const { lightmode, loading } = useProvider()
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className='h-screen    text-primary800'
          style={{
            backgroundColor: lightmode ? 'rgb(40, 44, 52)' : 'white',
          }}
        >
          <div className='max-w-7xl mx-auto px-3'>
            <div>
              <Navbar />
              <Frontpage />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Home
