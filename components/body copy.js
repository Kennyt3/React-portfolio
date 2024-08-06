// import React from 'react'

// const Body = () => {
//   return (
//     <div className='relative group/spotlight'>
//       <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0'>
//         <div className='lg:flex lg:justify-between lg:gap-4'>
//           <main id='content' class='pt-24 lg:w-1/2 lg:py-24'>
//             <section
//               id='projects'
//               class='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
//               aria-label='Selected projects'
//             >
//               <div class='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
//                 <h2 class='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
//                   Projects
//                 </h2>
//               </div>
//               <div>
//                 <ul class='group/list'>
//                   <li class='mb-12'>
//                     <div class='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
//                       <div class='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
//                       <div class='z-10 sm:order-2 sm:col-span-6'>
//                         <h3>
//                           <a
//                             class='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
//                             href='https://www.newline.co/courses/build-a-spotify-connected-app'
//                             target='_blank'
//                             rel='noreferrer noopener'
//                             aria-label='Build a Spotify Connected App (opens in a new tab)'
//                           >
//                             <span class='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
//                             <span>
//                               Build a Spotify Connected{' '}
//                               <span class='inline-block'>
//                                 App
//                                 <svg
//                                   xmlns='http://www.w3.org/2000/svg'
//                                   viewBox='0 0 20 20'
//                                   fill='currentColor'
//                                   class='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
//                                   aria-hidden='true'
//                                 >
//                                   <path
//                                     fill-rule='evenodd'
//                                     d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
//                                     clip-rule='evenodd'
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </span>
//                           </a>
//                         </h3>
//                         <p class='mt-2 text-sm leading-normal'>
//                           Video course that teaches how to build a web app with
//                           the Spotify Web API. Topics covered include the
//                           principles of REST APIs, user auth flows, Node,
//                           Express, React, Styled Components, and more.
//                         </p>
//                       </div>
//                       <img
//                         alt='Build a Spotify Connected App Newline course marketing card'
//                         loading='lazy'
//                         width='200'
//                         height='48'
//                         decoding='async'
//                         data-nimg='1'
//                         class='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
//                         style={{ color: 'transparent' }}
//                         srcset='/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x'
//                         src='/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75'
//                       />
//                     </div>
//                   </li>
//                   <li class='mb-12'>
//                     <div class='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
//                       <div class='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
//                       <div class='z-10 sm:order-2 sm:col-span-6'>
//                         <h3>
//                           <a
//                             class='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
//                             href='https://spotify-profile.herokuapp.com/'
//                             target='_blank'
//                             rel='noreferrer noopener'
//                             aria-label='Spotify Profile (opens in a new tab)'
//                           >
//                             <span class='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
//                             <span>
//                               Spotify{' '}
//                               <span class='inline-block'>
//                                 Profile
//                                 <svg
//                                   xmlns='http://www.w3.org/2000/svg'
//                                   viewBox='0 0 20 20'
//                                   fill='currentColor'
//                                   class='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
//                                   aria-hidden='true'
//                                 >
//                                   <path
//                                     fill-rule='evenodd'
//                                     d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
//                                     clip-rule='evenodd'
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </span>
//                           </a>
//                         </h3>
//                         <p class='mt-2 text-sm leading-normal'>
//                           Web app for visualizing personalized Spotify data.
//                           View your top artists, top tracks, recently played
//                           tracks, and detailed audio information about each
//                           track. Create and save new playlists of recommended
//                           tracks based on your existing playlists and more.
//                         </p>
//                         <a
//                           class='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'
//                           href='https://github.com/bchiang7/spotify-profile'
//                           target='_blank'
//                           rel='noreferrer noopener'
//                           aria-label='636 stars on GitHub (opens in a new tab)'
//                         >
//                           <svg
//                             xmlns='http://www.w3.org/2000/svg'
//                             viewBox='0 0 20 20'
//                             fill='currentColor'
//                             class='mr-1 h-3 w-3'
//                             aria-hidden='true'
//                           >
//                             <path
//                               fill-rule='evenodd'
//                               d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
//                               clip-rule='evenodd'
//                             ></path>
//                           </svg>
//                           <span>636</span>
//                         </a>
//                         <ul
//                           class='mt-2 flex flex-wrap'
//                           aria-label='Technologies used:'
//                         >
//                           <li class='mr-1.5 mt-2'>
//                             <div class='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
//                               React
//                             </div>
//                           </li>
//                           <li class='mr-1.5 mt-2'>
//                             <div class='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
//                               Express
//                             </div>
//                           </li>
//                           <li class='mr-1.5 mt-2'>
//                             <div class='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
//                               Spotify API
//                             </div>
//                           </li>
//                           <li class='mr-1.5 mt-2'>
//                             <div class='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
//                               Heroku
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                       <img
//                         alt='Spotify Profile app homepage'
//                         loading='lazy'
//                         width='200'
//                         height='48'
//                         decoding='async'
//                         data-nimg='1'
//                         class='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
//                         style={{ color: 'transparent' }}
//                         srcset='/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75 2x'
//                         src='/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75'
//                       />
//                     </div>
//                   </li>
//                   <li class='mb-12'>
//                     <div class='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
//                       <div class='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
//                       <div class='z-10 sm:order-2 sm:col-span-6'>
//                         <h3>
//                           <a
//                             class='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
//                             href='https://halcyon-theme.netlify.app/'
//                             target='_blank'
//                             rel='noreferrer noopener'
//                             aria-label='Halcyon Theme (opens in a new tab)'
//                           >
//                             <span class='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
//                             <span>
//                               Halcyon{' '}
//                               <span class='inline-block'>
//                                 Theme
//                                 <svg
//                                   xmlns='http://www.w3.org/2000/svg'
//                                   viewBox='0 0 20 20'
//                                   fill='currentColor'
//                                   class='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
//                                   aria-hidden='true'
//                                 >
//                                   <path
//                                     fill-rule='evenodd'
//                                     d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
//                                     clip-rule='evenodd'
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </span>
//                           </a>
//                         </h3>
//                         <p class='mt-2 text-sm leading-normal'>
//                           Minimal dark blue theme for VS Code, Sublime Text,
//                           Atom, iTerm, and more.
//                         </p>
//                         <a
//                           class='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'
//                           href='https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode'
//                           target='_blank'
//                           rel='noreferrer noopener'
//                           aria-label='Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)'
//                         >
//                           <svg
//                             xmlns='http://www.w3.org/2000/svg'
//                             viewBox='0 0 20 20'
//                             fill='currentColor'
//                             class='mr-1 h-4 w-4'
//                             aria-hidden='true'
//                           >
//                             <path d='M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z'></path>
//                             <path d='M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z'></path>
//                           </svg>
//                           <span>100k+ Installs</span>
//                         </a>
//                       </div>
//                       <img
//                         alt='Halcyon Theme homepage hero with screenshot of VS Code editor'
//                         loading='lazy'
//                         width='200'
//                         height='48'
//                         decoding='async'
//                         data-nimg='1'
//                         class='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
//                         style={{ color: 'transparent' }}
//                         srcset='/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75 2x'
//                         src='/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75'
//                       />
//                     </div>
//                   </li>
//                   <li class='mb-12'>
//                     <div class='group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
//                       <div class='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
//                       <div class='z-10 sm:order-2 sm:col-span-6'>
//                         <h3>
//                           <a
//                             class='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
//                             href='https://v4.brittanychiang.com/'
//                             target='_blank'
//                             rel='noreferrer noopener'
//                             aria-label='brittanychiang.com (v4) (opens in a new tab)'
//                           >
//                             <span class='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
//                             <span>
//                               brittanychiang.com{' '}
//                               <span class='inline-block'>
//                                 (v4)
//                                 <svg
//                                   xmlns='http://www.w3.org/2000/svg'
//                                   viewBox='0 0 20 20'
//                                   fill='currentColor'
//                                   class='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
//                                   aria-hidden='true'
//                                 >
//                                   <path
//                                     fill-rule='evenodd'
//                                     d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
//                                     clip-rule='evenodd'
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </span>
//                           </a>
//                         </h3>
//                         <p class='mt-2 text-sm leading-normal'>
//                           An old portfolio site built with Gatsby with 6k+ stars
//                           and 3k+ forks
//                         </p>
//                         <a
//                           class='relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300'
//                           href='https://github.com/bchiang7/v4'
//                           target='_blank'
//                           rel='noreferrer noopener'
//                           aria-label='7385 stars on GitHub (opens in a new tab)'
//                         >
//                           <svg
//                             xmlns='http://www.w3.org/2000/svg'
//                             viewBox='0 0 20 20'
//                             fill='currentColor'
//                             class='mr-1 h-3 w-3'
//                             aria-hidden='true'
//                           >
//                             <path
//                               fill-rule='evenodd'
//                               d='M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z'
//                               clip-rule='evenodd'
//                             ></path>
//                           </svg>
//                           <span>7,385</span>
//                         </a>
//                         <ul
//                           class='mt-2 flex flex-wrap'
//                           aria-label='Technologies used:'
//                         >
//                           <li class='mr-1.5 mt-2'>
//                             <div class='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
//                               Gatsby
//                             </div>
//                           </li>
//                           <li class='mr-1.5 mt-2'>
//                             <div class='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
//                               Styled Components
//                             </div>
//                           </li>
//                           <li class='mr-1.5 mt-2'>
//                             <div class='flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 '>
//                               Netlify
//                             </div>
//                           </li>
//                         </ul>
//                       </div>
//                       <img
//                         alt='brittanychiang.com version 4 hero section'
//                         loading='lazy'
//                         width='200'
//                         height='48'
//                         decoding='async'
//                         data-nimg='1'
//                         class='rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1'
//                         style={{ color: 'transparent' }}
//                         srcset='/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75 2x'
//                         src='/_next/image?url=%2Fimages%2Fprojects%2Fv4.png&amp;w=640&amp;q=75'
//                       />
//                     </div>
//                   </li>
//                 </ul>
//                 <div class='mt-12'>
//                   <a
//                     class='inline-flex items-center  leading-tight   group'
//                     aria-label='View Full Project Archive'
//                     href='/archive'
//                   >
//                     <span>
//                       <span class='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>
//                         View Full Project{' '}
//                       </span>
//                       <span class='whitespace-nowrap'>
//                         <span class='border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none'>
//                           Archive
//                         </span>
//                         <svg
//                           xmlns='http://www.w3.org/2000/svg'
//                           viewBox='0 0 20 20'
//                           fill='currentColor'
//                           class='ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none'
//                           aria-hidden='true'
//                         >
//                           <path
//                             fill-rule='evenodd'
//                             d='M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z'
//                             clip-rule='evenodd'
//                           ></path>
//                         </svg>
//                       </span>
//                     </span>
//                   </a>
//                 </div>
//               </div>
//             </section>
//             <section
//               id='writing'
//               class='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24'
//               aria-label='Blog posts'
//             >
//               <div class='sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0'>
//                 <h2 class='text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only'>
//                   Writing
//                 </h2>
//               </div>
//               <div>
//                 <ul class='group/list'>
//                   <li class='mb-12'>
//                     <div class='group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
//                       <div class='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
//                       <img
//                         alt='Telescope'
//                         loading='lazy'
//                         width='200'
//                         height='48'
//                         decoding='async'
//                         data-nimg='1'
//                         class='z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2'
//                         style={{ color: 'transparent' }}
//                         srcset='/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75 2x'
//                         src='/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75'
//                       />
//                       <div class='z-10 col-span-6'>
//                         <p class='-mt-1 text-sm font-semibold leading-6'>
//                           2020
//                         </p>
//                         <h3 class='-mt-1'>
//                           <a
//                             class='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
//                             href='https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/'
//                             target='_blank'
//                             rel='noreferrer noopener'
//                             aria-label='Integrating Algolia Search with WordPress Multisite (opens in a new tab)'
//                           >
//                             <span class='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
//                             <span>
//                               Integrating Algolia Search with WordPress{' '}
//                               <span class='inline-block'>
//                                 Multisite
//                                 <svg
//                                   xmlns='http://www.w3.org/2000/svg'
//                                   viewBox='0 0 20 20'
//                                   fill='currentColor'
//                                   class='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
//                                   aria-hidden='true'
//                                 >
//                                   <path
//                                     fill-rule='evenodd'
//                                     d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
//                                     clip-rule='evenodd'
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </span>
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                   </li>
//                   <li class='mb-12'>
//                     <div class='group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50'>
//                       <div class='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg'></div>
//                       <img
//                         alt='Headless horseamn'
//                         loading='lazy'
//                         width='200'
//                         height='48'
//                         decoding='async'
//                         data-nimg='1'
//                         class='z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2'
//                         style={{ color: 'transparent' }}
//                         srcset='/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=640&amp;q=75 2x'
//                         src='/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=640&amp;q=75'
//                       />
//                       <div class='z-10 col-span-6'>
//                         <p class='-mt-1 text-sm font-semibold leading-6'>
//                           2019
//                         </p>
//                         <h3 class='-mt-1'>
//                           <a
//                             class='inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base'
//                             href='https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/'
//                             target='_blank'
//                             rel='noreferrer noopener'
//                             aria-label='Building a Headless Mobile App CMS From Scratch (opens in a new tab)'
//                           >
//                             <span class='absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block'></span>
//                             <span>
//                               Building a Headless Mobile App CMS From{' '}
//                               <span class='inline-block'>
//                                 Scratch
//                                 <svg
//                                   xmlns='http://www.w3.org/2000/svg'
//                                   viewBox='0 0 20 20'
//                                   fill='currentColor'
//                                   class='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px'
//                                   aria-hidden='true'
//                                 >
//                                   <path
//                                     fill-rule='evenodd'
//                                     d='M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z'
//                                     clip-rule='evenodd'
//                                   ></path>
//                                 </svg>
//                               </span>
//                             </span>
//                           </a>
//                         </h3>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </section>
//             <footer class='max-w-md pb-16 text-sm text-slate-500 sm:pb-0'>
//               <p>
//                 Loosely designed in{' '}
//                 <a
//                   href='https://www.figma.com/'
//                   class='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
//                   target='_blank'
//                   rel='noreferrer noopener'
//                   aria-label='Figma (opens in a new tab)'
//                 >
//                   Figma
//                 </a>{' '}
//                 and coded in{' '}
//                 <a
//                   href='https://code.visualstudio.com/'
//                   class='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
//                   target='_blank'
//                   rel='noreferrer noopener'
//                   aria-label='Visual Studio Code (opens in a new tab)'
//                 >
//                   Visual Studio Code
//                 </a>{' '}
//                 by yours truly. Built with{' '}
//                 <a
//                   href='https://nextjs.org/'
//                   class='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
//                   target='_blank'
//                   rel='noreferrer noopener'
//                   aria-label='Next.js (opens in a new tab)'
//                 >
//                   Next.js
//                 </a>{' '}
//                 and{' '}
//                 <a
//                   href='https://tailwindcss.com/'
//                   class='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
//                   target='_blank'
//                   rel='noreferrer noopener'
//                   aria-label='Tailwind CSS (opens in a new tab)'
//                 >
//                   Tailwind CSS
//                 </a>
//                 , deployed with{' '}
//                 <a
//                   href='https://vercel.com/'
//                   class='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
//                   target='_blank'
//                   rel='noreferrer noopener'
//                   aria-label='Vercel (opens in a new tab)'
//                 >
//                   Vercel
//                 </a>
//                 . All text is set in the{' '}
//                 <a
//                   href='https://rsms.me/inter/'
//                   class='font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300'
//                   target='_blank'
//                   rel='noreferrer noopener'
//                   aria-label='Inter (opens in a new tab)'
//                 >
//                   Inter
//                 </a>{' '}
//                 typeface.
//               </p>
//             </footer>
//           </main>
//           <div>
//             <button
//               class='hover:-text-teal-300 absolute bottom-0 right-0 inline-flex items-center px-2 py-4 font-medium text-slate-400 hover:-translate-y-2 focus-visible:text-teal-300'
//               type='button'
//               aria-haspopup='dialog'
//               aria-expanded='false'
//               aria-controls='radix-:R4l6:'
//               data-state='closed'
//             >
//               <span class='sr-only'>Click to time travel</span>
//               <img
//                 alt='Spinning Tardis from Doctor Who'
//                 loading='lazy'
//                 width='100'
//                 height='86'
//                 decoding='async'
//                 data-nimg='1'
//                 style={{ color: 'transparent' }}
//                 srcset='/_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=128&amp;q=75 1x, /_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=256&amp;q=75 2x'
//                 src='/_next/image?url=%2Fimages%2Ftardis%2Frotate.gif&amp;w=256&amp;q=75'
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Body

//  <div>
//    <p className='mb-4'>
//      My journey into software development began with a deep-seated love for
//      logic and problem-solving. After the economic challenges brought on by
//      COVID-19, as an undergraduate law student facing financial constraints, I
//      sought a marketable skill to support myself until I could obtain my BL
//      certificate. Software development emerged as the perfect fit, allowing me
//      to harness my logical thinking to create impactful solutions.
//    </p>
//    <p className='mb-4'>
//      I began learning software development on my own, driven by a passion for
//      logic and a desire to build a financially independent future. This
//      self-taught foundation was further enriched through my participation in the{' '}
//      <a
//        href='https://www.womentechsters.org/programs'
//        target='_blank'
//        className='links underline'
//      >
//        Women Techsters Fellowship
//      </a>{' '}
//      , a prestigious program sponsored by Microsoft, where I graduated summa cum
//      laude and was honored as the{' '}
//      <a
//        href='https://www.facebook.com/Tech4DevHQ/posts/pfbid02422fw1MYCNjGws289WfWmJa87YNjtsjPS5zvaXcEAubqEjtXmw9ZMjTXa4aM9xhNl'
//        className='links underline'
//        target='_blank'
//      >
//        Best Graduating Student
//      </a>{' '}
//      in my learning track.
//    </p>
//    <p className='mb-4'>
//      Since then, I have expanded my skills to include backend development, both
//      through self-study and under the guidance of a mentor. This has allowed me
//      to handle a broader range of projects and deepen my expertise in creating
//      comprehensive web solutions.
//    </p>
//    <p className='mb-4'>
//      Professionally, I have single-handedly built{' '}
//      <a href='https://beesage.co/' className='links underline' target='_blank'>
//        Beesage&apos;s
//      </a>{' '}
//      webshop, integrating the Stripe API and a blog CMS tool. Additionally, I've
//      developed various websites for clients, including{' '}
//      <a
//        href='https://cokeandfanta.vercel.app/'
//        className='links underline'
//        target='_blank'
//      >
//        custom wedding sites
//      </a>{' '}
//      and other unique projects.
//    </p>
//    <p className='mb-4'>
//      Beyond my professional work, I am a strong advocate for gender equality and
//      empowering young girls with digital skills. I've volunteered in various
//      capacities to support this cause and am passionate about helping others
//      achieve financial independence through technology.
//    </p>
//    <p className='mb-4'>
//      In my free time, I enjoy reading fiction and watching TV shows, which offer
//      a creative escape and further inspire my work. I am excited to bring my
//      expertise, passion, and unique perspective to your project. Let&apos;s
//      create something exceptional together!
//    </p>
//  </div>
