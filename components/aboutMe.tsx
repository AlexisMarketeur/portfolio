import { Button } from "@/components/ui/button";
import Glyph from "@/public/vector/glyph.svg";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const AboutMe = () => (
  <section className="flex w-full justify-center pt-28 md:pt-64" id="about">
    <div className="w-11/12 md:w-9/12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex h-full flex-col gap-4 ">
          <div className="flex h-full flex-col gap-4">
            <h1 className="mb-4 text-3xl font-bold uppercase md:mb-12 md:text-7xl">
              A PROPOS DE MOI
            </h1>
            <p className="mb-8 max-w-xl text-left text-sm leading-relaxed tracking-tight text-neutral-500 md:mb-0 md:text-base">
              Bonjour, je m'appelle Alexis. Je suis passionné par
              l'accompagnement des entrepreneurs ambitieux pour maximiser leur
              visibilité en ligne grâce à des stratégies Google Ads efficaces et
              ciblées. Depuis le début de ma carrière dans le marketing digital
              en 2017, j'ai aidé plus de 50 entreprises à augmenter leur trafic,
              améliorer leurs conversions et optimiser leur ROI. Les campagnes
              que j'ai créées ont touché des milliers de personnes et généré
              significativement plus de revenus pour mes clients. En plus de mon
              travail avec ces entreprises, je partage régulièrement des
              contenus sur les meilleures pratiques SEA sur mes réseaux sociaux.
              Actuellement, plus de 20 000 personnes suivent mes publications,
              où je propose des astuces, des conseils et des analyses
              approfondies sur les tendances du marketing digital. J'ai
              également rédigé deux guides pratiques sur les stratégies Google
              Ads et le freelancing en marketing digital, qui ont aidé plus de
              10 000 professionnels à affiner leurs compétences et à dynamiser
              leur carrière. Aujourd'hui, je suis particulièrement motivé pour
              travailler avec des équipes performantes désireuses de tirer
              profit de mes compétences en publicité en ligne. Je crois que
              chaque détail compte. Même si ces détails passent inaperçus, ils
              contribuent grandement à la réussite d'une campagne. La minutie
              est au cœur de ma démarche professionnelle.
            </p>
          </div>
          <div className="mb-8 flex min-h-16 flex-row items-center gap-4 md:mt-8 lg:mb-0">
            <Button size="lg" variant="cta">
              Discutons ! <ArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="aspect-square rounded-md border-2 border-b-4 border-black bg-white">
            <Image
              src={Glyph}
              alt="Alexis"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="row-span-2 rounded-md border-2 border-b-4 border-black bg-white">
            <Image
              src={Glyph}
              alt="Alexis"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-square rounded-md border-2 border-b-4 border-black bg-white">
            <Image
              src={Glyph}
              alt="Alexis"
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
