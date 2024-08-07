const About = () => {
  return (
    <section
      id='about'
      className='mb-16 md:mb-24 lg:mb-36 '
      aria-label='About me'
    >
      <div className='mb-4 py-5 backdrop-blur md:-mx-12 md:px-12'>
        <h2 className='text-sm font-bold uppercase tracking-widest  '>About</h2>
      </div>
      <div>
        <p className='mb-4'>
          My love for logic and problem-solving led me to software development
          during the economic challenges occasioned by the COVID-19, while I was
          an undergraduate law student. Seeking financial independence, I began
          learning on my own and later joined the{' '}
          <a
            href='https://www.womentechsters.org/programs'
            target='_blank'
            className='links underline'
          >
            Women Techsters Fellowship
          </a>{' '}
          where I graduated summa cum laude and as the{' '}
          <a
            href='https://www.facebook.com/Tech4DevHQ/posts/pfbid02422fw1MYCNjGws289WfWmJa87YNjtsjPS5zvaXcEAubqEjtXmw9ZMjTXa4aM9xhNl'
            className='links underline'
            target='_blank'
          >
            Best Graduating Student
          </a>{' '}
          in my learning track.
        </p>
        <p className='mb-4'>
          I’ve since expanded my skills to include backend development, both
          through self-study and mentorship. Professionally, I built{' '}
          <a
            href='https://beesage.co/'
            className='links underline'
            target='_blank'
          >
            Beesage&apos;s
          </a>{' '}
          webshop, integrating the Stripe API and a blog CMS tool. Additionally,
          I've developed various websites for clients, including{' '}
          <a
            href='https://cokeandfanta.vercel.app/'
            className='links underline'
            target='_blank'
          >
            bespoke wedding sites
          </a>{' '}
          and other unique projects.
        </p>
        <p className='mb-4'>
          I am passionate about gender equality and empowering young girls with
          digital skills, and I volunteer to support this cause. In my free
          time, I enjoy reading fiction and watching TV shows. Let’s create
          something exceptional together!
        </p>
      </div>
    </section>
  )
}

export default About
