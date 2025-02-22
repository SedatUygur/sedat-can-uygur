"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "@/styles/ThemeConfig";

import "./globals.css";

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
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme)
  }
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
          <GlobalStyles />
          <button onClick={toggleTheme}>Switch Theme</button>
          <div className="flex flex-col overflow-x-clip">
            <Navbar />
            <main className="flex flex-grow flex-col">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
