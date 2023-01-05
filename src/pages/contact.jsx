import { useProvider } from '../components/context'
import Navbar from '../components/navbar'

const Contact = () => {
  const { lightmode } = useProvider()
  return (
    <>
      <div
        id='about'
        className={`h-screen text-primary800 ${
          lightmode ? 'bg-primary600' : 'bg-white'
        }`}
      >
        <div className='max-w-7xl mx-auto px-3'>
          <Navbar />
        </div>
      </div>
    </>
  )
}

export default Contact
