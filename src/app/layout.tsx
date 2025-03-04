"use client";

import AOS from "aos";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { defaultSystem, ChakraProvider } from "@chakra-ui/react";

import { lightTheme, darkTheme, GlobalStyles } from "@/styles/ThemeConfig";

import "./globals.css";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "Sedat Can Uygur Homepage",
  description: "Sedat Can Uygur Homepage",
  keywords: ["Homepage", "Home page", "Home", "home", "homepage", "home page", "Sedat", "Can", "Uygur", "Sedat Can", "Sedat Can Uygur"],
  authors: [{ name: "Sedat Can Uygur" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Sedat Can Uygur Homepage",
    description: "Sedat Can Uygur Homepage",
    /* url: "https://sedatcanuygur.com/blog",
    siteName: "sedatcanuygur.com", */
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sedat Can Uygur",
    description: "Innovative and results-driven Senior Software Engineer with over 8 years of experience in full‑stack development, software architecture. Expert at designing and implementing resilient, scalable systems using microservices, cloud technologies and modern DevOps practices. Proven track record in delivering high‑quality solutions for enterprise clients including Vodafone, Under Armour and Sun & Sand Sports and driving technical excellence through best practices in coding, testing, and system design.",
    creator: "@_SedatUygur",
    /* siteId: "1467726470533754880",
    creatorId: "1467" */
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme)
  }
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  useEffect(() => {
    AOS.init({
      duration: 500
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
