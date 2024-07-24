import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ToastBox from "@/components/common/Toast";
import PageLoader from "@/components/common/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prism Bulletin",
  description: "",
};

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
