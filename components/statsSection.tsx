import { inter } from "@/app/fonts";
import { Search, TrendingUp, UserCheck } from "lucide-react";

export default function StatsSection() {
  return (
    <section
      id="stats"
      className="flex w-full justify-center bg-backgroundSecondary py-36"
    >
      <article className="flex w-11/12 flex-col gap-20 md:w-9/12 md:gap-48">
        <div>
          <h2 className="text-left text-3xl font-bold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
            Boostez votre visibilité en ligne avec Google Ads
          </h2>
        </div>
        <div className="flex w-full flex-col justify-between gap-24 lg:flex-row">
          <div className="flex min-h-52 w-full flex-col lg:w-2/12">
            <div className="mb-6">
              <Search className="h-16 w-16 rotate-6 rounded-md border-2 border-b-4 border-black bg-gradient-to-r from-greenCustom-100 to-blueCustom-100 p-3" />
            </div>
            <h3 className={`${inter.className} pb-4 text-8xl font-bold `}>
              92%
            </h3>
            <p className="pb-2 text-lg font-bold ">de part de marché</p>
            <p className="text-sm">
              Avec 50 millions d'utilisateurs chaque mois en France, il n’y a
              pas de meilleur endroit pour toucher un vaste public que sur
              Google.
            </p>
          </div>
          <div className="flex min-h-52 w-full flex-col lg:w-[18%]">
            <div className="mb-6">
              <TrendingUp className="h-16 w-16 rotate-3 rounded-md border-2 border-b-4 border-black bg-gradient-to-r from-greenCustom-100 to-blueCustom-100 p-3 " />
            </div>
            <h3 className={`${inter.className} pb-4 text-8xl font-bold `}>
              200%
            </h3>
            <p className="pb-2 text-lg font-bold ">
              de retour sur investissement (ROI)
            </p>
            <p className="text-sm">
              Si vous investissez un euro dans une publicité Google, vous pouvez
              vous attendre à gagner en moyenne 2 euros en retour grâce
              à ces publicités.
            </p>
          </div>
          <div className="flex min-h-52 w-full flex-col lg:w-2/12">
            <div className="mb-6">
              <UserCheck className="h-16 w-16 rotate-[-4deg] rounded-md border-2 border-b-4 border-black bg-gradient-to-l from-greenCustom-100 to-blueCustom-100 p-3 " />
            </div>
            <h3 className={`${inter.className} pb-4 text-8xl font-bold `}>
              90%
            </h3>
            <p className="pb-2 text-lg font-bold ">Des consommateurs</p>
            <p className="text-sm">
              Estiment que les publicités Google Ads influencent leur recherche
              et leur décision d’achat lorsqu'ils en effectuent une !
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
