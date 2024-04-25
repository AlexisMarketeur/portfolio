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
            <h1 className="text-3xl font-bold uppercase md:text-8xl">
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
          className="mx-auto h-full rounded-2xl  bg-concrete-50 object-cover object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
