import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Health Care Dashboard",
  description: "Records Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        <div className="flex h-screen flex-col bg-customAsh">
          <div className="w-full p-3">
            <Navbar />
          </div>
          <div className="flex-grow overflow-y-auto p-3 text-black">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
