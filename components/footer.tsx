import { Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex w-11/12 justify-center md:w-9/12">
      <div className="w-full py-8 ">
        <div className=" sm:flex sm:items-center sm:justify-between ">
          <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
            <li>
              <p className="text-neutral-500 ">
                Alexis Rodrigues | Freelance Google Ads Partner
              </p>
            </li>
          </ul>

          <ul className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
            <li>
              <Link
                href="mailto:a.rodriguespro1@gmail.com"
                className="text-black transition hover:opacity-75"
              >
                <span className="sr-only">Mail</span>
                <Mail />
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-black transition hover:opacity-75"
              >
                <span className="sr-only">Instagram</span>
                <Linkedin />
              </Link>
            </li>

            <li>
              <Link
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-black transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>
                <Twitter />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
