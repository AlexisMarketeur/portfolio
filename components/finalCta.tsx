"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import confetti from "canvas-confetti";

export default function FinalCTA() {
  return (
    <section className="mb-48 flex w-full justify-center">
      <div className="flex h-32 w-11/12 items-center justify-center md:h-40 md:w-9/12 lg:h-[40vh]">
        <Button
          id="confetti"
          variant="giantCTA"
          size="giant"
          className="text-[10vw]"
        >
          <Link href="/" target="_blank">
            Discutons
          </Link>
        </Button>
      </div>
    </section>
  );
}
