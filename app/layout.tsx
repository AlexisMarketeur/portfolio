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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Alexismarketeur.com",
    image:
      "https://i.ibb.co/rbs4Zfs/fddc83c4f29766e2312e15c701a1e496-sticker.png",
    "@id": "",
    url: "https://www.alexismarketeur.com/",
    telephone: "0781203860",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 Rue Jean Mermoz",
      addressLocality: "Joinville-le-Pont",
      postalCode: "94340",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 48.82004928588867,
      longitude: 2.4658875465393066,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: "https://x.com/alexismarketeur",
  };

  return (
    <html lang="fr" className="!scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <body
        className={`bg-background  selection:bg-primary selection:text-white ${inter.className}`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}
