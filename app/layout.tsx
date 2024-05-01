import type { Metadata } from "next";
import { inter } from "./fonts";

import "./globals.css";

export const metadata: Metadata = {
  title: "Alexis Rodrigues | Marketing Digital Freelancer",
  description:
    "Alexis Rodrigues, expert Google Ads freelance, vous aide à booster votre chiffre d'affaires grâce à la publicité en ligne.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="!scroll-smooth">
      <body
        className={`bg-background  selection:bg-primary selection:text-white ${inter.className}`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
