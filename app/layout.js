import './global.css'
import UserProvider from '@/context/userContext'

export const metadata = {
  title: 'Mercy Taiwo - Portfolio',
  description:
    'Mercy Taiwo is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.',
  applicationName: 'Mercy Taiwo Portfolio website',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Mercy Taiwo',
    'Mercy Kehinde Taiwo',
    'Mercy Taiwo Portfolio',
    'Mercy Taiwo Frontend Developer',
  ],
  creator: 'Mercy Taiwo',

  metadataBase: new URL('https://mercy-taiwo.vercel.app/'),
  alternates: {
    canonical: '/',
  },

  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // icons: {
  //   icon: '/favicon.jpg',
  // },

  openGraph: {
    title: 'Mercy Taiwo - Frontend Developer',
    description:
      'Mercy Taiwo is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.',
    url: 'https://mercy-taiwo.vercel.app/',
    siteName: 'Mercy Taiwo - Portfolio website',
    images: [
      {
        url: '/img/mercy_taiwo',
        width: 1280,
        height: 720,
      },
      {
        url: '/img/mercy_taiwo',
        width: 1920,
        height: 1080,
        alt: 'Preview Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Mercy Taiwo - Frontend Developer',
    description:
      'Mercy Taiwo is a Frontend Developer who specializes in passionately delivering characteristic web solutions and experiences with code.',
    // siteId: '1467726470533754880',
    creator: '@mk_taiwo',
    // creatorId: '1467726470533754880',
    images: ['https://mercy-taiwo.vercel.app/img/mercy_taiwo'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body className='bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900'>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
