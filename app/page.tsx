import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import MediaShowcase from "@/components/MediaShowcase";
import Features from "@/components/Features";
import VideoShowcase from "@/components/VideoShowcase";
import UltraTasksSection from "@/components/UltraTasksSection";
import Pricing from "@/components/Pricing";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#C9E800] text-[#151A00] antialiased selection:bg-[#151A00] selection:text-[#C9E800]">
      {/* Navbar placed at root level so sticky/fixed spans the whole page */}
      <Navbar />
      
      {/* Lime Top Canvas */}
      <Hero />
      <HowItWorks />
      <MediaShowcase />

      {/* Off-White Bottom Canvas */}
      <div className="bg-[#F8FFE6]">
        <Features />
        <VideoShowcase />
        <UltraTasksSection />
        <Pricing />
        <Roadmap />
        <FAQ />
        <Footer />
      </div>
    </main>
  );
}
