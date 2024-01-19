import Link from 'next/link'
const Keep = () => {
  return (
    <>
      <div className='containerm header'>
        <Link href='/' className='text-4xl design text-primary800 font-bold'>
          {/* <Image src={logo} alt='logo' width={70} height={70} /> */}
          Kennyt
        </Link>
        <div className='navbar'>
          <ul className='nav-list'>
            <li>
              <Link href='#about'>About</Link>
            </li>

            <li>
              <Link href='#projects'>Projects</Link>
            </li>
            <li>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
        </div>
        <div className='menu'>
          <AiOutlineMenu size={25} onClick={toggleScroll} />
        </div>
      </div>
    </>
  )
}

export default Keep
