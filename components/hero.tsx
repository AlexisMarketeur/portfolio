import Image from "next/image";
import glyph from "../public/vector/glyph.svg";
import { raleway } from "@/app/fonts";

export default function Hero() {
  return (
    <header className="flex flex-col mt-20 md:mt-0">
      <div className="flex flex-row">
        <div
          className={`font-medium tracking-tighter leading-[0.84] ${raleway.className} w-max whitespace-nowrap`}
        >
          <div className="overflow-hidden w-full">
            <p className="flex animate-slideUp1 opacity-0 text-[14vw]">
              <Image
                src={glyph}
                alt="glyph"
                priority
                className="h-auto w-[10.3vw]"
              />
              FREELANCE
            </p>
          </div>
          <div className="overflow-hidden w-full">
            <p className="flex animate-slideUp2 opacity-0  text-[14vw]">
              GOOGLE ADS
            </p>
          </div>
          <div className="relative w-full">
            <div className="overflow-hidden">
              <p className="flex animate-slideUp3 opacity-0 text-[14vw]">
                PARTNER
              </p>
            </div>
            <div className="absolute right-0 xl:right-10 top-0  animate-appears1 opacity-0">
              <video
                autoPlay
                muted
                loop
                playsInline={true}
                className="rounded-full w-[25vw] max-w-[350px] h-auto"
              >
                <source src="/memoji.webm" type="video/webm" />
                <source src="/memoji.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between relative w-full">
        <h1 className="text-lg pt-12 md:text-2xl lg:text-4xl animate-appears1 opacity-0">
          Je vous fais gagner de l'argent avec{" "}
          <span className="text-red">Google Ads</span>
        </h1>
      </div>
    </header>
  );
}

// text-5xl sm:text-6xl xl:text-[280px] xl:leading-[250px]
