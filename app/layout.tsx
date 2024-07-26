import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastBox from "@/components/common/Toast";
import PageLoader from "@/components/common/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Prism Bulletin',
  description: 'Prism Bulletin is a news portal launched in 2024, under Prism Foundation.',
  keywords: ['Prism', 'Foundation', 'Bulletin', 'News', 'Portal', 'Garden','Markaz'],
  metadataBase: new URL('https://prism-bulletin.vercel.app'),
  openGraph: {
    url: "https://prism-bulletin.vercel.app",
    description: 'Prism Bulletin is a news portal launched in 2024, under Prism Foundation.',
    images:["https://prism-bulletin.vercel.app/prism logo light.png"]
  },
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastBox/>
      <PageLoader/>{children}</body>
    </html>
  );
}
