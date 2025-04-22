import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontend engineer | Marvellous",
    template: "%s | Frontend engineer | Marvellous Udoye",
  },
  description:
    "I'm Marvellous Udoye, a frontend developer passionate about building clean, responsive, and interactive web apps using React, Next.js, and TypeScript. This portfolio showcases my projects, skills, and experience as I grow in the world of web development.",
  keywords: [
    "frontend developer",
    "web developer",
    "Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "portfolio",
    "software development",
    "student developer",
    "developer projects",
    "responsive web design",
  ],
  authors: [{ name: "Marvellous Udoye" }],
  creator: "Marvellous Udoye",
  publisher: "Marvellous Udoye",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-portfolio-url.com",
    siteName: "Marvellous Udoye | Frontend Developer",
    title: "Marvellous Udoye - Frontend Developer & Web Enthusiast",
    description:
      "Explore my developer portfolio where I showcase modern, user-friendly projects built with React, Next.js, and Tailwind CSS. Follow my journey as a student and aspiring software developer.",
  },
  applicationName: "Marvellous Udoye's Portfolio",
  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
