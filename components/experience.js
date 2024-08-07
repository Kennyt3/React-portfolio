import { experience } from './data/experience'
import { MdArrowOutward } from 'react-icons/md'
const Experience = () => {
  return (
    <section
      id='experience'
      class='mb-16  md:mb-24 lg:mb-36'
      aria-label='Work experience'
    >
      <div class=''>
        <h2 class='text-sm font-bold uppercase tracking-widest  '>
          Experience
        </h2>
      </div>
      <div>
        <ol>
          {experience.map((item, index) => (
            <li class='my-12' key={index}>
              <div class='group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 group-hover:!opacity-100 group-hover/list:opacity-50'>
                <div class='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block group-hover:bg-shadow'></div>
                <header
                  class='z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-textPrimary group-hover:text-accentPrimary sm:col-span-2'
                  aria-label={item.aria}
                >
                  {item.date}
                </header>
                <div class='z-10 sm:col-span-6'>
                  <h3 class='font-medium leading-snug'>
                    <div>
                      <a
                        class='inline-flex items-baseline font-medium leading-tight text-accentPrimary group-hover:text-textPrimary focus-visible:text-teal-300  group/link text-base'
                        href={item.link}
                        target='_blank'
                        rel='noreferrer noopener'
                        aria-label={item.headingaria}
                      >
                        <span class='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
                        <span>
                          {item.heading}
                          <span class='inline-block'>
                            <MdArrowOutward
                              fill='currentColor'
                              class='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                            />
                          </span>
                        </span>
                      </a>
                    </div>
                  </h3>
                  <p class='mt-2 text-sm leading-normal'>{item.text}</p>
                  <ul
                    class='mt-2 flex flex-wrap'
                    aria-label='Technologies used'
                  >
                    {item.tools.map((tool, index) => (
                      <li
                        class='mr-1.5 mt-2 text-textPrimary group-hover:text-accentPrimary'
                        key={index}
                      >
                        <div class='flex items-center rounded-full bg-[#F2F2F2] px-3 py-1 text-xs font-medium leading-5 '>
                          {tool}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
          <div class='mt-12'>
            <a
              class='inline-flex items-baseline leading-tight  hover:text-textPrimary focus-visible:text-textPrimary group/link text-base font-semibold'
              href='/resume.pdf'
              target='_blank'
              rel='noreferrer noopener'
              aria-label='View Full Résumé (opens in a new tab)'
            >
              <span>
                View Full{' '}
                <span class='inline-block'>
                  Résumé
                  <MdArrowOutward
                    fill='currentColor'
                    class='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
                  />
                </span>
              </span>
            </a>
          </div>
        </ol>
      </div>
    </section>
  )
}

export default Experience
