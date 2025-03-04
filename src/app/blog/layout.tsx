import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Sedat Can Uygur's Blog",
  description: "Sedat Can Uygur's Blog",
  keywords: ["Blog", "Sedat", "Can", "Uygur", "Sedat Can", "Sedat Can Uygur"],
  authors: [{ name: "Sedat Can Uygur" }],
  robots: "index, follow",
  openGraph: {
    title: "Sedat Can Uygur's Blog",
    description: "Sedat Can Uygur's Blog",
    /* url: "https://sedatcanuygur.com/blog",
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
    title: "Sedat Can Uygur",
    description: "Innovative and results-driven Senior Software Engineer with over 8 years of experience in full‑stack development, software architecture. Expert at designing and implementing resilient, scalable systems using microservices, cloud technologies and modern DevOps practices. Proven track record in delivering high‑quality solutions for enterprise clients including Vodafone, Under Armour and Sun & Sand Sports and driving technical excellence through best practices in coding, testing, and system design.",
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

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
