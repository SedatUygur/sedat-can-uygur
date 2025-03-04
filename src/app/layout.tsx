"use client";

import AOS from "aos";
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
