import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const ubuntu = Ubuntu({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "NexgenDev",
  description: "NexgenDev is a platform that helps developers to build and deploy their applications easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
