import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sedat Can Uygur's Portfolio & Projects",
  description: "Sedat Can Uygur's Portfolio & Projects Page",
  keywords: ["Portfolio", "Projects", "portfolio", "projects", "Sedat", "Can", "Uygur", "Sedat Can", "Sedat Can Uygur"],
  authors: [{ name: "Sedat Can Uygur" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    title: "Sedat Can Uygur's Portfolio & Projects",
    description: "Sedat Can Uygur's Portfolio & Projects Page",
    /* url: "https://sedatcanuygur.com/about",
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

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
