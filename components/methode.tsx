"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { paragraphs, titles } from "@/public/data.json";

export default function Method() {
  const [currentValue, setCurrentValue] = useState<number | null>(0);
  let paragraphContent = currentValue !== null ? paragraphs[currentValue] : "";
  let titleContent = currentValue !== null ? titles[currentValue] : "";

  return (
    <section
      id="methode"
      className="flex justify-center w-full py-14 md:py-24 mt-32"
    >
      <div className="flex flex-col w-12/12 md:w-9/12 bg-white border-2 border-b-4 border-black rounded-lg">
        <div className="p-8 lg:p-12">
          <div className="w-full flex justify-between items-center h-10">
            <h2 className="font-bold text-2xl md:text-6xl uppercase">
              Ma méthode de travail
            </h2>
            <Button
              variant="cta"
              size="default"
              asChild
              className="hidden md:flex"
            >
              <Link href="/">
                contactez moi <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-14 lg:mt-20 flex flex-col lg:flex-row  w-full lg:gap-24 items-center">
            <div className="flex lg:flex-col items-center justify-center gap-8 w-full lg:w-2/12 ">
              <Button
                variant="secondaryCTA"
                size="icon"
                onClick={() => {
                  setCurrentValue(0);
                }}
              >
                1
              </Button>
              <Button
                variant="secondaryCTA"
                size="icon"
                onClick={() => {
                  setCurrentValue(1);
                }}
              >
                2
              </Button>
              <Button
                variant="secondaryCTA"
                size="icon"
                onClick={() => {
                  setCurrentValue(2);
                }}
              >
                3
              </Button>
            </div>
            <article className="w-full lg:border-2 lg:border-b-4 border-black rounded-lg lg:p-8 h-auto min-h-60 lg:min-h-96 flex flex-col justify-start my-14 lg:my-0 lg:justify-center items-center">
              <div className="w-full lg:w-9/12">
                <h3 className="font-bold md:font-normal text-md md:text-xl lg:text-2xl mb-10 md:mb-6">
                  {titleContent}
                </h3>
              </div>
              <p className="w-full lg:w-9/12 leading-relaxed text-secondary">
                {paragraphContent}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
