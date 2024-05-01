import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function MethodeStatic() {
  return (
    <section
      className="flex w-full justify-center  pt-28 md:pt-64"
      id="methode"
    >
      <div className="flex w-11/12 flex-col  md:w-9/12">
        <h2 className="text-left text-3xl font-bold uppercase md:mb-10 md:text-6xl lg:text-7xl xl:text-8xl">
          ma méthode de travail
        </h2>
        <div className="flex flex-col gap-40 lg:gap-20">
          <div className="flex w-full  flex-col items-start  justify-around lg:flex-row lg:items-center">
            <p className="text-[168px] font-bold lg:text-[18vw]">1</p>
            <div className="flex w-full flex-col gap-6 md:gap-12 lg:w-1/2">
              <h3 className="text-xl uppercase md:text-3xl">
                Phase 1 : Découverte & échange
              </h3>
              <p className="text-neutral-500">
                Avant de commencer à travailler ensemble, je prends le temps de
                bien comprendre votre entreprise, ses défis et ses objectifs. Je
                regarde aussi vos annonces Google actuelles, si vous en avez,
                pour voir ce qui fonctionne et ce qui peut être amélioré.
                <br />
                <br />
                Cette étape est très importante. Elle me permet de personnaliser
                ma stratégie pour vos annonces Google, en fonction de ce qui est
                important pour vous. On discute aussi du budget mensuel pour nos
                actions, et je vous donne un devis détaillé.
                <br />
                <br />
                En plus de ça, cette étape nous aide à bien nous comprendre et à
                établir une relation de confiance. C'est vraiment essentiel pour
                que notre collaboration soit un succès. Je met un point
                d’honneur à avoir une communication claire et réactive durant
                toute la durée de notre collaboration.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-end  justify-around lg:flex-row-reverse lg:items-center">
            <p className="text-[168px] font-bold lg:text-[18vw]">2</p>
            <div className="flex w-full flex-col gap-6  text-left md:gap-12 lg:w-1/2">
              <h3 className="text-xl uppercase md:text-3xl">Phase 2 : Setup</h3>
              <p className="text-neutral-500">
                Après avoir effectué une analyse approfondie de votre situation,
                nous entamons la phase de mise en place, le Setup. Cette étape,
                d'une durée moyenne d'une semaine et demie, peut être accélérée
                en cas d'urgence afin de répondre à vos impératifs dans les
                délais convenus.
                <br />
                <br />
                Le Setup vise à concrétiser les recommandations formulées
                pendant notre échange. Cela implique la mise en œuvre de
                systèmes de suivi pour évaluer les performances de votre site,
                la création et la configuration des campagnes publicitaires
                envisagées (telles que celles sur la recherche, les annonces
                shopping, display, remarketing, etc.), ainsi que, le cas
                échéant, l'optimisation de votre site ou la création de pages de
                destination stratégiques, cruciales dans des secteurs
                fortement concurrentiels.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-start  justify-around lg:flex-row lg:items-center">
            <p className="text-[168px] font-bold lg:text-[18vw]">3</p>
            <div className="flex w-full flex-col gap-6 md:gap-12 lg:w-1/2">
              <h3 className="text-xl uppercase md:text-3xl">
                Phase 3 : Suivi et optimisation des campagnes Google Ads
              </h3>
              <p className="text-neutral-500">
                Après cela, je propose une phase de suivi et d'optimisation des
                campagnes, qui est cruciale pour améliorer leur performance et
                garantir les meilleurs résultats. Ce suivi vise à vous aider à
                atteindre vos objectifs tout en respectant votre budget ou votre
                coût maximal par conversion.
                <br />
                <br />
                En tant que spécialiste de Google Ads, j'utilise des techniques
                avancées sur différents leviers pour obtenir des résultats
                optimaux : je sélectionne les mots-clés les plus pertinents,
                privilégie les correspondances exactes, crée des audiences
                personnalisées et utilise le remarketing, met en place des
                stratégies d'enchères et des tests AB, assure le suivi des
                conversions et exclut le trafic concurrentiel, et bien plus !
              </p>
            </div>
          </div>
          <div className="flex h-12 w-full items-center justify-center">
            <Button
              variant="cta"
              size="lg"
              className="text-md flex w-full justify-between px-4 sm:w-40 md:justify-center"
              asChild
            >
              <Link
                href="https://calendly.com/alexismarketeur/premier-contact"
                target="_blank"
              >
                Discutons !
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
