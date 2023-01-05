import React from 'react'
import { useProvider } from './context'

const Me = () => {
  const { lightmode } = useProvider()
  return (
    <div className='basis-3/6'>
      <p
        className={` sys   ${
          lightmode ? 'text-primary500' : 'text-primary600'
        } mt-3 sm:text-2xl sm:mt-5`}
      >
        Hi there! My name is Mercy Taiwo and I am a frontend React developer.
      </p>
      <p
        className={` sys   ${
          lightmode ? 'text-primary500' : 'text-primary600'
        } mt-3 sm:text-2xl sm:mt-5`}
      >
        As a frontend developer, I have experience working with a variety of
        programming languages, technologies, and tools.
      </p>
      <p
        className={` sys   ${
          lightmode ? 'text-primary500' : 'text-primary600'
        } mt-3 sm:text-2xl sm:mt-5`}
      >
        I have a natural aptitude for picking up new technologies and
        techniques, which has allowed me to quickly become proficient in a wide
        range of programming languages and frameworks.
      </p>
      <p
        className={` sys   ${
          lightmode ? 'text-primary500' : 'text-primary600'
        } mt-3 sm:text-2xl sm:mt-5`}
      >
        In addition to my technical skills, I am also a dedicated and
        hardworking individual with excellent problem-solving abilities.
      </p>
    </div>
  )
}

export default Me
