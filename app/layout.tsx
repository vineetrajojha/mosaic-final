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
  description: "IILM University Cultural Event",
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
        <div className="fixed -bottom-10 -left-10 w-64 md:w-80 lg:w-96 z-[60] pointer-events-none -translate-x-1/3 translate-y-1/3">
          <img
            src="/decorative-flower.svg"
            alt=""
            className="w-full h-auto opacity-90 animate-spin-slow"
          />
        </div>
        <div className="fixed -bottom-10 -right-10 w-64 md:w-80 lg:w-96 z-40 pointer-events-none translate-x-1/3 translate-y-1/3 rotate-180">
          <img
            src="/decorative-flower.svg"
            alt=""
            className="w-full h-auto opacity-90 animate-spin-slow"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
