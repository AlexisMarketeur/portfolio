import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const AboutMe = () => (
  <section
    className="flex w-full justify-center bg-black py-28 md:py-64"
    id="about"
  >
    <div className="w-11/12 md:w-9/12">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className="flex h-full flex-col gap-4 ">
          <div className="flex h-full flex-col gap-4">
            <h1 className="mb-4 text-3xl font-bold uppercase text-neutral-300 md:mb-12 md:text-7xl">
              A PROPOS DE MOI
            </h1>
            <p className="mb-8 max-w-xl text-left text-sm leading-relaxed tracking-tight text-neutral-300 md:mb-0 md:text-base">
              Bonjour, je m'appelle Alexis.
              <br />
              <br />
              Mes premiers pas dans l'entrepreneuriat en 2019 m'ont amené à
              m'intéresser et à me passionner au formidable monde du marketing
              digital.
              <br />
              <br />
              Depuis le début de ma carrière dans le marketing digital, j'ai
              aidé de nombreuses entreprises à augmenter leur trafic, améliorer
              leurs conversions et optimiser leur ROI. Les campagnes que j'ai
              créées ont touché des milliers de personnes et généré
              significativement plus de revenus pour mes clients.
              <br />
              <br />
              En plus de mon travail avec ces entreprises, j’ai récemment décidé
              de partager régulièrement du contenu sur les meilleures pratiques
              SEA sur mes réseaux sociaux en documentant certaines de mes
              campagnes.
              <br />
              <br />
              En plus des différentes formations que j’ai pu réaliser en
              autodidacte, je perfectionne aujourd’hui mon apprentissage en
              Marketing Digital au sein d’un Master of Science Spécialisé à
              l’INSEEC.
              <br />
              <br />
              Mon objectif personnel est simple : progresser quotidiennement,
              accroître mes performances, suivre de près les dernières avancées
              technologiques et pratiques numériques afin de contribuer au mieux
              à tous les projets auxquels je participe !
            </p>
          </div>
          <div className="mb-8 flex min-h-16 flex-row items-center gap-4 md:mt-8 lg:mb-0">
            <Button size="lg" variant="ctaWhite">
              Discutons ! <ArrowUpRight />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="aspect-square overflow-hidden rounded-md border-2 border-b-4 border-black bg-white">
            <Image
              src="/Studio.jpg"
              alt="Photo studio d'Alexis"
              className="h-auto w-full object-cover"
              width={800}
              height={800}
            />
          </div>
          <div className="row-span-2 overflow-hidden rounded-md border-2 border-b-4 border-black bg-white">
            <Image
              src="/Remise.jpg"
              alt="Remise des diplômes d'Alexis"
              className="h-full w-full object-cover"
              width={800}
              height={1000}
            />
          </div>
          <div className="aspect-square overflow-hidden rounded-md border-2 border-b-4 border-black bg-white">
            <Image
              src="/Barcelona.jpg"
              alt="Alexis à Barcelone"
              className="h-auto w-full object-cover"
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);
