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
  title: "Leonardo Apolonio — Staff ML Engineer",
  description:
    "Staff Machine Learning Engineer specializing in NLP, LLMs, and text analytics. Building intelligent systems at scale.",
  openGraph: {
    title: "Leonardo Apolonio — Staff ML Engineer",
    description:
      "Staff Machine Learning Engineer specializing in NLP, LLMs, and text analytics.",
    url: "https://iam.quietscale.ai",
    siteName: "iam.quietscale.ai",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Leonardo Apolonio — Staff ML Engineer",
    description:
      "Staff Machine Learning Engineer specializing in NLP, LLMs, and text analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
