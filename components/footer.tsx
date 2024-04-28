import { ArrowUp, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="flex w-11/12 justify-center md:w-9/12">
      <div className="w-full py-8 ">
        <div className=" sm:flex sm:items-center sm:justify-between ">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li className="flex gap-2">
              <p className="text-neutral-500 ">Alexis Rodrigues |</p>
              <Link
                href="https://abdalmalikbourassi.com"
                className="text-black transition hover:opacity-75"
                target="_blank"
              >
                Développé par Malik
              </Link>
            </li>
          </ul>

          {/* DEV BY MALIK */}
          <ul className="mt-8 flex items-center justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <Button variant="link" size="default" asChild>
                <Link href="/CV.pdf" target="_blank">
                  mon CV
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size="default" asChild>
                <Link
                  href="mailto:a.rodriguespro1@gmail.com"
                  className="text-black transition hover:opacity-75"
                >
                  <span className="sr-only">Mail</span>
                  <Mail />
                </Link>
              </Button>
            </li>
            <li>
              <Button variant="link" size="default" asChild>
                <Link
                  href="https://www.linkedin.com/in/alexis-rodrigues-3a6349178/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-black transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <Linkedin />
                </Link>
              </Button>
            </li>

            <li>
              <Button variant="link" size="default" asChild>
                <Link
                  href="https://twitter.com/alexismarketeur"
                  rel="noreferrer"
                  target="_blank"
                  className="text-black transition hover:opacity-75"
                >
                  <span className="sr-only">Twitter</span>
                  <Twitter />
                </Link>
              </Button>
            </li>

            <li className="ml-8 hidden md:flex">
              <Button
                variant="link"
                size="default"
                className="transform rounded-full border-2 border-black bg-backgroundSecondary p-0.5 transition-all duration-300 hover:opacity-50"
                asChild
              >
                <Link href="/" className="flex gap-4">
                  <ArrowUp />
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
