"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import { Modal } from "./modal";

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
        <div className="relative h-full w-full">
          <Image
            src="/Diplome.webp"
            alt="hero"
            height={720}
            width={1400}
            className="mx-autor h-full rounded-2xl object-contain object-center"
            draggable={false}
            priority={true}
          />
          <div className="absolute bottom-1 right-1">
            <Modal />
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
}
