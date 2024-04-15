import BioSection from "@/components/bioSection";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-11/12 h-screen">
        <Navbar />
        <div className="mt-6">
          <Hero />
        </div>
      </div>
      <main className="w-full">
        <BioSection />
      </main>
    </div>
  );
}
