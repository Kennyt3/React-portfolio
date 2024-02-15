import Image from 'next/image'
import Meme from '@/public/img/circle.jpg'
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
const Header = (page) => {
  return (
    <>
      <main id='about' className='second'>
        <div className='mx-auto h-full md:flex justify-center items-center relative'>
          <div className='doro cne md:grid h-full'>
            <div className='flex flex-col gap-3 md:gap-10 md:block mt-10 md:mt-0'>
              <h1 className='text-center text-[#4db5ff]'>About Me</h1>
              <div className='xl:w-[60vw] mx-auto grid gap-10 md:gap-0  md:flex md:justify-between md:items-center'>
                <div className='image-div'>
                  <Image
                    src={Meme}
                    width={500}
                    height={500}
                    className='rounded-[50%] w-[250px] h-[250px] mx-auto'
                  ></Image>
                </div>
                <div className='text-div px-[16px]'>
                  <p className='text-[14px] md:text-[16px]'>
                    <span className='list-disc list-item'>
                      My name is Mercy Kehinde Taiwo.
                    </span>

                    <span className='list-disc list-item'>
                      I am a Full stack web developer.
                    </span>
                    <span className='list-disc list-item'>
                      I hold a bachelor&apos;s degree in Law from Obafemi
                      Awolowo University
                    </span>
                    <span className='list-disc list-item'>
                      I graduated top of my class from the Women Techsters
                      Fellowship class of &lsquo;24.
                    </span>
                    <span className='list-disc list-item'>
                      I am Cynophobic, and although I think dogs are cute, I get
                      terrified whenever there is one close to me.
                    </span>
                    <span className='list-disc list-item'>
                      My favorite pastime typically involves watching a
                      compelling TV drama, accompanied by a snack, and a healthy
                      beverage.
                    </span>
                  </p>
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
          <a href='#contact' class='scroll'>
            Contact Me
          </a>
        </div>
      </main>
    </>
  )
}

export default Header
