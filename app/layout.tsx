import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const gotham = localFont({
  src: [
    {
      path: "../fonts/Gotham Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Gotham Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Gotham Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luis Woldu",
  description: "luiswoldu.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${gotham.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
