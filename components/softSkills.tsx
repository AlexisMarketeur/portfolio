import {
  Handshake,
  Layers,
  MessageCircle,
  PencilLine,
  Presentation,
  Zap,
} from "lucide-react";

export const SoftSkills = () => (
  <section className="flex w-full justify-center bg-backgroundSecondary">
    <div className="w-11/12 md:w-9/12">
      <div className="flex w-full flex-col items-start gap-4 ">
        <h2 className="text-left text-3xl font-bold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
          MES BONNES PRATIQUES{" "}
        </h2>

        <div className="flex w-full flex-col gap-10 pt-12">
          <div className="grid grid-cols-2 items-start gap-8 md:gap-10 lg:grid-cols-3">
            <article className="flex w-full flex-col items-start gap-6 sm:flex-row">
              <PencilLine className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Créatif et innovant</p>
                <p className="text-sm text-neutral-500">
                  Je transforme les idées en solutions novatrices et
                  captivantes.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-start gap-6 sm:flex-row">
              <MessageCircle className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Communicatif et clair</p>
                <p className="text-muted-foreground text-sm text-neutral-500">
                  Je parle clairement, assurant une compréhension et
                  coordination sans faille.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-start gap-6 sm:flex-row">
              <Presentation className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Adaptable et flexible</p>
                <p className="text-muted-foreground text-sm text-neutral-500">
                  Je m'ajuste rapidement pour répondre aux besoins changeants de
                  chaque projet.
                </p>
              </div>
            </article>
            <article className="flex w-full flex-col items-start gap-6 sm:flex-row">
              <Layers className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Organisé et méthodique</p>
                <p className="text-muted-foreground text-sm text-neutral-500">
                  Je planifie avec soin, garantissant efficacité et précision à
                  chaque étape.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-start gap-6 sm:flex-row">
              <Zap className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Proactif et diligent</p>
                <p className="text-muted-foreground text-sm text-neutral-500">
                  J'anticipe les défis pour maintenir une avance constante.
                </p>
              </div>
            </article>
            <article className="flex flex-col items-start gap-6 sm:flex-row">
              <Handshake className="mt-2 h-4 w-4 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Empathique et à l'écoute</p>
                <p className="text-muted-foreground text-sm text-neutral-500">
                  J'écoute activement, construisant des relations solides et
                  basées sur la confiance.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
);
