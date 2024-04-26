"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import Diplome from "@/public/Diplome.webp";

export function Scroller() {
  return (
    <section className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-center text-3xl font-bold uppercase md:mb-10 md:text-6xl lg:text-7xl xl:text-8xl">
              MES CERTIFICATIONS
            </h1>
          </>
        }
      >
        <Image
          src={Diplome}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto h-full rounded-2xl  bg-concrete-50 object-contain object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
