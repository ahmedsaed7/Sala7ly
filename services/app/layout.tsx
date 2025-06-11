"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Roboto} from "next/font/google";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  subsets: ['latin'],
  weight:['400','500','700'],
  preload: true,
})

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  const pathname = usePathname();
  
  // List of paths where we don't want to show Header and Footer
  const noHeaderFooterPaths = [
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/client"
  ];

  const shouldShowHeaderFooter = !noHeaderFooterPaths.some(path => 
    pathname?.startsWith(path)
  );

  return (
    <html lang="en">
      <body className={roboto.className +`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {shouldShowHeaderFooter && <Header/>}
        {children}
        {shouldShowHeaderFooter && <Footer/>}
      </body>
    </html>
  );
}
