import { AboutMe } from "@/components/aboutMe";
import CTA from "@/components/animatedCTA";
import { BentoGridTools } from "@/components/bento";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import Hero from "@/components/hero";
import MethodeStatic from "@/components/methodeStatic";
import Navbar from "@/components/navbar";
import { Scroller } from "@/components/scroller";
import { SoftSkills } from "@/components/softSkills";
import StatsSection from "@/components/statsSection";
import { Testimony } from "@/components/testimony";

export default function Home() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="h-screen w-11/12">
        <Navbar />
        <div className="mt-6">
          <Hero />
        </div>
      </div>
      <main className="flex w-full flex-col gap-28 md:gap-64">
        <div>
          <StatsSection />
          <MethodeStatic />
        </div>

        <BentoGridTools />
        <div>
          <Testimony />
          <AboutMe />
        </div>
        <Scroller />
        <div className="flex flex-col gap-28 bg-backgroundSecondary py-32 md:gap-80">
          <div className="flex flex-col gap-28 md:gap-48">
            <SoftSkills />
            <FAQ />
          </div>
        </div>
      </main>
      <div className="w-full bg-backgroundSecondary">
        <CTA />
      </div>
      <div className="flex w-full justify-center border-t-[1px] border-black">
        <Footer />
      </div>
    </div>
  );
}
