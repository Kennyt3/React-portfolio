import { work } from '@/components/data/personal'
const Skills = (page) => {
  return (
    <>
      <main id='skills' className='third'>
        <div className='mx-auto h-full flex justify-center items-center'>
          {/* <div className='xl:w-[70vw] mx-auto min-h-[85vh] grid items-center md:flex md:justify-between rounded-[20px] border-[#4db5ff] border-solid border-[5px] px-10 '>
            <div className='basis-1/2 h-full'>
              <h2>Work Experiences</h2>
              <div>
                {work.map((item, key) => {
                  return (
                    <div className='bg-[#4db5ff] max-w-[300px] my-10 rounded-[10px]'>
                      <p>{item.date}</p>
                      <h2>{item.org}</h2>
                      <p>{item.details}</p>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className='basis-1/2 h-full'>
              <h2>Education & Certifications</h2>
            </div>
          </div> */}
          <div className='xl:w-[70vw] mx-auto min-h-[85vh] grid items-center md:flex md:justify-between rounded-[20px] border-[#4db5ff] border-solid border-[5px] px-10 '>
            <div></div>
            <div></div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Skills
