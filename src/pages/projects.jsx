import { useProvider } from '../components/context'
import Navbar from '../components/navbar'
import Snowfall from 'react-snowfall'
import Project from '../components/projects'

const Projects = () => {
  const { lightmode } = useProvider()
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
        <div className='plan:max-w-7xl mx-auto px-3'>
          <div>
            <Navbar />
            <h1 className='text-center font-bold text-4xl mt-20 mb-16'>
              My projects
            </h1>
            <Project />
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects
