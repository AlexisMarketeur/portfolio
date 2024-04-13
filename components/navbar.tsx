import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full items-baseline pt-2 animate-appears opacity-0">
      <Button variant="link" size="default" asChild>
        <Link href="/">ma méthode</Link>
      </Button>
      <Button variant="link" size="default" asChild>
        <Link href="/">à propos</Link>
      </Button>

      <Button variant="link" asChild>
        <Link href="https://calendly.com" target="_blank">
          discutons !
        </Link>
      </Button>
    </nav>
  );
};

export default Navbar;
