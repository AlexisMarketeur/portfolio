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
        Grâce à Alexis, nous avons atteint un tout{" "}
        <Highlight>nouveau public cible</Highlight>. Sa stratégie sur Google Ads
        a augmenté nos ventes de façon remarquable. Un vrai changement de jeu
        pour nous.
      </p>
    ),
  },
  {
    id: 1,
    name: "Enzo Vergne",
    designation: "Directeur du marketing - Génération Y",
    content: (
      <p>
        Collaborer avec Alexis a{" "}
        <Highlight>transformé notre campagne Google Ads</Highlight>. Nous avons
        vu une augmentation de <Highlight>45% de notre trafic</Highlight> en
        seulement quelques mois. Exceptionnel !
      </p>
    ),
  },
  {
    id: 2,
    name: "Noé Zaabi",
    designation: "Chef des opérations - Wingman Campus Fund",
    content: (
      <p>
        Collaborer avec Alexis a été une expérience très positive. En tant que
        <Highlight>spécialiste Google Ads</Highlight>, il sait comment articuler
        les défis et les solutions de manière claire et cohérente. Vous pouvez
        vous attendre à une{" "}
        <Highlight>collaboration professionnelle et transparente.</Highlight>
      </p>
    ),
  },
  {
    id: 3,
    name: "Benjamin Athea",
    designation: "Responsable des ventes online - SNCF Connect & Tech",
    content: (
      <p>
        La force d'Alexis réside dans son{" "}
        <Highlight>expertise Google</Highlight>, ainsi que dans sa capacité à
        communiquer de manière claire et efficace. Travailler avec lui est un
        vrai plaisir, car il valorise{" "}
        <Highlight>une communication ouverte et honnête</Highlight>.
      </p>
    ),
  },
  {
    id: 4,
    name: "Édouard Bourbon",
    designation: "OMNES Education INSEEC MSc - Directeur de l'innovation",
    content: (
      <p>
        Alexis est déterminé et passionné dans ses études de marketing digital.
        Sa capacité à{" "}
        <Highlight>
          assimiler les concepts et à les appliquer de manière créative
        </Highlight>{" "}
        le destine à une brillante carrière dans ce domaine
      </p>
    ),
  },
];
