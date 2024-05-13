import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Last Summer | Menu",
  description: "Birbirinden eşsiz lezzetlerimizle menümüz!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
