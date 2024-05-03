import { MdOutlineMailOutline } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa6'
import { FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaArrowUpLong } from 'react-icons/fa6'

const Contact = (page) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef()
  const submitHandler = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_qgo4bdj',
        'template_fwqvohd',
        form.current,
        'cRQmou1HpEeCnEv5T'
        // process.env.EMAIL_SERVICE,
        // process.env.EMAIL_TEMPLATE,
        // form.current,
        // process.env.EMAIL_KEY
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
    <>
      <section id='contact' className='contact'>
        <div className='mx-auto md:mt-0 h-full xl:relative'>
          <div className='doro cne  md:grid md:pt-0 flex flex-col gap-5 pt-1 h-full'>
            {/* <h3 className='text-center text-[#4db5ff]'>
              Contact Me
            </h3> */}
            <div className='w-full mx-auto md:min-h-[80vh] grid items-center md:flex md:justify-between rounded-[20px] md:border-[#4db5ff] md:border-solid border-[5px] px-5 md:gap-10'>
              <div className='md:flex md:flex-row w-full'>
                <div className='md:basis-[30%] md:block '>
                  <div className='md:max-w-[200px] mb-3 md:min-h-[50px] flex-col flex justify-center items-center md:py-3 gap-2  rounded-[10px] border-[#4db5ff] border-solid border-[2px]'>
                    <MdOutlineMailOutline
                      style={{ color: '#4db5ff', fontSize: '2em' }}
                    />
                    <span className='text-[white]'>kennyt341@gmail.com</span>
                    <a
                      href='mailto:kennyt341@gmail.com'
                      className='text-[#4db5ff]'
                      target='_blank'
                    >
                      Send an email
                    </a>
                  </div>
                  <div className='md:max-w-[200px] mb-3 md:min-h-[50px] flex-col flex justify-center items-center md:py-3 gap-2  rounded-[10px] border-[#4db5ff] border-solid border-[2px]'>
                    <FaFacebookMessenger
                      style={{ color: '#4db5ff', fontSize: '2em' }}
                    />
                    <span className='text-[white]'>Mercy Taiwo</span>
                    <a
                      href='https://www.facebook.com/mercy.taiwo.121/'
                      className='text-[#4db5ff]'
                      target='_blank'
                    >
                      Send a message
                    </a>
                  </div>
                  <div className='md:max-w-[200px] mb-3 md:min-h-[50px] flex-col flex justify-center items-center md:py-3 gap-2  rounded-[10px] border-[#4db5ff] border-solid border-[2px] '>
                    <FaWhatsapp style={{ color: '#4db5ff', fontSize: '2em' }} />
                    <span className='text-[white]'>+2347011088408</span>
                    <a
                      href='https://wa.me/+2347011088408'
                      className='text-[#4db5ff]'
                      target='_blank'
                    >
                      Send a DM
                    </a>
                  </div>
                </div>
                <div className='md:basis-[70%]'>
                  <form
                    ref={form}
                    onSubmit={submitHandler}
                    className='md:px-10'
                  >
                    <input
                      type='text'
                      placeholder='Your Full Name'
                      value={name}
                      required
                      name='name'
                      onChange={(e) => setName(e.target.value)}
                      className='bg-[#4db5ff] text-[#1f1f38] max-w-[400px] w-full rounded-[10px] p-3 mb-3 '
                    />
                    <input
                      type='text'
                      placeholder='Your Email Address'
                      value={email}
                      name='email'
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      className='bg-[#4db5ff] text-[#1f1f38] max-w-[400px] w-full rounded-[10px] p-3 mb-3 '
                    />
                    <input
                      type='text'
                      placeholder='Subject'
                      value={subject}
                      name='subject'
                      required
                      onChange={(e) => setSubject(e.target.value)}
                      className='bg-[#4db5ff] text-[#1f1f38] max-w-[400px] w-full rounded-[10px] p-3 mb-3 '
                    />
                    <textarea
                      className='bg-[#4db5ff] text-[#1f1f38] max-w-[400px] w-full rounded-[10px] p-3 mb-3 '
                      placeholder='Your Message'
                      value={message}
                      name='message'
                      required
                      onChange={(e) => setMessage(e.target.value)}
                      id=''
                      cols='10'
                      rows='5'
                    ></textarea>
                    <button className='bg-[#4db5ff] text-[#1f1f38] max-w-[400px] w-full rounded-[10px] p-3 mb-3 hover:text-white '>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='social__links'>
            <a
              href='https://www.linkedin.com/in/mercy-taiwo-002b26131'
              target='_blank'
            >
              <FaLinkedin style={{ color: '#4db5ff', fontSize: '1.5em' }} />
            </a>
            <a href='https://twitter.com/mercyWritesCode' target='_blank'>
              <FaXTwitter style={{ color: '#4db5ff', fontSize: '1.5em' }} />
            </a>
            <a href='https://github.com/Kennyt3' target='_blank'>
              <FaGithub style={{ color: '#4db5ff', fontSize: '1.5em' }} />
            </a>
          </div>
          <a href='#' class='scrollarrow'>
            <FaArrowUpLong />
          </a>
        </div>
      </section>
    </>
  )
}

export default Contact
