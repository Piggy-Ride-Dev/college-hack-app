import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FooterComponent from "@/components/FooterComponent/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent/HeaderComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "College Hack",
  description: "App created by Piggy Ride",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
