import { Bento } from "@/components/bento";
import Hero from "@/components/hero";
import Method from "@/components/methode";
import Navbar from "@/components/navbar";
import StatsSection from "@/components/statsSection";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="h-screen w-11/12">
        <Navbar />
        <div className="mt-6">
          <Hero />
        </div>
      </div>
      <main className="w-full">
        <StatsSection />
        <Method />
        <div className="mt-64">
          <Bento />
        </div>
      </main>
    </div>
  );
}
