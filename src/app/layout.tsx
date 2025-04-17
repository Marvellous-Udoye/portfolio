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
    default: "transaction tracker",
    template: "%s | transaction tracker",
  },
  description:
    "Transaction tracker helps you automatically track your daily expenses and income, and generate reports to help you manage your finances.",
  keywords: [
    "transaction tracker",
    "expense tracker",
    "income tracker",
    "financial tracker",
    "budget tracker",
    "personal finance",
    "money management",
    "financial management",
  ],
  authors: [{ name: "Transaction Tracker" }],
  creator: "Transaction Tracker",
  publisher: "Transaction Tracker",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://example.com",
    siteName: "transaction tracker",
    title:
      "Transaction tracker -  Automatically track your daily expenses and income",
    description:
      "Transaction tracker helps you automatically track your daily expenses and income, and generate reports to help you manage your finances.",
  },
  applicationName: "transaction tracker",
  category: "Service Provider",
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
