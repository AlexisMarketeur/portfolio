"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/utils/cn";
import { Tooltip } from "./tooltip";

export function Testimony() {
  return (
    <section className="flex w-full justify-center bg-backgroundSecondary py-20">
      <div className="flex w-11/12 flex-col items-center">
        <h2 className="mb-24 text-left text-3xl font-bold uppercase md:mb-32 md:w-9/12 md:text-6xl lg:text-7xl xl:text-8xl">
          ILS ME FONT CONFIANCE
        </h2>
        <article className="mb-12 flex w-full items-center justify-center text-sm md:w-8/12 md:text-xl lg:w-6/12">
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
        "mx-1 rounded-[5px] bg-gradient-to-r from-blueCustom-100 to-greenCustom-100 py-0.5 text-sm font-bold text-black md:text-xl ",
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
    name: "Laëtitia Fournier",
    designation: "Directrice des achats & ventes - Bonateks",
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
    name: "Enzo Vergne",
    designation: "Directeur du marketing - Génération Y",
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
    name: "Noé Zaabi",
    designation: "Chef des opérations - Wingman Campus Fund",
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
    name: "Benjamin Athea",
    designation: "Responsable des ventes online - SNCF Connect & Tech",
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
    name: "Édouard Bourbon",
    designation: "OMNES Education INSEEC MSc - Directeur de l'innovation",
    content: (
      <p>
        J'ai eu la chance de travailler avec Alexis sur un projet de
        <Highlight>refonte de site web.</Highlight> Son expertise en SEO et
        Google Ads a été <Highlight>inestimable.</Highlight> Je le recommande
        vivement!
      </p>
    ),
  },
];
