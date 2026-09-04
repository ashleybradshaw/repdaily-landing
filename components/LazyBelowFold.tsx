"use client";

import dynamic from "next/dynamic";

export const HowItWorksLazy = dynamic(() => import("@/components/HowItWorks"), {
  ssr: false,
  loading: () => <div className="w-full bg-[#C9E800] py-20" aria-hidden />,
});

export const FeaturesLazy = dynamic(() => import("@/components/Features"), {
  ssr: false,
  loading: () => <div className="w-full bg-[#F8FFE6] py-24" aria-hidden />,
});

export const VideoShowcaseLazy = dynamic(() => import("@/components/VideoShowcase"), {
  ssr: false,
  loading: () => (
    <div className="w-full bg-[#F8FFE6] pb-24">
      <div className="mx-auto h-[420px] max-w-[1280px] px-6 md:px-12" aria-hidden />
    </div>
  ),
});

export const UltraTasksSectionLazy = dynamic(
  () => import("@/components/UltraTasksSection"),
  {
    ssr: false,
    loading: () => <div className="w-full bg-[#F8FFE6] py-24" aria-hidden />,
  },
);

export const RoadmapLazy = dynamic(() => import("@/components/Roadmap"), {
  ssr: false,
  loading: () => <div className="w-full bg-[#F8FFE6] py-24" aria-hidden />,
});
