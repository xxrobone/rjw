import './globals.css';
import Link from 'next/link';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


export const metadata = {
  title: 'Robert wägar',
  description: 'Official website of dancer and developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
       
        <Footer>
          &copy; Rob-One
        <Link
          href='https://robertwagar.se'
          target='_blank'
          rel='noreferrer noopener'
        >
          Developed by Rob-One
        </Link>
      </Footer>
      </body>
    </html>
  )
}
