import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Drag and Drop File",
  description: "Drag and Drop File Starter Pack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
