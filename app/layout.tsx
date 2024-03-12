import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300","400","500","600","700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

const montserrat = Montserrat({
  weight: ["300","400","500","600","700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Food delivery app",
  description: "For practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} ${poppins.className}`}>{children}</body>
    </html>
  );
}
