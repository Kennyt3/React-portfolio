const Contact = (page) => {
  return (
    <>
      <main id='contact' className='fifth'>
        <div className='mx-auto mt-10 md:mt-0 h-full relative'>
          <div className='doro cne flex flex-col gap-5 pt-5 h-full'>
            <h3 className='text-center'>Contact Me</h3>
            <div className='w-full mx-auto md:min-h-[80vh] grid items-center md:flex md:justify-between rounded-[20px] border-[#4db5ff] border-solid border-[5px] px-5 md:gap-10'>
              <div className='flex w-full'>
                <div className='basis-1/2'>
                  <div className='w-[250px] md:min-h-[50px] grid items-center md:flex md:justify-between rounded-[10px] border-[#4db5ff] border-solid border-[2px]'></div>
                  <div></div>
                  <div></div>
                </div>
                <div className='basis-1/2'></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
