import { ArrowUpRight, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex h-10 w-full animate-appears items-center justify-between pt-2 opacity-0 md:mt-6">
      <div className="hidden md:flex">
        <Button variant="link" size="default" asChild>
          <Link href="#methode">ma méthode</Link>
        </Button>
        <Button variant="link" size="default" asChild className="mx-8">
          <Link href="#about">à propos</Link>
        </Button>
      </div>

      <div className="flex w-full gap-10 md:w-min">
        <div className="flex w-full flex-row-reverse items-center justify-between">
          <Button
            variant="link"
            size="default"
            asChild
            className="hover:opacity-75"
          >
            <Link
              href="https://www.linkedin.com/in/alexis-rodrigues-3a6349178/"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </Button>
          <Button variant="link" size="default" asChild className="md:mx-8">
            <Link href="/CV.pdf" target="_blank">
              mon CV
            </Link>
          </Button>
        </div>
        <Button variant="cta" className="hidden md:flex" size="lg" asChild>
          <Link
            href="https://calendly.com/alexismarketeur/premier-contact"
            target="_blank"
          >
            Discutons ! <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
