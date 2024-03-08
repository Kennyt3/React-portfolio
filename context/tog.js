// const [suntheme, setSunTheme] = useState(false)
// const [darkTheme, setDarkTheme] = useState(false)
// const [toggleTheme, setToggleTheme] = useState(true)
// const [bg, setBg] = useState(true)
// const [buttonDisabled, setButtonDisabled] = useState(false)

// const { theme, setTheme } = useTheme()

// useEffect(() => {
//   if (theme === 'dark') {
//     setToggleTheme(false)
//     setBg(false)
//   } else {
//     setToggleTheme(true)
//     setBg(true)
//   }
// }, [theme])

// const toggleThemeFunc = () => {
//   setTheme(theme === 'light' ? 'dark' : 'light')
// }

// const changeTheme = () => {
//   setButtonDisabled(true)
//   if (toggleTheme) {
//     // Sun is visible, add the effect
//     setSunTheme(true)
//     setDarkTheme(false)
//   } else {
//     // Moon is visible, add the same effect
//     setDarkTheme(true)
//     setSunTheme(false)
//   }

//   setTimeout(() => {
//     setToggleTheme(!toggleTheme)
//     setBg(!bg)
//     setButtonDisabled(false)
//     toggleThemeFunc()
//   }, 2000)
// }

 //  ;<section class='px-[100px] bg-[#F2F5F9] max-xlg:px-[20px] max-lg:px-[50px] max-sm:px-[20px] max-xsm:px-[10px] dark:bg-[#3c2f41] h-full'>
//    <header class='flex items-center justify-between mb-4'>
//      <div class=' text-[24px] max-xxsm:text-[20px] my-3 h-[70px] flex items-center'>
//        <span class='__className_28ff18'>
//          Folashade <span class='bg-text'>Omoloja</span>
//        </span>
//      </div>
//      <button class='w-14 h-14 max-xxsm:w-12 max-xxsm:h-12 flex items-center justify-center rounded-full relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-[#EBF2FA]'>
//        <div class='w-6 h-6 '>
//          <img src='moon.png' alt='' class='w-full h-full' />
//        </div>
//      </button>
//    </header>
//    <main class='grid grid-cols-12 gap-5 mt-11'>
//      <div class=' lg:col-span-4 col-span-12'>
//        <section class=''>
//          <div class='relative z-10 w-[160px h-[160px] rounded-full'>
//            <div class=' w-[150px] h-[150px] flex justify-center items-center mx-auto  rounded-full overflow-hidden bg-[#FF9C1A]'>
//              <img
//                alt='avatar'
//                fetchpriority='high'
//                width='150'
//                height='150'
//                decoding='async'
//                data-nimg='1'
//                style={{
//                  color: 'transparent',
//                  maxWidth: '100%',
//                  height: 'auto',
//                }}
//                srcset='/_next/image?url=%2Fshades.png&amp;w=256&amp;q=100 1x, /_next/image?url=%2Fshades.png&amp;w=384&amp;q=100 2x'
//                src='/_next/image?url=%2Fshades.png&amp;w=384&amp;q=100'
//              />
//            </div>
//            <span class='spin_img'></span>
//          </div>
//          <section class='h-full w-full bg-white dark:bg-[#221d27]  px-6 max-xxsm:px-4 pt-[90px] rounded-[20px]  text-center pb-[60px] relative top-[-75px]'>
//            <h1 class='font-bold text-[24px] '>Folashade Omoloja</h1>
//            <span class='mt-6 font-semibold text-[#0b090996] dark:text-[#d3d3d3]'>
//              Front End Developer
//            </span>
//            <section class='flex mt-7 gap-2 justify-center'>
//              <a href='https://folashade-omoloja.netlify.app/' target='_blank'>
//                <div class='w-[70px] h-[70px] max-xxsm:w-[55px] max-xxsm:h-[55px] bg-[#F2F7FC] div-center  rounded-lg dark:bg-[#c9c8c8]'>
//                  <img
//                    src='portfolio-icon.png'
//                    alt='portfolio-icon.png'
//                    class='w-5'
//                  />
//                </div>
//              </a>
//              <a
//                href='https://www.linkedin.com/in/folashade-omoloja/'
//                target='_blank'
//              >
//                <div class='w-[70px] h-[70px] max-xxsm:w-[55px] max-xxsm:h-[55px] bg-[#F2F7FC] div-center  rounded-lg dark:bg-[#c9c8c8]'>
//                  <img src='linkedin.svg' alt='linkedin.svg' class='w-5' />
//                </div>
//              </a>
//              <a href='mailto: omolojashade@gmail.com' target='_blank'>
//                <div class='w-[70px] h-[70px] max-xxsm:w-[55px] max-xxsm:h-[55px] bg-[#F2F7FC] div-center  rounded-lg dark:bg-[#c9c8c8]'>
//                  <img src='gmail.png' alt='gmail.png' class='w-5' />
//                </div>
//              </a>
//              <a href='https://github.com/FolashadeOmoloja' target='_blank'>
//                <div class='w-[70px] h-[70px] max-xxsm:w-[55px] max-xxsm:h-[55px] bg-[#F2F7FC] div-center  rounded-lg dark:bg-[#c9c8c8]'>
//                  <img src='github.svg' alt='github.svg' class='w-5' />
//                </div>
//              </a>
//            </section>
//            <section class='mt-6 bg-[#F2F5F9] dark:bg-[#3c2f41] rounded-[20px] py-[33px] max-xxsm:bg-transparent dark:max-xxsm:bg-transparent'>
//              <div class='flex flex-col  items-center pl-9 max-xlg:pl-[10px] max-xxsm:pl-0'>
//                <div class='flex gap-3 items-center h-[63px] w-full mb-[18px] text-left max-lg:justify-center max-sm:justify-start'>
//                  <img src='Location.svg' alt='' />
//                  <div class='flex flex-col max-xlg:text-[14px]'>
//                    <span class='text-[#0b090996] dark:text-[#d3d3d3]'>
//                      Address
//                    </span>
//                    <span class='font-semibold'>Lagos, Nigeria</span>
//                  </div>
//                </div>
//                <div class='bg-[#E3E3E3] w-[250px] h-[1px] max-sm:w-full'></div>
//              </div>
//              <div class='flex flex-col  items-center pl-9 max-xlg:pl-[10px] max-xxsm:pl-0'>
//                <div class='flex gap-3 items-center h-[63px] w-full mb-[18px] text-left max-lg:justify-center max-sm:justify-start'>
//                  <img src='Email.svg' alt='' />
//                  <div class='flex flex-col max-xlg:text-[14px]'>
//                    <span class='text-[#0b090996] dark:text-[#d3d3d3]'>
//                      Email
//                    </span>
//                    <span class='font-semibold'>omolojashade@gmail.com</span>
//                  </div>
//                </div>
//                <div class='bg-[#E3E3E3] w-[250px] h-[1px] max-sm:w-full'></div>
//              </div>
//              <div>
//                <div class='buttons flex flex-col gap-5 items-center mt-8'>
//                  <a href='#contact' class=' cta '>
//                    <svg
//                      stroke='currentColor'
//                      fill='currentColor'
//                      stroke-width='0'
//                      viewBox='0 0 24 24'
//                      height='1em'
//                      width='1em'
//                      xmlns='http://www.w3.org/2000/svg'
//                    >
//                      <path fill='none' d='M0 0h24v24H0z'></path>
//                      <path d='M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 12h2a9 9 0 00-9-9v2c3.87 0 7 3.13 7 7zm-4 0h2c0-2.76-2.24-5-5-5v2c1.66 0 3 1.34 3 3z'></path>
//                    </svg>
//                    Let's talk
//                  </a>
//                  <a
//                    href='FOLASHADE_OMOLOJA_resume.pdf'
//                    class=' cta '
//                    download=''
//                  >
//                    <svg
//                      stroke='currentColor'
//                      fill='none'
//                      stroke-width='2'
//                      viewBox='0 0 24 24'
//                      stroke-linecap='round'
//                      stroke-linejoin='round'
//                      height='1em'
//                      width='1em'
//                      xmlns='http://www.w3.org/2000/svg'
//                    >
//                      <path d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4'></path>
//                      <polyline points='7 10 12 15 17 10'></polyline>
//                      <line x1='12' y1='15' x2='12' y2='3'></line>
//                    </svg>
//                    <span>Download Resume</span>
//                  </a>
//                </div>
//              </div>
//            </section>
//          </section>
//        </section>
//      </div>
//      <div class=' col-span-12 lg:col-span-8  rounded-[20px] max-lg:mt-8  max-lg:mb-20 '>
//        <section class=''>
//          <nav class='flex justify-end'>
//            <ul class=' h-[100px] w-[500px] max-md:w-full rounded-[20px] gap-[40px] max-md:gap-5 max-xsm:gap-3 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] dark:bg-[#221d27] div-center cursor-pointer'>
//              <li class='nav-class nav-item nav-active'>
//                <span class='text-[24px] text-[#1A1003] dark:text-white nav-icon max-md:text-lg max-xsm:text-base'>
//                  <svg
//                    stroke='currentColor'
//                    fill='currentColor'
//                    stroke-width='0'
//                    viewBox='0 0 24 24'
//                    height='1em'
//                    width='1em'
//                    xmlns='http://www.w3.org/2000/svg'
//                  >
//                    <path d='M20 20.0001C20 20.5524 19.5523 21.0001 19 21.0001H5C4.44772 21.0001 4 20.5524 4 20.0001V11.0001H1L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11.0001H20V20.0001ZM18 19.0001V9.15757L12 3.70302L6 9.15757V19.0001H18ZM12 17.0001L8.64124 13.6413C7.76256 12.7627 7.76256 11.338 8.64124 10.4594C9.51992 9.58068 10.9445 9.58068 11.8232 10.4594L12 10.6361L12.1768 10.4594C13.0555 9.58068 14.4801 9.58068 15.3588 10.4594C16.2374 11.338 16.2374 12.7627 15.3588 13.6413L12 17.0001Z'></path>
//                  </svg>
//                </span>
//                <span class='text-sm max-sm:text-xs'>Home</span>
//              </li>
//              <li class='nav-class nav-item '>
//                <span class='text-[24px] text-[#1A1003] dark:text-white nav-icon max-md:text-lg max-xsm:text-base'>
//                  <svg
//                    stroke='currentColor'
//                    fill='currentColor'
//                    stroke-width='0'
//                    viewBox='0 0 24 24'
//                    height='1em'
//                    width='1em'
//                    xmlns='http://www.w3.org/2000/svg'
//                  >
//                    <path fill='none' d='M0 0h24v24H0V0z'></path>
//                    <path d='M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z'></path>
//                  </svg>
//                </span>
//                <span class='text-sm max-sm:text-xs'>Resume</span>
//              </li>
//              <li class='nav-class nav-item '>
//                <span class='text-[24px] text-[#1A1003] dark:text-white nav-icon max-md:text-lg max-xsm:text-base'>
//                  <svg
//                    stroke='currentColor'
//                    fill='currentColor'
//                    stroke-width='0'
//                    viewBox='0 0 24 24'
//                    height='1em'
//                    width='1em'
//                    xmlns='http://www.w3.org/2000/svg'
//                  >
//                    <path fill='none' d='M0 0h24v24H0z'></path>
//                    <path
//                      fill-rule='evenodd'
//                      d='M14 6V4h-4v2h4zM4 8v11h16V8H4zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2h4z'
//                    ></path>
//                  </svg>
//                </span>
//                <span class='text-sm max-sm:text-xs'>Work</span>
//              </li>
//              <li class='nav-class nav-item '>
//                <span class='text-[24px] text-[#1A1003] dark:text-white nav-icon max-md:text-lg max-xsm:text-base'>
//                  <svg
//                    stroke='currentColor'
//                    fill='currentColor'
//                    stroke-width='0'
//                    viewBox='0 0 24 24'
//                    height='1em'
//                    width='1em'
//                    xmlns='http://www.w3.org/2000/svg'
//                  >
//                    <path
//                      fill='none'
//                      stroke-width='2'
//                      d='M1,2 L22,2 L22,18 L14,18 L6,22 L6,18 L1,18 L1,2 Z M6,10 L7,10 L7,11 L6,11 L6,10 Z M11,10 L12,10 L12,11 L11,11 L11,10 Z M16,10 L17,10 L17,11 L16,11 L16,10 Z'
//                    ></path>
//                  </svg>
//                </span>
//                <span class='text-sm max-sm:text-xs'>Contact</span>
//              </li>
//            </ul>
//            <div>
//              <img
//                alt=''
//                loading='lazy'
//                width='100'
//                height='100'
//                decoding='async'
//                data-nimg='1'
//                class='h-[100px w-[100px] cursor-pointer max-xxsm:hidden'
//                style={{ color: 'transparent' }}
//                srcset='/_next/image?url=%2Fbitmoji1.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fbitmoji1.png&amp;w=256&amp;q=75 2x'
//                src='/_next/image?url=%2Fbitmoji1.png&amp;w=256&amp;q=75'
//              />
//            </div>
//          </nav>
//          <section class='bg-white dark:bg-[#221d27] h-[687px] max-lg:h-full w-full mt-3 rounded-[20px]  py-8'>
//            <section>
//              <div class='__className_1562c7 flex items-center gap-8 mb-4 px-[62px] max-lg:px-[20px] max-sm:flex-col max-sm:items-start max-sm:gap-1'>
//                <h2 class='header-title'>ABOUT ME</h2>
//                <div class='header-line'></div>
//              </div>
//              <p class='font-[500] leading-[30px] px-[62px] max-lg:px-[20px]'>
//                Hello there! I'm Folashade, a Front end developer, solving
//                problems one code at a time. I specialize in building Frontend
//                applications, I take pride in my work and ensure I deliver the
//                most accessible and most responsive application possible. It's
//                not just about writing code; it's about building experiences that
//                leave a lasting impression{' '}
//                <img src='emoji.png' alt='' class='w-5 h-5 inline-block' />.
//              </p>
//              <section class='mt-[26px]  pl-[62px] pr-[52px] max-lg:px-[20px] max-xsm:px-[10px]'>
//                <h3 class='__className_1562c7 font-semibold text-[32px] leading-[40px] tracking-[2.5%] mb-6 max-sm:text-[28px]'>
//                  What I do{' '}
//                </h3>
//                <section class='scrollbar flex justify-between flex-col gap-5 overflow-y-scroll h-[350px] max-lg:h-full max-lg:overflow-auto qualific pr-[20px] max-lg:pr-0'>
//                  <div class='bg-[#ed240a4b] p-4 leading-5 rounded-[20px] lg:min-h-[210px] min-h-[180px]  flex-col div-center qualific-div '>
//                    <div class='flex gap-5 items-center text-[24px] max-sm:text-xl max-sm:gap-3 max-xxsm:text-base  w-full mb-4 max-sm:mb-2'>
//                      <span class='text-[#3498db]'>
//                        <svg
//                          stroke='currentColor'
//                          fill='currentColor'
//                          stroke-width='0'
//                          viewBox='0 0 512 512'
//                          height='1em'
//                          width='1em'
//                          xmlns='http://www.w3.org/2000/svg'
//                        >
//                          <path d='M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z'></path>
//                        </svg>
//                      </span>
//                      <h4 class='font-semibold max-xxsm:font-bold __className_1562c7 uppercase w-full text-start'>
//                        REACT &amp; NEXT.JS Developer
//                      </h4>
//                    </div>
//                    <p class='tracking-[2.5%] text-sm  '>
//                      As a front-end developer, my primary playground is
//                      React.js, and I am also well-versed in the intricacies of
//                      Next.js. I'm deeply passionate about creating dynamic and
//                      responsive user interfaces using the power of React's
//                      component-based architecture. With Next.js, I seamlessly
//                      extend these capabilities, leveraging server-side rendering
//                      and efficient routing to build performant web applications.
//                      From state management to reusable components, I excel in
//                      crafting seamless and efficient user experiences.
//                    </p>
//                  </div>
//                  <div class='bg-[#ed240a4b] p-4 leading-5 rounded-[20px] lg:min-h-[210px] min-h-[180px]  flex-col div-center qualific-div '>
//                    <div class='flex gap-5 items-center text-[24px] max-sm:text-xl max-sm:gap-3 max-xxsm:text-base  w-full mb-4 max-sm:mb-2'>
//                      <span class='text-[#28d79f]'>
//                        <svg
//                          stroke='currentColor'
//                          fill='currentColor'
//                          stroke-width='0'
//                          viewBox='0 0 24 24'
//                          height='1em'
//                          width='1em'
//                          xmlns='http://www.w3.org/2000/svg'
//                        >
//                          <path fill='none' d='M0 0h24v24H0z'></path>
//                          <path d='M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z'></path>
//                        </svg>
//                      </span>
//                      <h4 class='font-semibold max-xxsm:font-bold __className_1562c7 uppercase w-full text-start'>
//                        RESPONSIVE DESIGN ADVOCATE
//                      </h4>
//                    </div>
//                    <p class='tracking-[2.5%] text-sm  '>
//                      In the ever-evolving landscape of web development, ensuring
//                      a seamless user experience across various devices is
//                      paramount. I am dedicated to crafting websites that not
//                      only look stunning on desktops but also adapt gracefully to
//                      tablets and smartphones. Through the implementation of
//                      responsive design principles, I guarantee that your web
//                      presence remains accessible and engaging across all
//                      platforms.
//                    </p>
//                  </div>
//                  <div class='bg-[#ed240a4b] p-4 leading-5 rounded-[20px] lg:min-h-[210px] min-h-[180px]  flex-col div-center qualific-div '>
//                    <div class='flex gap-5 items-center text-[24px] max-sm:text-xl max-sm:gap-3 max-xxsm:text-base  w-full mb-4 max-sm:mb-2'>
//                      <span class='text-[#ED250A]'>
//                        <svg
//                          stroke='currentColor'
//                          fill='currentColor'
//                          stroke-width='0'
//                          role='img'
//                          viewBox='0 0 24 24'
//                          height='1em'
//                          width='1em'
//                          xmlns='http://www.w3.org/2000/svg'
//                        >
//                          <title></title>
//                          <path d='M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'></path>
//                        </svg>
//                      </span>
//                      <h4 class='font-semibold max-xxsm:font-bold __className_1562c7 uppercase w-full text-start'>
//                        JAVASCRIPT Developer
//                      </h4>
//                    </div>
//                    <p class='tracking-[2.5%] text-sm  '>
//                      At the core of every interactive web experience is
//                      JavaScript, and I take pride in my proficiency with this
//                      versatile language. Whether it's enhancing user interfaces,
//                      handling asynchronous operations, or implementing requests,
//                      I leverage the full potential of JavaScript to bring
//                      websites to life. I'm constantly exploring new features and
//                      modern JavaScript frameworks to stay ahead in the dynamic
//                      world of front-end development.
//                    </p>
//                  </div>
//                  <div class='bg-[#ed240a4b] p-4 leading-5 rounded-[20px] lg:min-h-[210px] min-h-[180px]  flex-col div-center qualific-div '>
//                    <div class='flex gap-5 items-center text-[24px] max-sm:text-xl max-sm:gap-3 max-xxsm:text-base  w-full mb-4 max-sm:mb-2'>
//                      <span class='text-[#1e87e5]'>
//                        <svg
//                          stroke='currentColor'
//                          fill='currentColor'
//                          stroke-width='0'
//                          viewBox='0 0 24 24'
//                          height='1em'
//                          width='1em'
//                          xmlns='http://www.w3.org/2000/svg'
//                        >
//                          <path fill='none' d='M0 0h24v24H0z'></path>
//                          <path d='M15 2c-2.71 0-5.05 1.54-6.22 3.78a7.062 7.062 0 00-3 3A7.014 7.014 0 002 15c0 3.87 3.13 7 7 7 2.71 0 5.05-1.54 6.22-3.78a7.062 7.062 0 003-3A7.014 7.014 0 0022 9c0-3.87-3.13-7-7-7zM9 20a5.002 5.002 0 01-4-8c0 3.87 3.13 7 7 7-.84.63-1.88 1-3 1zm3-3a5.002 5.002 0 01-4-8c0 3.86 3.13 6.99 7 7-.84.63-1.88 1-3 1zm4.7-3.3c-.53.19-1.1.3-1.7.3-2.76 0-5-2.24-5-5 0-.6.11-1.17.3-1.7.53-.19 1.1-.3 1.7-.3 2.76 0 5 2.24 5 5 0 .6-.11 1.17-.3 1.7zM19 12c0-3.86-3.13-6.99-7-7a5.002 5.002 0 017 7z'></path>
//                          <path
//                            fill='none'
//                            d='M0 0h24v24H0zm0 0h24v24H0z'
//                          ></path>
//                        </svg>
//                      </span>
//                      <h4 class='font-semibold max-xxsm:font-bold __className_1562c7 uppercase w-full text-start'>
//                        ANIMATION ENTHUSIAST
//                      </h4>
//                    </div>
//                    <p class='tracking-[2.5%] text-sm  '>
//                      Bringing websites to life involves more than static
//                      elements. I have a knack for incorporating captivating
//                      animations and transitions to elevate the user experience.
//                      Leveraging tools like CSS animations and libraries such as
//                      Framer Motion, I add subtle motion that not only enhances
//                      usability but also adds that extra flair to capture user
//                      attention.
//                    </p>
//                  </div>
//                </section>
//              </section>
//            </section>
//          </section>
//        </section>
//      </div>
//    </main>
//  </section>
