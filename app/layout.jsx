import './globals.scss';
import Link from 'next/link';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import { Darker_Grotesque } from 'next/font/google';

const darkergrotesque = Darker_Grotesque({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '800'],
});

export const metadata = {
  title: 'Robert wägar',
  description: 'Official website of dancer and developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={darkergrotesque.className}>
        <Header />
        <Nav />
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
  );
}
