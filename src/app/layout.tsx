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
  title: "Leonardo Apolonio — Staff ML Engineer | Quiet Scale",
  description:
    "Staff ML Engineer and founder of Quiet Scale. Building AI infrastructure, NLP systems, and tools that scale without the noise.",
  openGraph: {
    title: "Leonardo Apolonio — Staff ML Engineer | Quiet Scale",
    description:
      "Staff ML Engineer and founder of Quiet Scale. Building AI infrastructure, NLP systems, and tools that scale without the noise.",
    url: "https://iam.quietscale.ai",
    siteName: "Quiet Scale",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Leonardo Apolonio — Staff ML Engineer | Quiet Scale",
    description:
      "Staff ML Engineer and founder of Quiet Scale. Building AI infrastructure, NLP systems, and tools that scale without the noise.",
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
