"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Laëtitia Fournier",
    designation: "Bonateks",
    image: "/Laetitia.jpg",
  },
  {
    id: 2,
    name: "Enzo Vergne",
    designation: "Génération Y",
    image: "/Enzo.jpg",
  },
  {
    id: 3,
    name: "Noé Zaabi",
    designation: "Wingman Campus Fund",
    image: "/Noe.jpg",
  },
  {
    id: 4,
    name: "Benjamin Athea",
    designation: "SNCF Connect & Tech",
    image: "/Benjamin.jpg",
  },
  {
    id: 5,
    name: "Édouard Bourbon",
    designation: "INSEEC",
    image: "/Edouard.jpg",
  },
];

export function Tooltip() {
  return (
    <div className="mb-10 flex w-full flex-row items-center justify-center">
      <AnimatedTooltip items={people} />
    </div>
  );
}
