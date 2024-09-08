
import "./globals.css";
import ClientSideScripts from "./Components/ClientSideScripts";

import type { Metadata } from 'next';
import Head from "next/head";

const baseUrl = "https://saeed-pk.vercel.app/";

export const metadata: Metadata = {
  title: "Saeed PK | Full-Stack Developer & Web Solutions Expert",
  description: "Explore Saeed PK's portfolio, showcasing modern web development expertise with Next.js, MERN stack, and more.",
  openGraph: {
    title: "Saeed PK | Full-Stack Developer & Web Solutions Expert",
    description: "Explore Saeed PK's portfolio, showcasing modern web development expertise with Next.js, MERN stack, and more.",
    url: baseUrl,
    images: [
      {
        url: baseUrl+"/images/portfolio.png",
        width: 1200,
        height: 630,
        alt: "Saeed PK's portfolio banner image",
      },
    ],
    siteName: "Saeed PK Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@saeed_pk_",  // Replace with your actual Twitter handle
    title: "Saeed PK | Full-Stack Developer & Web Solutions Expert",
    description: "Explore Saeed PK's portfolio, showcasing modern web development expertise with Next.js, MERN stack, and more.",
    images: baseUrl+"/images/portfolio.png",  // Full URL to the image
  },
  keywords: "Saeed PK, Full-Stack Developer, Web Developer, Next.js, MERN Stack, Portfolio , TailwindCSS",
  metadataBase: new URL(baseUrl),
  authors: [{ name: "Saeed PK", url: baseUrl }],
  generator: "Next.js",
  referrer: "no-referrer",
  creator: "Saeed PK",
  publisher: "Saeed PK Portfolio",
  
  verification: {
    google: "ndSkfICDh5xHVexvHoasFBYveNdPXVklcBqoVKLK6ow",
    other:{
      msvalidate: "A4BA91E04E5D8B7E4AF0763406BB16BA", // Microsoft verification code
    }
  },
  category: "Web Development, Full-Stack Development",
  classification: "Professional Portfolio, Personal Branding",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Add other metadata and links here */}
        </Head>
      </head>
      <body className="main-body">
        {children}
        <ClientSideScripts/>
        
      </body>
     
    </html>
  );
}