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
                FONDATIONS STRATÉGIQUES : DÉFINIR UNE APPROCHE HOLISTIQUE
              </h3>
              <p className="text-neutral-500">
                Ma méthodologie en tant qu'expert Google Ads est ancrée dans une
                approche holistique, débutant par une compréhension minutieuse
                de vos objectifs commerciaux et des nuances de votre marché
                cible. Cette première phase implique des analyses approfondies
                pour identifier les opportunités et les défis, établissant ainsi
                les bases d'une stratégie publicitaire robuste et efficace.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-end  justify-around lg:flex-row-reverse lg:items-center">
            <p className="text-[168px] font-bold lg:text-[18vw]">2</p>
            <div className="flex w-full flex-col gap-6 text-right md:gap-12 lg:w-1/2 lg:text-left">
              <h3 className="text-xl uppercase md:text-3xl">
                Optimisation Axée sur les Données : Maximiser la Pertinence
              </h3>
              <p className="text-neutral-500">
                Une fois la stratégie définie, j'adopte une approche itérative
                et axée sur les données. Je m'appuie sur une recherche de
                mots-clés exhaustive et des tests rigoureux pour maximiser la
                pertinence et la portée de vos annonces. En surveillant de près
                les performances à l'aide d'indicateurs clés, je suis en mesure
                d'ajuster rapidement les tactiques et d'optimiser les campagnes
                en temps réel, garantissant ainsi un retour sur investissement
                optimal.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-start  justify-around lg:flex-row lg:items-center">
            <p className="text-[168px] font-bold lg:text-[18vw]">3</p>
            <div className="flex w-full flex-col gap-6 md:gap-12 lg:w-1/2">
              <h3 className="text-xl uppercase md:text-3xl">
                Culture d'Amélioration Continue : Tirer des Leçons Post-Campagne
              </h3>
              <p className="text-neutral-500">
                Enfin, ma méthodologie intègre une culture d'amélioration
                continue, où l'analyse post-campagne est aussi cruciale que la
                phase de déploiement initial. À travers des rapports détaillés
                et des analyses approfondies, je fournis des recommandations
                personnalisées pour affiner votre stratégie publicitaire et
                maximiser votre présence en ligne. Mon engagement envers
                l'excellence opérationnelle et l'innovation constante assure que
                votre entreprise reste en tête de jeu dans un paysage
                publicitaire en constante évolution.
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
              <Link href="/">
                discutons !
                <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
