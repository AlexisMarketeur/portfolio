"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Laëtitia Fournier",
    designation: "Bonateks",
    image: "/Laetitia.webp",
  },
  {
    id: 2,
    name: "Enzo Vergne",
    designation: "Génération Y",
    image: "/Enzo.webp",
  },
  {
    id: 3,
    name: "Noé Zaabi",
    designation: "Wingman Campus Fund",
    image: "/Noe.webp",
  },
  {
    id: 4,
    name: "Benjamin Athea",
    designation: "SNCF Connect & Tech",
    image: "/Benjamin.webp",
  },
  {
    id: 5,
    name: "Édouard Bourbon",
    designation: "INSEEC",
    image: "/Edouard.webp",
  },
];

export function Tooltip() {
  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}
