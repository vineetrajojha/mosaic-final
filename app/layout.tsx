import type { Metadata } from "next";
import { Cinzel, Cinzel_Decorative, Irish_Grover } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const cinzelDecorative = Cinzel_Decorative({
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  subsets: ["latin"],
});

const irishGrover = Irish_Grover({
  weight: "400",
  variable: "--font-irish-grover",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOSAIC 2026",
  description: "University Cultural Event",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${cinzelDecorative.variable} ${irishGrover.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
