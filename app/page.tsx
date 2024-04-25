import { BentoGridSecondDemo } from "@/components/bento";
import { Testimony } from "@/components/testimony";
import Hero from "@/components/hero";
import Method from "@/components/methode";
import Navbar from "@/components/navbar";
import StatsSection from "@/components/statsSection";
import { SoftSkills } from "@/components/softSkills";
import { AboutMe } from "@/components/aboutMe";
import { Scroller } from "@/components/scroller";
import { FAQ } from "@/components/faq";
import FinalCTA from "@/components/finalCta";
import MethodeStatic from "@/components/methodeStatic";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="h-screen w-11/12">
        <Navbar />
        <div className="mt-6">
          <Hero />
        </div>
      </div>
      <main className="flex w-full flex-col gap-28 md:gap-80">
        <StatsSection />
        <MethodeStatic />
        <BentoGridSecondDemo />
        <Testimony />
        <AboutMe />
        <Scroller />
        <div className="flex flex-col gap-28 bg-backgroundSecondary py-32 md:gap-80">
          <div className="flex flex-col gap-32">
            <SoftSkills />
            <FAQ />
          </div>
          <FinalCTA />
        </div>
      </main>
    </div>
  );
}
