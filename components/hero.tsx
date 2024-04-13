import Image from "next/image";
import glyph from "../public/vector/glyph.svg";
import { raleway } from "@/app/fonts";

export default function Hero() {
  return (
    <header className="flex flex-col">
      <div className="flex flex-row">
        <div
          className={`font-medium relative text-4xl xl:text-[280px] xl:leading-[250px] tracking-tighter ${raleway.className}`}
        >
          <div className="overflow-hidden">
            <p className="flex animate-slideUp1 opacity-0">
              <Image
                src={glyph}
                style={{ height: "auto", width: "200px" }}
                alt="glyph"
                priority
              />
              FREELANCE
            </p>
          </div>
          <div className="overflow-hidden">
            <p className="flex animate-slideUp2 opacity-0">GOOGLE ADS</p>
          </div>
          <div className="overflow-hidden">
            <p className="flex animate-slideUp3 opacity-0">PARTNER</p>
          </div>
        </div>
        <div className="absolute bottom-20 right-60 animate-appears1 opacity-0">
          <video
            autoPlay
            muted
            loop
            playsInline={true}
            className="rounded-full w-80 h-auto"
          >
            <source src="/memoji.webm" type="video/webm" />
            <source src="/memoji.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la balise vidéo.
          </video>
        </div>
      </div>
      <div>
        <h1 className="text-4xl animate-appears1 opacity-0" id="methode">
          Je vous fais gagner de l'argent avec{" "}
          <span className="text-red">Google Ads</span>
        </h1>
      </div>
    </header>
  );
}
