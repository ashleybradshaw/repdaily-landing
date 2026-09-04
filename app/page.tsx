import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MediaShowcase from "@/components/MediaShowcase";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import {
  FeaturesLazy,
  HowItWorksLazy,
  RoadmapLazy,
  UltraTasksSectionLazy,
  VideoShowcaseLazy,
} from "@/components/LazyBelowFold";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#C9E800] text-[#151A00] antialiased selection:bg-[#151A00] selection:text-[#C9E800]">
      {/* Navbar placed at root level so sticky/fixed spans the whole page */}
      <Navbar />
      
      {/* Lime Top Canvas */}
      <Hero />
      <HowItWorksLazy />
      <MediaShowcase />

      {/* Off-White Bottom Canvas */}
      <div className="bg-[#F8FFE6]">
        <FeaturesLazy />
        <VideoShowcaseLazy />
        <UltraTasksSectionLazy />
        <Pricing />
        <RoadmapLazy />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
