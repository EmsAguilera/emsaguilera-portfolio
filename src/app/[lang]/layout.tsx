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
  params: Promise<{
    lang: 'en' | 'de' | 'es';
  }>;
};

export default async function RootLayout({
  children,
  params,
}: Readonly<RootLayoutProps>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang} className="light">
      <body className={inter.className}>
        <Navbar navContent={dict.navbar} lang={lang}/>
        <main>{children}</main>
        <Footer content={dict.footer} lang={lang}/>
      </body>
    </html>
  );
}