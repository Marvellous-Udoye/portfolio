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
    default: "Marvellous | Software Developer",
    template: "%s | Software Developer | Marvellous Udoye",
  },
  icons: [
    { rel: "icon", url: "/logo.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", url: "/logo.svg" },
  ],
  description: "Software developer != average",
  keywords: [
    "software developer",
    "frontend developer",
    "ui/ux specialist",
    "Next.js engineer",
    "React",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "portfolio",
    "hng finalist",
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
    siteName: "Marvellous Udoye | Software Developer",
    title: "Marvellous Udoye - Software Developer",
    description: "Software developer != average",
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
      <body className="font-jakarta antialiased">{children}</body>
    </html>
  );
}
