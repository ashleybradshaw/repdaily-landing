import {
  Activity,
  Award,
  GitCommitHorizontal,
  SlidersHorizontal,
  Smartphone,
  Zap,
  type LucideIcon,
} from "lucide-react";

const FEATURES: {
  icon: LucideIcon;
  title: string;
  subhead: string;
  body: string;
}[] = [
  {
    icon: Smartphone,
    title: "Automatic Rep Counting",
    subhead: "Never lose count again.",
    body: "On-device computer vision tracks your movement depth and validates clean reps automatically so you can focus on form and effort.",
  },
  {
    icon: SlidersHorizontal,
    title: "FreeRep Training (Free & Pro)",
    subhead: "Train anytime, your way.",
    body: "Unstructured open sessions for quick daily volume. Drop down, push until you stop, and bank every rep into your lifetime total.",
  },
  {
    icon: Activity,
    title: "PushPass 24 Progression (Pro)",
    subhead: "Automated stage workouts.",
    body: "24 adaptive training stages designed to scale your output. Hitting target sets unlocks Rep Points (RP) to rank up automatically.",
  },
  {
    icon: GitCommitHorizontal,
    title: "Streaks & Consistency",
    subhead: "Build habits that stick.",
    body: "Interactive weekly calendar strips track active days, rest days, and momentum. Focus on showing up every single day.",
  },
  {
    icon: Award,
    title: "PowerPath 10K & Achievements",
    subhead: "Every single rep counts.",
    body: "All reps across every mode feed into your 10,000-rep lifetime milestone, unlocking 17 custom achievement badges as you progress.",
  },
  {
    icon: Zap,
    title: "UltraTasks Arena (Pro)",
    subhead: "High-stakes time & volume tests.",
    body: "Test your peak output in Explosive 20 (sub-45s speed attack) or Max Load (60-second rep assault) to collect challenge medals.",
  },
];

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
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="bg-[#F8FFE6] p-8 rounded-3xl border border-[#151A00]/10 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#151A00] text-[#C9E800]">
                  <Icon size={22} strokeWidth={2.25} aria-hidden />
                </div>
                <h3 className="text-lg font-bold text-[#151A00]">{feature.title}</h3>
                <p className="mt-1 text-sm font-bold text-[#151A00]/70">
                  {feature.subhead}
                </p>
                <p className="mt-3 text-sm text-[#151A00]/80 leading-relaxed">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
