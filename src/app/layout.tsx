'use client';

import AOS from 'aos';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'styled-components';
import { useEffect, useState } from 'react';
import { defaultSystem, ChakraProvider } from '@chakra-ui/react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { userInfo } from '@/public/js/userInfo';

import { lightTheme, darkTheme, GlobalStyles } from '@/styles/ThemeConfig';
import './globals.css';
import 'aos/dist/aos.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const metadata: Metadata = {
  title: userInfo.name,
  description: userInfo.home.subtitle,
  keywords: [
    'Homepage',
    'Home page',
    'Home',
    'home',
    'homepage',
    'home page',
    'Sedat',
    'Can',
    'Uygur',
    'Sedat Can',
    'Sedat Can Uygur',
  ],
  authors: [{ name: 'Sedat Can Uygur' }],
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
  openGraph: {
    title: userInfo.name,
    description: userInfo.home.subtitle,
    /* url: "https://sedatcanuygur.com/blog",
    siteName: "sedatcanuygur.com", */
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: userInfo.name,
    description: userInfo.home.subtitle,
    creator: '@_SedatUygur',
    /* siteId: "1467726470533754880",
    creatorId: "1467" */
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  };
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider value={defaultSystem}>
          <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
            <GlobalStyles />
            <div className="flex flex-col overflow-x-clip">
              <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
              <main className="flex flex-grow flex-col">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
