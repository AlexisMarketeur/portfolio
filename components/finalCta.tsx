import Link from "next/link";
import { Button } from "./ui/button";

export default function FinalCTA() {
  return (
    <section className="mb-48 flex w-full justify-center">
      <div className="flex h-32 w-11/12 items-center justify-center md:h-40 md:w-9/12 lg:h-[40vh]">
        <Button variant="giantCTA" size="giant" asChild className="text-[10vw]">
          <Link href="https://calendly.com" target="_blank">
            discutons !
          </Link>
        </Button>
      </div>
    </section>
  );
}
