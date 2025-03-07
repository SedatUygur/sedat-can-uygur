import type { Metadata, Viewport } from "next";
import { userInfo } from "@/public/js/userInfo";

export const metadata: Metadata = {
  title: userInfo.name,
  description: userInfo.home.subtitle,
  keywords: ["Contact", "contact", "With", "with", "Sedat", "Can", "Uygur", "Sedat Can", "Sedat Can Uygur"],
  authors: [{ name: "Sedat Can Uygur" }],
  robots: "index, follow",
  openGraph: {
    title: userInfo.name,
    description: userInfo.home.subtitle,
    /* url: "https://sedatcanuygur.com/contact",
    siteName: "sedatcanuygur.com", */
    locale: "en-US",
    type: "website",
    images: [
      {
        url: 'https://drive.google.com/file/d/1aO1Qg6AuzK3E4Wd0IZeueMCGAByMuPIN/view?usp=sharing',
        width: 1600,
        height: 825,
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: userInfo.name,
    description: userInfo.home.subtitle,
    creator: "@_SedatUygur",
    images: [
      {
        url: 'https://drive.google.com/file/d/1aO1Qg6AuzK3E4Wd0IZeueMCGAByMuPIN/view?usp=sharing',
        width: 1600,
        height: 825,
      }
    ],
    /* siteId: "1467726470533754880",
    creatorId: "1467" */
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
