import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Cform = () => {
  const form = useRef()
  const { values, setValues } = useState({
    fullname: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_08e0d8j',
        'template_fwqvohd',
        form.current,
        'cRQmou1HpEeCnEv5T'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )

    e.target.reset()
  }

  return (
    <div>
      <form ref={form} onSubmit={submitHandler}>
        <div className='max-w-3xl mx-auto px-5 bg-primary500 text-primary600  border-6 rounded-md '>
          <div className=' flex flex-col mb-7'>
            <label className='text-lg text-primary20 my-5 font-bold leading-8 text-center'>
              Full Name:
            </label>
            <input
              type='text'
              name='fullname'
              id='fullname'
              value={values.fullName}
              onChange={handleChange}
              placeholder='Enter your full name'
              className={`border-2 rounded-full bg-primary10 m-2 p-3 border-transparent `}
            />
          </div>
          <div className=' flex flex-col mb-7'>
            <label className='text-lg text-primary20 my-5 font-bold leading-8 text-center'>
              Email:
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={values.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className={`border-2 rounded-full bg-primary10 m-2 p-3 border-transparent `}
            />
          </div>
          <div className=' flex flex-col mb-7'>
            <label className='text-lg text-primary20 my-5 font-bold leading-8 text-center'>
              Subject:
            </label>
            <input
              type='text'
              name='subject'
              id='subject'
              value={values.subject}
              onChange={handleChange}
              placeholder='Enter the subject of your message'
              className={`border-2 rounded-full bg-primary10 m-2 p-3 border-transparent `}
            />
          </div>
          <div className=' flex flex-col mb-7'>
            <label className='text-lg text-primary20 my-5 font-bold leading-8 text-center'>
              Message:
            </label>
            <textarea
              name='message'
              id='message'
              onChange={handleChange}
              className={`border-2 rounded-xl bg-primary10 h-64 m-2 p-3 border-transparent `}
            >
              {values.message}
            </textarea>
            <button
              type='submit'
              className=' bg-primary800 my-10 text-white p-5 mx-auto rounded-lg text-center flex w-max relative'
            >
              Get in touch
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Cform
