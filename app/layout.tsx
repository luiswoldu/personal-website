import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <div style={{ maxWidth: "430px", margin: "auto", width: "100%" }}>
          {children}
        </div>
      </body>
    </html>
  );
}