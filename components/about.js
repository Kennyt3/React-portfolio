import Image from 'next/image'
import Meme from '@/public/img/circle.jpg'
const Header = (page) => {
  return (
    <>
      <main id='about' className='second'>
        <div className='mx-auto h-full flex justify-center items-center'>
          <div className='doro'>
            <h1 className='text-center text-[#4db5ff]'>Get to know me</h1>
            <div className='xl:w-[60vw] mx-auto  md:flex md:justify-between md:items-center'>
              <div className='image-div'>
                <Image
                  src={Meme}
                  width={500}
                  height={500}
                  className='rounded-[50%]'
                ></Image>
              </div>
              <div className='text-div px-20'>
                <p>
                  <span className='list-disc list-item'>
                    My name is Mercy Kehinde Taiwo.
                  </span>

                  <span className='list-disc list-item'>
                    I am a Full stack web developer.
                  </span>
                  <span className='list-disc list-item'>
                    I hold a bachelor's degree in Law from Obafemi Awolowo
                    University
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
                    My favorite pastime typically involves watching a compelling
                    TV drama, accompanied by a snack, and a healthy beverage.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Header
