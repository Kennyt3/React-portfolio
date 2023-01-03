// import Typewriter from 'typewriter-effect'
import { useState, useEffect } from 'react'

const Type = () => {
  const first_text = 'const sayHello = () = {'
  const second_text = "console.log('hello')"
  const third_text = '//This prints out Hello World}'

  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')
  const [text3, setText3] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setText1(first_text.slice(0, text1.length + 1))
    }, 100)
  })

  useEffect(() => {
    setTimeout(() => {
      setText2(second_text.slice(0, text2.length + 1))
    }, 250)
  })

  useEffect(() => {
    setTimeout(() => {
      setText3(third_text.slice(0, text3.length + 1))
    }, 300)
  }, [text3])
  return (
    <>
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(
              'My name is Mercy I am the best frontend developer there is.'
            )
            .callFunction(() => {
              console.log('String typed out!')
            })
            .pause(2500)
            .deleteAll()
            .typeString(
              'My name is Mercy I am the best frontend developer there is.'
            )
            .start()
        }}
      /> */}
      <h1>{text1}</h1>
      <h2>{text2}</h2>
      <h3>{text3}</h3>
    </>
  )
}

export default Type
