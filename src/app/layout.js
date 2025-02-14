import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppContextProvider from "@/context/ContextProvider";
import CommonLayout from "@/components/common-layout";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* AppContexty
         */}
      <CommonLayout>{children}</CommonLayout>   
      </body>
    </html>
  );
}
