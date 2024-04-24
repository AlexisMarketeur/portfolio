"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { data } from "@/public/data.json";

export default function Method() {
  const [currentValue, setCurrentValue] = useState<number | null>(0);

  let paragraphContent =
    currentValue !== null ? data.paragraphs[currentValue] : "";
  let titleContent = currentValue !== null ? data.titles[currentValue] : "";

  return (
    <section
      id="methode"
      className="mt-32 flex w-full justify-center py-14 md:py-24"
    >
      <div className="w-12/12 flex flex-col rounded-lg border-2 border-b-4 border-black md:w-9/12 lg:bg-concrete-100">
        <div className="p-8 lg:p-12">
          <div className="flex h-10 w-full items-center justify-between">
            <h2 className="text-2xl font-bold uppercase md:text-4xl lg:text-5xl xl:text-6xl">
              Ma méthode de travail
            </h2>
            <Button
              variant="cta"
              size="default"
              asChild
              className="hidden md:flex "
            >
              <Link href="/">
                contactez moi <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="mt-14 flex w-full flex-col items-center  lg:mt-20 lg:flex-row lg:gap-24">
            <div className="flex w-full items-center justify-center gap-4 md:gap-8 lg:w-2/12 lg:flex-col ">
              <Button
                variant="secondaryCTA"
                size="sm"
                onClick={() => {
                  setCurrentValue(0);
                }}
              >
                1
              </Button>
              <Button
                variant="secondaryCTA"
                size="sm"
                onClick={() => {
                  setCurrentValue(1);
                }}
              >
                2
              </Button>
              <Button
                variant="secondaryCTA"
                size="sm"
                onClick={() => {
                  setCurrentValue(2);
                }}
              >
                3
              </Button>
            </div>
            <article className="my-14 flex h-auto min-h-60  w-full flex-col items-center justify-start rounded-lg border-black lg:my-0 lg:min-h-96 lg:justify-center lg:border-2 lg:border-b-4 lg:bg-concrete-50 lg:p-8">
              <div className="w-full lg:w-9/12">
                <h3 className="text-md mb-10 font-bold uppercase md:mb-6 md:text-xl">
                  {titleContent}
                </h3>
              </div>
              <p className="w-full leading-relaxed text-black lg:w-9/12">
                {paragraphContent}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
