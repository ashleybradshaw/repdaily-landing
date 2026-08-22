"use client";

import {
  AudioLinesIcon,
  BookmarkCheckIcon,
  ChartNoAxesCombinedIcon,
  SlidersHorizontalIcon,
  SmartphoneIcon,
  ZapIcon,
  useAnimatedIcon,
  type AnimatedIcon,
} from "@/components/icons/AnimateIcons";

const FEATURES: {
  icon: AnimatedIcon;
  title: string;
  subhead: string;
  body: string;
}[] = [
  {
    icon: SmartphoneIcon,
    title: "Automatic Rep Counting",
    subhead: "Never lose count again.",
    body: "On-device computer vision tracks your movement depth and validates clean reps automatically so you can focus on form and effort.",
  },
  {
    icon: SlidersHorizontalIcon,
    title: "FreeRep Training (Free & Pro)",
    subhead: "Train anytime, your way.",
    body: "Unstructured open sessions for quick daily volume. Drop down, push until you stop, and bank every rep into your lifetime total.",
  },
  {
    icon: AudioLinesIcon,
    title: "PushPass 24 Progression (Pro)",
    subhead: "Automated stage workouts.",
    body: "24 adaptive training stages designed to scale your output. Hitting target sets unlocks Rep Points (RP) to rank up automatically.",
  },
  {
    icon: ChartNoAxesCombinedIcon,
    title: "Streaks & Consistency",
    subhead: "Build habits that stick.",
    body: "Interactive weekly calendar strips track active days, rest days, and momentum. Focus on showing up every single day.",
  },
  {
    icon: BookmarkCheckIcon,
    title: "PowerPath 10K & Achievements",
    subhead: "Every single rep counts.",
    body: "All reps across every mode feed into your 10,000-rep lifetime milestone, unlocking 17 custom achievement badges as you progress.",
  },
  {
    icon: ZapIcon,
    title: "UltraTasks Arena (Pro)",
    subhead: "High-stakes time & volume tests.",
    body: "Test your peak output in Explosive 20 (sub-45s speed attack) or Max Load (60-second rep assault) to collect challenge medals.",
  },
];

function FeatureCard({
  icon: Icon,
  title,
  subhead,
  body,
}: (typeof FEATURES)[number]) {
  const { ref, onMouseEnter, onMouseLeave } = useAnimatedIcon();

  return (
    <article
      className="group bg-[#F8FFE6] p-8 rounded-3xl border border-[#151A00]/10 shadow-sm transition-colors hover:border-[#151A00]/25"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="mb-4 inline-flex items-center justify-center rounded-[4px] p-3 bg-[#151A00]">
        <Icon
          ref={ref}
          size={24}
          color="#C9E800"
          className="pointer-events-none"
        />
      </div>
      <h3 className="text-lg font-bold text-[#151A00]">{title}</h3>
      <p className="mt-1 text-sm font-bold text-[#151A00]/70">{subhead}</p>
      <p className="mt-3 text-sm text-[#151A00]/80 leading-relaxed">{body}</p>
    </article>
  );
}

export default function Features() {
  return (
    <section id="features" className="w-full bg-[#F8FFE6] py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#151A00] text-center">
            Features that keep you moving.
          </h2>
          <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
            Built for consistency, not guesswork.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1280px] mx-auto mt-12">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
