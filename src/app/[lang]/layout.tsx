import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Navbar } from '@/components/ui/Navbar';
import { Footer } from '@/components/sections/Footer';
import { getDictionary } from '@/dictionaries';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Portfolio',
  description: 'My personal portfolio website',
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lang: 'en' | 'de' | 'es';
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const lang = params.lang; 
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Navbar navContent={dict.navbar} />
        <main>{children}</main>
        <Footer content={dict.footer}/>
      </body>
    </html>
  );
}