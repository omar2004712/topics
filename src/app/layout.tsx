import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@components/Nav';
import ScrollToTop from '@components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Topics - Home',
  description: 'Create and Share new Topics with the world',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className='scroll-smooth selection:bg-slate-800 selection:text-slate-100'
      lang='en'
    >
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'
          integrity='sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=='
          crossOrigin='anonymous'
          referrerPolicy='no-referrer'
        />
      </head>
      <body className={inter.className}>
        <Nav />
        <ScrollToTop />
        <div className='max-w-screen-md mx-auto my-16 p-4 pt-6'>{children}</div>
      </body>
    </html>
  );
}
