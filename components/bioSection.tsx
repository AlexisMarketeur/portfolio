import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function BioSection() {
  return (
    <section id="bioSection" className="bg-white w-full flex justify-center">
      <div className="w-11/12 py-14 md:py-36 flex flex-col items-center">
        <h2 className="font-bold md:font-normal text-lg md:text-2xl xl:text-4xl">
          Votre partenaire de croissance digital
        </h2>
        <div className="text-secondary text-md md:text-xl py-14 sm:w-3/4 md:w-9/12 lg:w-3/6">
          <p className="mb-14">
            Avec plus de 2 ans d'expérience dans le Marketing Digital et dans la
            gestion de campagnes publicitaires, je suis le partenaire idéal pour
            maximiser votre retour sur investissement.
          </p>
          <p className="mb-14">
            Ma méthode ? Un service personnalisé, axé sur l'analyse des données
            et la mise en place de stratégies adaptées à vos objectifs. Je
            m'engage à optimiser chaque aspect de vos campagnes pour générer des
            résultats concrets et mesurables.
          </p>
          <p className="mb-14">
            Je suis le facilitateur qui s'adaptera à votre équipe pour
            travailler main dans la main et assurer une cohésion parfaite dans
            nos actions. Ensemble, nous élaborerons des campagnes efficaces et
            performantes pour booster votre visibilité et augmenter votre
            chiffre d'affaires.
          </p>
          <p>Ma mission : Atteindre nos objectifs et dépasser vos attentes</p>
        </div>
        <div className="h-10  flex flex-col justify-end">
          <Button variant="cta" size="lg" asChild>
            <Link href="https://calendly.com" target="_blank">
              discutons ! <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
