import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight, Linkedin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full items-center md:mt-6 pt-2 animate-appears opacity-0 h-10">
      <div className="hidden md:flex">
        <Button variant="link" size="default" asChild>
          <Link href="#methode">ma méthode</Link>
        </Button>
        <Button variant="link" size="default" asChild>
          <Link href="/">à propos</Link>
        </Button>
      </div>

      <div className="flex gap-10 w-full md:w-min">
        <div className="flex flex-row-reverse justify-between w-full itesm-center">
          <Button variant="link" size="default" asChild>
            <Link
              href="https://www.linkedin.com/in/alexis-rodrigues-3a6349178"
              target="_blank"
            >
              <Linkedin />
            </Link>
          </Button>
          <Button variant="link" size="default" asChild>
            <Link href="" target="_blank">
              mon CV
            </Link>
          </Button>
        </div>
        <Button variant="cta" className="hidden md:flex" size="default" asChild>
          <Link href="https://calendly.com" target="_blank">
            discutons ! <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
