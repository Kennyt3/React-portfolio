import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
const Portfolio = (page) => {
  return (
    <>
      <main id='portfolio' className='fourth'>
        <div className='mx-auto mt-10 md:mt-0 h-full relative'>
          <div className='doro dub h-full'>
            <div className='w-full mx-auto md:h-[80vh] rounded-[20px] border-[#4db5ff] border-solid border-[5px] px-5 md:gap-10'>
              <div className='flex gap-10 justify-center items-center mt-5 bg-[#4db5ff] w-fit mx-auto rounded-[10px] px-5 py-2'>
                <button className='hover:text-[#1f1f38]'>All</button>
                <button className='hover:text-[#1f1f38]'>Next js</button>
                <button className='hover:text-[#1f1f38]'>React js</button>
                <button className='hover:text-[#1f1f38]'>Node js</button>
              </div>
              <div className='px-3 md:max-h-[90%] overflow-scroll'>
                <div className=' grid items-center grid-cols-2 gap-10 '>
                  <div className='bg-[#4db5ff] w-full my-5 md:my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'></div>
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

export default Portfolio
