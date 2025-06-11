"use client";

import React from 'react';
import { Geist, Geist_Mono } from "next/font/google";
import {Roboto} from "next/font/google";

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
  weight: ['400','500','700'],
  preload: true,
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`min-h-screen ${roboto.className} ${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </div>
  );
} 