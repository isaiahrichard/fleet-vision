"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div style={{ margin: "1% 3%" }}>{children}</div>
      </body>
    </html>
  );
}
