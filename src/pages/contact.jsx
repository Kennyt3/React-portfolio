import { useProvider } from '../components/context'
// import Navbar from '../components/navbar'
import Snowfall from 'react-snowfall'
import Cform from '../components/cform'

const Contact = () => {
  const { lightmode } = useProvider()
  return (
    <>
      <div
        id='about'
        className={`h-fit pb-20 text-primary800 ${
          lightmode ? 'bg-primary600' : 'bg-white'
        }`}
      >
        <Snowfall
          radius={[0.5, 1.5]}
          snowflakeCount={200}
          speed={[0, 0.5]}
          wind={[-0.5, 1]}
        />

        <div className='max-w-7xl mx-auto px-3'>
          {/* <Navbar /> */}
          <div className='max-w-5xl mx-auto pt-32'>
            <h2
              className={`${
                lightmode ? 'text-primary800' : 'text-primary600'
              } text-3xl text-center font-bold`}
            >
              Would you like to reach out?
            </h2>
            <p
              className={`${
                lightmode ? 'text-primary500' : 'text-primary800'
              } text-center text-xl mt-10 mb-20`}
            >
              Send me an email if you think we're a great fit and would like to
              work with me.
            </p>
            <Cform />
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
