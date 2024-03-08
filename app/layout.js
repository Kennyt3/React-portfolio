import './global.css'
import UserProvider from '@/context/userContext'
export async function generateMetadata() {
  const metadata = {
    title: 'Mercy Taiwo - Software Developer | Technical Writer ',
    meta: 'I am a software developer based in Lagos, Nigeria and available to work remotely in other countries. My tech stack includes Javascript, React js, Next js, Express js, Node js, Mongo db and Graph QL',
    url: 'https://mercy-taiwo.vercel.app/',
    img: 'https://mercy-taiwo.vercel.app/img/mercy_taiwo.jpg',
  }
  return {
    title: metadata.title,
    description: metadata.meta,
    metadataBase: new URL('https://mercy-taiwo.vercel.app/'),
    openGraph: {
      title: metadata.title,
      description: metadata.meta,
      type: 'article',
      url: metadata.url,
      images: [
        {
          url: metadata.img,
          width: 800,
          height: 600,
        },
      ],
      locale: 'en',
      type: 'website',
    },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        {' '}
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  )
}
