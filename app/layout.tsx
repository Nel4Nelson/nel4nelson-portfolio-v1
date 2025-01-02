import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-raleway",
  weight: ["300", "400", "500", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Nel | Blockchain Developer & Programming Mentor",
  description:
    "Experienced blockchain developer and programming mentor specializing in Web3 development and technical education.",
  keywords: [
    "blockchain developer",
    "programming mentor",
    "Web3",
    "smart contracts",
    "developer portfolio",
  ],
  authors: [{ name: "Nel" }],
  creator: "Nel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Nel | Blockchain Developer & Programming Mentor",
    description:
      "Experienced blockchain developer and programming mentor specializing in Web3 development and technical education.",
    siteName: "Nel's Portfolio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
