import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jakarta",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Frontend Developer | Marvellous",
    template: "%s | Frontend Developer | Marvellous Udoye",
  },
  description:
    "I'm Marvellous Udoye, a frontend developer passionate about building clean, responsive, and interactive web apps. This portfolio showcases my projects, skills, and experience as I grow in the world of web development.",
  keywords: [
    "frontend developer",
    "ui/ux specialist",
    "Next.js engineer",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "portfolio",
    "software development",
    "hng12 finalist",
    "responsive design expert",
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
    url: "https://marv-lous.vercel.app/",
    siteName: "Marvellous Udoye | Frontend Developer",
    title: "Marvellous Udoye - Frontend Developer & Web Enthusiast",
    description:
      "Explore my developer portfolio where I showcase modern, user-friendly projects. I'm Marvellous Udoye, a frontend developer passionate about building clean, responsive, and interactive web apps.",
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
    <html lang="en" className={jakarta.variable}>
      <head>
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta
          httpEquiv="Cache-Control"
          content="no-store, no-cache, must-revalidate"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="font-jakarta antialiased">{children}</body>
    </html>
  );
}
