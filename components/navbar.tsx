import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-end md:justify-between w-full items-center mt-6 pt-2 animate-appears opacity-0 h-10">
      <Button variant="link" size="default" asChild className="hidden md:flex">
        <Link href="#methode">ma méthode</Link>
      </Button>
      <Button variant="link" size="default" asChild className="hidden md:flex">
        <Link href="/">à propos</Link>
      </Button>

      <Button variant="cta" size="default" asChild>
        <Link href="https://calendly.com" target="_blank">
          discutons ! <ArrowUpRight />
        </Link>
      </Button>
    </nav>
  );
};

export default Navbar;
