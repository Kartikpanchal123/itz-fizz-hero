import "./globals.css";
import { Syne, Manrope } from "next/font/google";

const display = Syne({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-display" });
const body = Manrope({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: "Welcome Itzfizz",
  description: "Scroll-driven hero animation built with Next.js, GSAP and Tailwind CSS.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-ground text-white antialiased">{children}</body>
    </html>
  );
}
