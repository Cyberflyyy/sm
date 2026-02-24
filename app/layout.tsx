import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Simple Media — Agencja Social Media",
  description:
    "Pokaż się w social media. Prowadzimy konta, tworzymy treści i budujemy marki w internecie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${dmSans.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
