import Image from "next/image";
import glyph from "../public/vector/glyph.svg";
import { raleway } from "@/app/fonts";
import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

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
            <div className="hidden absolute right-0 md:block  xl:right-10 top-0 z-[-1] animate-appears1 opacity-0">
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
      <div className="w-full">
        <h1 className="text-md sm:text-lg pt-6 md:text-xl lg:text-2xl xl:text-4xl animate-appears1 md:animate-appears2 opacity-0">
          Je vous fais gagner de l'argent avec{" "}
          <span className="text-red">Google Ads</span>
        </h1>
        <p
          className={`text-xs sm:text-sm md:text-md lg:text-lg xl:text-2xl mt-4 md:mt-1 text-neutral-400 animate-appears2 md:animate-appears3 opacity-0`}
        >
          | Basé à Paris
        </p>
        <Button
          className="mt-14 sm:mt-6 animate-appears3 opacity-0 md:hidden"
          variant="cta"
          size="lg"
          asChild
        >
          <Link href="https://calendly.com" target="_blank">
            discutons ! <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </header>
  );
}
