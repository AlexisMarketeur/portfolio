import { Bento } from "@/components/bento";
import BioSection from "@/components/bioSection";
import Hero from "@/components/hero";
import Method from "@/components/methode";
import Navbar from "@/components/navbar";
import StatsSection from "@/components/statsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-11/12 h-screen">
        <Navbar />
        <div className="mt-6">
          <Hero />
        </div>
      </div>
      <main className="w-full">
        <StatsSection />
        <Method />
        <div className="mt-32">
          <Bento />
        </div>
      </main>
    </div>
  );
}
