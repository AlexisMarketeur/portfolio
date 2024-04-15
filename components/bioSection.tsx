import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export default function BioSection() {
  return (
    <section id="bioSection" className="bg-blue-100 w-full flex justify-center">
      <div className="w-11/12 py-12">
        <h2>Votre partenaire de croissance digital</h2>
        <p>
          Avec plus de 2 ans d'expérience dans le Marketing Digital et dans la
          gestion de campagnes publicitaires, je suis le partenaire idéal pour
          maximiser votre retour sur investissement. Ma méthode ? Un service
          personnalisé, axé sur l'analyse des données et la mise en place de
          stratégies adaptées à vos objectifs. Je m'engage à optimiser chaque
          aspect de vos campagnes pour générer des résultats concrets et
          mesurables. Je suis le facilitateur qui s'adaptera à votre équipe pour
          travailler main dans la main et assurer une cohésion parfaite dans nos
          actions. Ensemble, nous élaborerons des campagnes efficaces et
          performantes pour booster votre visibilité et augmenter votre chiffre
          d'affaires. Ma mission : Atteindre nos objectifs et dépasser vos
          attentes
        </p>
        <Button variant="cta" size="lg" asChild>
          <Link href="https://calendly.com" target="_blank">
            discutons ! <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
