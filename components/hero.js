const Hero = () => {
  return (
    <>
      {/* @media (min-width: 1280px)
.xl\:w-\[50vw\] {
    width: 50vw;
} */}
      <main className='xl:w-[50vw] mx-auto min-h-[85vh] grid items-center md:flex md:justify-between'>
        <div className='text-center'>
          <span>Hi there,</span>
          <h1>
            I am <span className='mercy'>Mercy Taiwo</span>.
          </h1>
          <h2>Software Developer</h2>
          <div className=' flex  gap-4 justify-center mt-5'>
            <button className='btn'>My Resume</button>
            <button className='btn'>Say Hi</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
