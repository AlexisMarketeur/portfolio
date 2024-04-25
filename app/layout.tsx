import type { Metadata } from "next";
import { inter } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Alexis Rodrigues | Marketing Digital Freelancer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`bg-background  selection:bg-primary selection:text-white ${inter.className}`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
