import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowUpRight, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full items-center md:mt-6 pt-2 animate-appears opacity-0 h-10">
      <Button variant="link" size="default" asChild>
        <Link href="#methode">ma méthode</Link>
      </Button>
      <Button variant="link" size="default" asChild>
        <Link href="/">à propos</Link>
      </Button>

      <Button variant="cta" className="hidden md:flex" size="default" asChild>
        <Link href="https://calendly.com" target="_blank">
          discutons ! <ArrowUpRight />
        </Link>
      </Button>
    </nav>
  );
};

export default Navbar;
