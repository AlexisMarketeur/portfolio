import Image from "next/image";
import glyph from "../public/vector/glyph.svg";
import { raleway } from "@/app/fonts";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <header className="mt-20 flex flex-col md:mt-0">
      <div className="flex flex-row">
        <div
          className={`font-medium leading-[0.84] tracking-tighter ${raleway.className} w-max whitespace-nowrap`}
        >
          <div className="w-full overflow-hidden">
            <p className="flex animate-slideUp1 text-[14vw] opacity-0">
              <Image
                src={glyph}
                alt="glyph"
                priority
                className="h-auto w-[10.3vw]"
              />
              FREELANCE
            </p>
          </div>
          <div className="w-full overflow-hidden">
            <p className="flex animate-slideUp2 text-[14vw]  opacity-0">
              GOOGLE ADS
            </p>
          </div>
          <div className="relative w-full">
            <div className="overflow-hidden">
              <p className="flex animate-slideUp3 text-[14vw] opacity-0">
                PARTNER
              </p>
            </div>
            <div className="absolute right-0 top-0 z-[-1]  hidden animate-appears1 opacity-0 md:block xl:right-10">
              <video
                autoPlay
                muted
                loop
                playsInline={true}
                className="h-auto w-[25vw] max-w-[350px] rounded-full"
              >
                <source src="/memoji.webm" type="video/webm" />
                <source src="/memoji.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-md animate-appears1 pt-6 opacity-0 sm:text-lg md:animate-appears2 md:text-xl lg:text-2xl xl:text-4xl">
          Je vous fais gagner de l'argent avec Google Ads
        </h1>
        <p
          className={`md:text-md mt-4 animate-appears2 text-xs text-neutral-500 opacity-0 sm:text-sm md:mt-1 md:animate-appears3 lg:text-lg xl:text-2xl`}
        >
          | Basé à Paris
        </p>
        <Button
          className="mt-14 animate-appears3 opacity-0 sm:mt-6 md:hidden"
          variant="cta"
          size="lg"
          asChild
        >
          <Link href="https://calendly.com" target="_blank">
            discutons ! <ArrowUpRight />
          </Link>
        </Button>
        <Button
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-appears4 opacity-0 "
          variant="secondaryCTA"
          size="sm"
          asChild
        >
          <Link href="#stats" className="flex gap-4">
            en savoir plus
            <ArrowDown />
          </Link>
        </Button>
      </div>
    </header>
  );
}
