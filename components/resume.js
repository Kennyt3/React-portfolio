import { FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
const Resume = (page) => {
  return (
    <>
      <section id='resume' className='resume'>
        <div className='mx-auto mt-3 md:mt-0 h-full  xl:relative'>
          <div className='doro cne md:grid h-full pt-2 md:pt-0 '>
            <div className=' w-full mx-auto md:min-h-[70vh] grid items-center md:flex md:justify-between rounded-[20px] border-[#4db5ff] border-solid border-[5px] px-5 md:gap-10'>
              <div className='basis-1/2'>
                <h3 className='text-center'>Experience</h3>
                <div className='bg-[#4db5ff] w-full my-5 md:my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'>
                  <span className='text-[10px] md:text-[12px]'>
                    02/2023 - Present
                  </span>
                  <span className='text-[12px] md:text-[14px] font-semibold'>
                    BeeSage SAI
                  </span>
                  <p className='text-[14px] md:text-[16px]'>
                    Handled frontend and backend needs of the company, including
                    projects like building the ROI calculator, webshop, and blog
                    editor interface/API.
                  </p>
                  <p></p>
                </div>
                <div className='bg-[#4db5ff] w-full my-5 md:my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'>
                  <span className='text-[10px] md:text-[12px]'>
                    08/2022 - 01/2023
                  </span>
                  <span className='text-[12px] md:text-[14px] font-semibold'>
                    USAF
                  </span>
                  <p className='text-[14px] md:text-[16px]'>
                    Volunteered as a frontend developer and contributed to
                    projects being built.
                  </p>
                </div>
              </div>
              <div className='basis-1/2'>
                <h3 className='text-center'>Education</h3>
                <div className='bg-[#4db5ff] w-full my-5 md:my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'>
                  <span className='text-[10px] md:text-[12px]'>
                    08/2022 - 03/2023
                  </span>
                  <span className='text-[12px] md:text-[14px] font-semibold'>
                    Women Techsters Fellowship
                  </span>
                  <p className='text-[14px] md:text-[16px]'>
                    Completed the Women Techsters Fellowship program 2023 as the
                    best graduating student from the Frontend Learning track.
                  </p>
                </div>
                <div className='bg-[#4db5ff] w-full my-5 md:my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'>
                  <span className='text-[10px] md:text-[12px]'>
                    04/2017 - 07/2023
                  </span>
                  <span className='text-[12px] md:text-[14px] font-semibold'>
                    Obafemi Awolowo University
                  </span>
                  <p className='text-[14px] md:text-[16px]'>
                    I hold a second class degree from the Faculty of Law,
                    Obafemi Awolowo University. I was a member of She Code
                    Africa, OAU chapter and GDSC OAU
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
      </section>
    </>
  )
}

export default Resume
