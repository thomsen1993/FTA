import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "FTA",
  description: "FTA travels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
