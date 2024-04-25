"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/utils/cn";

export function Testimony() {
  return (
    <section className="bg-backgroundSecondary flex w-full justify-center py-32">
      <div className="flex w-11/12 flex-col items-center">
        <h2 className="text-3xl font-bold uppercase md:text-8xl">
          ILS ME FONT CONFIANCE
        </h2>
        <article className="mt-8 flex w-full items-center justify-center text-sm md:w-6/12 md:pt-32 md:text-xl">
          <CardStack items={CARDS} />
        </article>
      </div>
    </section>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "mx-1 rounded-[5px] bg-gradient-to-r from-blue to-green py-0.5 text-sm font-bold text-black md:text-xl ",
        className,
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, <Highlight>I want to use them</Highlight> in my
        project. Framer motion is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing,{" "}
        <Highlight>deleting it right away</Highlight> because yolo. Instead, I
        would like to call it <Highlight>X.com</Highlight> so that it can easily
        be confused with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
