"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/utils/cn";
import { Tooltip } from "./tooltip";

export function Testimony() {
  return (
    <section className="flex w-full justify-center bg-backgroundSecondary py-20">
      <div className="flex w-11/12 flex-col items-center">
        <h2 className="mb-24 text-left text-3xl font-bold uppercase md:mb-32 md:text-6xl lg:text-7xl xl:text-8xl">
          ILS ME FONT CONFIANCE
        </h2>
        <article className="mb-12 flex w-full items-center justify-center text-sm md:w-6/12 md:text-xl">
          <CardStack items={CARDS} />
        </article>
        <Tooltip />
      </div>
    </section>
  );
}

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "from-blueCustom-100 to-greenCustom-100 mx-1 rounded-[5px] bg-gradient-to-r py-0.5 text-sm font-bold text-black md:text-xl ",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Directeur Marketing Techsol",
    content: (
      <p>
        Collaborer avec Alexis a transformé{" "}
        <Highlight>notre campagne Google Ads.</Highlight> Nous avons vu une
        <Highlight>augmentation de 45%</Highlight> de notre trafic en seulement
        quelques mois. Exceptionnel!
      </p>
    ),
  },
  {
    id: 1,
    name: "Laurent Mossu",
    designation: "Fondateur Mode Elegance",
    content: (
      <p>
        Alexis a une <Highlight>maîtrise incroyable</Highlight> des nuances de
        Google Ads. Son approche personnalisée a{" "}
        <Highlight>boosté nos leads de plus de 30%.</Highlight> Hautement
        recommandé!
      </p>
    ),
  },
  {
    id: 2,
    name: "Damia Alva",
    designation: "CEO BioFoods Startup",
    content: (
      <p>
        Grâce à Alexis, nous avons atteint un
        <Highlight>tout nouveau public cible</Highlight> . Sa stratégie sur
        Google Ads a{" "}
        <Highlight>augmenté nos ventes de façon remarquable.</Highlight>
        Un vrai changement de jeu pour nous.
      </p>
    ),
  },
  {
    id: 3,
    name: "Emily Davis",
    designation: "Manager Xizz Corp",
    content: (
      <p>
        J'ai eu la chance de travailler avec Alexis sur un projet de
        <Highlight>refonte de site web.</Highlight> Son expertise en SEO et
        Google Ads a été <Highlight>inestimable.</Highlight> Je le recommande
        vivement!
      </p>
    ),
  },
  {
    id: 4,
    name: "Tyler Burvo",
    designation: "CTO Medicavia",
    content: (
      <p>
        Alexis est un <Highlight>expert en Google Ads.</Highlight> Il a
        <Highlight>optimisé notre campagne</Highlight> et nous a aidé à
        atteindre notre public cible. Nous sommes très satisfaits de ses
        services.
      </p>
    ),
  },
];
