"use client";

import Link from "next/link";
import { Button } from "./ui/button";

export default function CTA() {
  return (
    <section className="relative z-0 flex justify-center">
      <Button
        asChild
        variant="default"
        size="giant"
        className="w-full max-w-5xl px-4 py-16 md:px-6 md:py-48"
      >
        <div className="text-center">
          <Link
            href="/"
            className="before:from-greenCustom-200 before:to-blueCustom-200 group flex flex-col items-center justify-center space-y-4 text-xl font-semibold text-slate-900 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-r before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100 sm:text-4xl md:text-5xl lg:flex-row lg:space-x-6 lg:space-y-0"
          >
            <span className=" relative flex items-center justify-center overflow-hidden rounded-full border-4 border-b-8 border-black bg-slate-200 p-0.5">
              <span className="relative whitespace-nowrap">
                <span className="z-10 block rounded-full bg-gradient-to-r from-backgroundSecondary to-backgroundSecondary px-8 py-6 transition-opacity duration-500 ease-in-out group-hover:opacity-0">
                  Travaillons ensemble
                </span>

                <span
                  className="before:animate-infinite-scroll after:animate-infinite-scroll absolute inset-0 z-10 inline-flex items-center overflow-hidden whitespace-nowrap rounded-full bg-gradient-to-r from-backgroundSecondary to-backgroundSecondary opacity-0 transition-opacity duration-500 before:bg-gradient-to-r before:from-black before:to-black before:bg-clip-text before:px-2 before:text-transparent before:content-['Travaillons_ensemble'] after:bg-gradient-to-r after:from-black after:to-black after:bg-clip-text after:px-2 after:text-transparent after:content-['Travaillons_ensemble'] group-hover:opacity-100"
                  aria-hidden="true"
                ></span>
              </span>
            </span>

            <span className="transition-colors duration-500 ease-in-out group-hover:text-slate-300"></span>
          </Link>
        </div>
      </Button>
    </section>
  );
}
