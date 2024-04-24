import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { raleway } from "@/app/fonts";

export default function BioSection() {
  return (
    <section id="bioSection" className="flex w-full justify-center bg-white">
      <article className="flex w-11/12 flex-col items-center justify-center py-14 md:py-32">
        <div className="md:w-3/4 xl:w-2/4">
          <h2 className="text-3xl font-normal md:text-4xl">
            Votre partenaire de croissance digital
          </h2>
          <div className="text-md py-16 text-secondary md:text-xl ">
            <p className="mb-14">
              Avec plus de{" "}
              <span className={`font-bold ${raleway.className}`}>
                2 ans d'expérience dans le Marketing Digital et dans la gestion
                de campagnes publicitaires
              </span>
              , je suis le partenaire idéal pour maximiser votre retour sur
              investissement.
            </p>
            <p className="mb-14">
              Ma méthode ? Un service personnalisé, axé sur l'analyse des
              données et la mise en place de stratégies adaptées à vos
              objectifs. Je m'engage à optimiser chaque aspect de vos campagnes
              pour générer des résultats concrets et mesurables.
            </p>
            <p className="mb-14">
              Je suis le facilitateur qui s'adaptera à votre équipe pour
              travailler main dans la main et assurer une cohésion parfaite dans
              nos actions. Ensemble, nous élaborerons des campagnes efficaces et
              performantes pour booster votre visibilité et augmenter votre
              chiffre d'affaires.
            </p>
            <p>
              Ma mission :{" "}
              <span className={`font-bold ${raleway.className}`}>
                Atteindre nos objectifs et dépasser vos attentes
              </span>
            </p>
          </div>
          <div className="flex h-10 w-full flex-col justify-end">
            <Button variant="cta" size="lg" asChild>
              <Link href="https://calendly.com" target="_blank">
                discutons ! <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </section>
  );
}
