import type { Metadata } from "next";
import { Geist, Geist_Mono,Teko,Public_Sans,Roboto,Rubik, EB_Garamond,Lato } from "next/font/google";
import "./globals.css";
import {ReactLenis} from "../lib/lenis";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const roboto  = Roboto({
  variable:"--font-roboto",
  subsets:["latin"],
  weight:["500"]

})
const teko = Teko({
  variable:"--font-teko",
  subsets:["latin"],
})

const rubik = Rubik({
  variable:"--font-rubik",
  subsets:["latin"]
})
const lato = Lato({
  variable:"--font-lato",
  subsets:["latin"],
  weight:["700"]
})
export const metadata: Metadata = {
  title: "Chandan Achary",
  description: "Welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} font-roboto`}
      >
        <ReactLenis root>
        {children}
        </ReactLenis>
      </body>
    </html>
  );
}
