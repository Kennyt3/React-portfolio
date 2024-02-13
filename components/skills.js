import { work } from '@/components/data/personal'
const Skills = (page) => {
  return (
    <>
      <main id='skills' className='third'>
        <div className='mx-auto h-full flex justify-center items-center'>
          <div className='doro dub h-full'>
            <div className=' w-full mx-auto md:min-h-[70vh] grid items-center md:flex md:justify-between rounded-[20px] border-[#4db5ff] border-solid border-[5px] px-5 md:gap-10'>
              <div className='basis-1/2'>
                <h3 className='text-center'>Experience</h3>
                <div className='bg-[#4db5ff] w-full my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'>
                  <span className='text-[12px]'>02/2023 - Present</span>
                  <span className='text-[14px] font-semibold'>BeeSage SAI</span>
                  <p>
                    As a front-end developer, I built reusable components and
                    functional pages for the company using best practices.
                  </p>
                  <p></p>
                </div>
                <div className='bg-[#4db5ff] w-full my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'>
                  <span className='text-[12px]'>08/2022 - 01/2023</span>
                  <span className='text-[14px] font-semibold'>USAF</span>
                  <p>
                    As a front-end developer, I built reusable components and
                    functional pages for the company using best practices.
                  </p>
                </div>
              </div>
              <div className='basis-1/2'>
                <h3 className='text-center'>Education</h3>
                <div className='bg-[#4db5ff] w-full my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'>
                  <span className='text-[12px]'>08/2022 - 03/2023</span>
                  <span className='text-[14px] font-semibold'>
                    Women Techsters Fellowship
                  </span>
                  <p>
                    As a front-end developer, I built reusable components and
                    functional pages for the company using best practices.
                  </p>
                </div>
                <div className='bg-[#4db5ff] w-full my-10 rounded-[10px] md:min-h-40 p-3 text-[#1f1f38]  basis-1/2 flex flex-col'>
                  <span className='text-[12px]'>04/2017 - 07/2023</span>
                  <span className='text-[14px] font-semibold'>
                    Obafemi Awolowo University
                  </span>
                  <p>
                    As a front-end developer, I built reusable components and
                    functional pages for the company using best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Skills
