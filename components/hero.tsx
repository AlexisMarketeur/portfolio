import Image from "next/image";
import glyph from "../public/vector/glyph.svg";
import { raleway } from "@/app/fonts";

export default function Hero() {
  return (
    <header className="flex">
      <div
        className={`font-medium relative text-[250px] leading-none tracking-tighter ${raleway.className}`}
      >
        <div>
          <p className="flex">
            <Image
              src={glyph}
              style={{ height: "auto", width: "120px" }}
              alt="glyph"
              priority
            />
            FREELANCE
          </p>
        </div>
        <div>
          <p>GOOGLE ADS</p>
        </div>
        <div>
          <p>PARTNER</p>
        </div>
      </div>
      <div className="absolute bottom-20 right-10">
        <video
          autoPlay
          muted
          loop
          playsInline={true}
          className="rounded-full w-80 h-auto border-2"
        >
          <source src="/memoji.webm" />
          <source src="/memoji.mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </header>
  );
}
