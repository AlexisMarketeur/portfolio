import { UserCheck, Search, TrendingUp } from "lucide-react";
import { inter } from "@/app/fonts";

export default function StatsSection() {
  return (
    <section className="flex justify-center w-full py-14 md:py-24">
      <article className="flex flex-col w-11/12 gap-20 md:gap-32 md:w-9/12">
        <div>
          <h2 className="font-normal text-3xl md:text-5xl">
            Boostez votre visibilité en ligne avec Google Ads
          </h2>
        </div>
        <div className="flex flex-col justify-between w-full gap-24 md:flex-row">
          <div className="flex flex-col w-full lg:w-2/12 min-h-52">
            <div className="mb-6">
              <UserCheck className="w-16 h-16 p-3 border-2 border-b-4 border-black rounded-md rotate-6" />
            </div>
            <h3 className={`${inter.className} text-5xl font-bold pb-4 `}>
              90%
            </h3>
            <p className="pb-2 text-lg font-bold text-red">de part de marché</p>
            <p className="text-sm">
              50 millions d'utilisateurs chaque mois en France
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-2/12 min-h-52">
            <div className="mb-6">
              <Search className="w-16 h-16 p-3 border-2 border-b-4 border-black rounded-md rotate-[-4deg]" />
            </div>
            <h3 className={`${inter.className} text-5xl font-bold pb-4 `}>
              63%
            </h3>
            <p className="pb-2 text-lg font-bold text-red">
              D'utilisateur satisfait
            </p>
            <p className="text-sm">
              Dans leur recherche nagitationelle, commerciale et
              transactionnelle
            </p>
          </div>
          <div className="flex flex-col w-full lg:w-2/12 min-h-52">
            <div className="mb-6">
              <TrendingUp className="w-16 h-16 p-3 border-2 border-b-4 border-black rounded-md rotate-3" />
            </div>
            <h3 className={`${inter.className} text-5xl font-bold pb-4 `}>
              7%
            </h3>
            <p className="pb-2 text-lg font-bold text-red">de part de marché</p>
            <p className="text-sm">
              Choisir Google Ads c’est maximiser vos chances de toucher un
              public qualifié
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
