import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MediaShowcase from "@/components/MediaShowcase";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const Features = dynamic(() => import("@/components/Features"));
const VideoShowcase = dynamic(() => import("@/components/VideoShowcase"));
const UltraTasksSection = dynamic(() => import("@/components/UltraTasksSection"));
const Roadmap = dynamic(() => import("@/components/Roadmap"));
const FAQ = dynamic(() => import("@/components/FAQ"));

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
