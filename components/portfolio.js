import { FaLinkedin, FaXTwitter, FaLink } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa'
import Image from 'next/image'
import { ally, react, next, node } from './data/personal'
import { useState } from 'react'
const Portfolio = (page) => {
  const [arr, setArr] = useState(ally)
  const [col, setCol] = useState('all')
  return (
    <>
      <main id='portfolio' className='fourth'>
        <div className='mx-auto mt-10 md:mt-0 h-full relative'>
          <div className='doro cne flex flex-col gap-5 pt-5 h-full'>
            <h3 className='text-center text-[#4db5ff]'>Portfolio</h3>
            <div className='flex flex-col md:flex-row md:gap-10 gap-2  w-full justify-center items-center bg-[#4db5ff] md:w-fit mx-auto rounded-[10px] px-5 py-2'>
              <div className='bg-white w-full max-w-[250px] flex md:block items-center justify-center md:w-[auto] md:bg-[#4db5ff] rounded-[10px]'>
                <button
                  className={`${
                    col === 'all'
                      ? 'md:text-[#1f1f38] md:hover:text-[#1f1f38] text-[#4db5ff] '
                      : 'hover:text-[#1f1f38] text-[#1f1f38] md:text-white flex items-center justify-center'
                  }`}
                  onClick={() => {
                    setArr(ally)
                    setCol('all')
                  }}
                >
                  All
                </button>
              </div>
              <div className='bg-white w-full max-w-[250px] flex md:block items-center justify-center md:w-[auto] md:bg-[#4db5ff] rounded-[10px]'>
                <button
                  className={`${
                    col === 'next'
                      ? 'md:text-[#1f1f38] md:hover:text-[#1f1f38] text-[#4db5ff]'
                      : 'hover:text-[#1f1f38] text-[#1f1f38] md:text-white flex items-center justify-center'
                  }`}
                  onClick={() => {
                    setArr(next)
                    setCol('next')
                  }}
                >
                  Next js
                </button>
              </div>
              <div className='bg-white w-full max-w-[250px] flex md:block items-center justify-center md:w-[auto] md:bg-[#4db5ff] rounded-[10px]'>
                <button
                  className={`${
                    col === 'react'
                      ? 'md:text-[#1f1f38] md:hover:text-[#1f1f38] text-[#4db5ff]'
                      : 'hover:text-[#1f1f38] text-[#1f1f38] md:text-white flex items-center justify-center'
                  }`}
                  onClick={() => {
                    setArr(react)
                    setCol('react')
                  }}
                >
                  React js
                </button>
              </div>
              <div className='bg-white w-full max-w-[250px] flex md:block items-center justify-center md:w-[auto] md:bg-[#4db5ff] rounded-[10px]'>
                <button
                  className={`${
                    col === 'node'
                      ? 'md:text-[#1f1f38] md:hover:text-[#1f1f38] text-[#4db5ff]'
                      : 'hover:text-[#1f1f38] text-[#1f1f38] md:text-white flex items-center justify-center'
                  }`}
                  onClick={() => {
                    setArr(node)
                    setCol('node')
                  }}
                >
                  Node js
                </button>
              </div>
            </div>
            <div className='w-full mx-auto h-[68vh] md:h-[80vh] rounded-[20px] border-[#4db5ff] border-solid border-[5px] px-5 md:gap-10'>
              <div className='px-3 max-h-[90%] scrollbar overflow-y-scroll'>
                <div className=' grid items-center md:grid-cols-2 gap-5 md:gap-10 '>
                  {arr.map((item, key) => {
                    return (
                      <article
                        key={key}
                        className='bg-[#4db5ff]  w-full max-w-[350px] my-5 md:my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'
                      >
                        <Image
                          src={item.pic}
                          className='rounded-[10px]'
                        ></Image>
                        <p className='text-center font-bold'>{item.name}</p>
                        <div className='text-[#1f1f38] flex  items-center justify-around md:my-2'>
                          <a
                            className='text-[#1f1f38] hover:text-white text-[14px] flex gap-2 items-center'
                            target='_blank'
                            href={item.github}
                          >
                            <FaGithub
                              style={{ color: 'inherit', fontSize: '1.5em' }}
                            />
                            Github
                          </a>
                          <a
                            className='text-[#1f1f38] text-[14px] flex gap-2 items-center'
                            target='_blank'
                            href={item.live}
                          >
                            <FaLink
                              style={{ color: 'inherit', fontSize: '1.5em' }}
                            />
                            Live
                          </a>
                        </div>
                      </article>
                    )
                  })}
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
