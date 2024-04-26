import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="flex w-full justify-center">
      <article className="w-11/12 md:w-9/12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Quels sont vos tarifs pour des campagnes Google Ads?
            </AccordionTrigger>
            <AccordionContent>
              La tarification de mes services dépend largement de vos besoins
              spécifiques. Par exemple, une campagne simple pourrait coûter
              moins cher qu'une campagne à grande échelle nécessitant une
              optimisation et un suivi continu. Discutons ensemble pour que je
              puisse comprendre vos objectifs et vous fournir une estimation
              précise lors de notre premier appel.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Pourquoi devrais-je choisir vos services plutôt que ceux d'une
              agence?
            </AccordionTrigger>
            <AccordionContent>
              Contrairement aux grandes agences, je vous offre une attention
              personnalisée et un suivi dédié pour vos campagnes Google Ads. Mon
              approche individualisée assure que vos objectifs spécifiques de
              marketing sont atteints avec précision et efficacité.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Quelle est la rapidité de mise en place d'une campagne Google Ads?
            </AccordionTrigger>
            <AccordionContent>
              Une fois que nous aurons défini vos objectifs et que l'accord sera
              conclu, je peux lancer votre campagne presque immédiatement. Selon
              la complexité, la configuration initiale peut prendre de quelques
              jours à une semaine.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Comment se déroule la gestion de campagne avec vous?
            </AccordionTrigger>
            <AccordionContent>
              Après avoir établi vos objectifs et budget, je configure et lance
              vos campagnes. J'effectue ensuite des ajustements continus pour
              optimiser les performances et le retour sur investissement. Vous
              recevrez des rapports réguliers pour suivre les progrès réalisés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Que dois-je vous fournir pour démarrer une campagne Google Ads?
            </AccordionTrigger>
            <AccordionContent>
              Pour débuter, j'aurai besoin de comprendre vos objectifs de
              marketing, votre public cible, et le budget que vous souhaitez
              allouer à Google Ads. Des informations sur vos produits ou
              services sont également essentielles pour créer des annonces
              pertinentes et ciblées.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Facturez-vous pour les ajustements ou optimisations
              supplémentaires?
            </AccordionTrigger>
            <AccordionContent>
              Non, mes services incluent les ajustements nécessaires pour
              optimiser vos campagnes sans frais supplémentaires. Mon objectif
              est d'atteindre les meilleures performances possibles sans coûts
              cachés.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>
              Offrez-vous des remboursements si je ne suis pas satisfait des
              résultats?
            </AccordionTrigger>
            <AccordionContent>
              Je n'offre pas de remboursements, mais je m'engage à ajuster et
              optimiser les campagnes jusqu'à ce que vous soyez satisfait des
              résultats. Si vous avez des préoccupations, nous pouvons commencer
              par une petite campagne test pour évaluer la collaboration.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>
              Que se passe-t-il après la fin de la campagne ou si j'approuve les
              résultats?
            </AccordionTrigger>
            <AccordionContent>
              Si vous avez d'autres besoins en marketing digital ou souhaitez
              étendre vos campagnes, nous pouvons discuter d'une collaboration
              continue. Si la campagne répond à vos besoins immédiats, nous
              pouvons conclure le projet, bien que je reste disponible pour tout
              support ou ajustement futur.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </article>
    </section>
  );
}
