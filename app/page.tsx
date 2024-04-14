import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mt-6 mb-96">
        <Hero />
      </div>
    </>
  );
}
