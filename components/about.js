const About = () => {
  return (
    <section
      id='about'
      className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
      aria-label='About me'
    >
      <div className='mb-4 py-5 backdrop-blur md:-mx-12 md:px-12'>
        <h2 className='text-sm font-bold uppercase tracking-widest  '>About</h2>
      </div>
      <div>
        <p className='mb-4'>
          My journey into software development began during the economic
          hardships brought on by COVID-19. As an undergraduate student in my
          penultimate year, it became challenging for my parents to support my
          studies. To become financially independent and bridge the gap before I
          could practice law, I decided to learn a skill that would sustain me.
        </p>
        <p className='mb-4'>
          In furtherance of this cause, I joined the{' '}
          <a
            href='https://www.womentechsters.org/programs'
            target='_blank'
            className='links underline'
          >
            Women Techsters Fellowship
          </a>{' '}
          , a prestigious program sponsored by Microsoft, where I graduated
          summa cum laude and was honored as the{' '}
          <a href='' className='links underline' target='_blank'>
            Best Graduating Student
          </a>{' '}
          in my learning track, highlighting my dedication to mastering new
          skills and striving for excellence. I have taken a number of other
          certification courses as well as participated in a mentorship program
        </p>
        <p className='mb-4'>
          Professionally, I&apos;ve single-handedly built{' '}
          <a
            href='https://beesage.co/'
            className='links underline'
            target='_blank'
          >
            Beesage&apos;s
          </a>{' '}
          current webshop, integrating the Stripe API and a blog CMS tool.
          Additionally, I&apos;ve developed various websites for clients,
          including custom wedding websites and other unique projects.
        </p>
      </div>
    </section>
  )
}

export default About
