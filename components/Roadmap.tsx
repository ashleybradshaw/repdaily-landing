"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { useInView } from "framer-motion";
import { Layers, Rocket, Trophy, Users, type LucideIcon } from "lucide-react";

let hasCelebratedThisSession = false;

const NODES: {
  icon: LucideIcon;
  iconClass: string;
  status: string;
  pill?: "LIVE" | "READY";
  title: string;
  body: string;
  ruleClass: string;
  future?: boolean;
}[] = [
  {
    icon: Rocket,
    iconClass:
      "mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#FF8964] text-white shadow-sm",
    status: "2026",
    pill: "LIVE",
    title: "Public Beta Release",
    body: "FreeRep camera auto-counting, PowerPath 10K, and core streak tracking.",
    ruleClass:
      "font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-2 pb-4 border-b-2 border-[#151A00]/20",
  },
  {
    icon: Layers,
    iconClass:
      "mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#86A000] text-white shadow-sm",
    status: "Early Beta",
    pill: "READY",
    title: "PushPass 24 & UltraTasks",
    body: "Structured stage progression and time-attack speed challenges unlocked for Pro members.",
    ruleClass:
      "font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-2 pb-4 border-b-2 border-[#86A000]",
  },
  {
    icon: Users,
    iconClass:
      "mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#151A00]/20 text-[#151A00] shadow-sm",
    status: "2026 (Late)",
    title: "Social Challenges & Friends",
    body: "Train alongside friends, share workout summaries, and challenge custom rep targets.",
    ruleClass:
      "font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-2 pb-4 border-b-2 border-[#3B4FFF]",
    future: true,
  },
  {
    icon: Trophy,
    iconClass:
      "mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#151A00]/20 text-[#151A00] shadow-sm",
    status: "2026 (Late)",
    title: "Leaderboards & Deep Analytics",
    body: "Global/local rankings, rep velocity trendlines, and advanced computer vision feedback.",
    ruleClass:
      "font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-2 pb-4 border-b-2 border-[#151A00]/20",
    future: true,
  },
];

function StatusPill({ label }: { label: "LIVE" | "READY" }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[#86A000] px-2 py-0.5 text-[10px] font-extrabold tracking-wider text-white">
      ● {label}
    </span>
  );
}

export default function Roadmap() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });

  useEffect(() => {
    if (!isInView || hasCelebratedThisSession) return;
    hasCelebratedThisSession = true;

    void confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#C9E800", "#FF8964", "#151A00", "#86A000"],
      disableForReducedMotion: true,
    });
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="roadmap"
      className="w-full bg-[#F8FFE6] py-24"
    >
      <div className="flex flex-col items-center px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl font-black text-[#151A00] text-center">
          Come with us.
        </h2>
        <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
          Here&apos;s what we&apos;re building next.
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {NODES.map((node) => {
          const Icon = node.icon;
          return (
            <article
              key={node.title}
              className={
                node.future
                  ? "opacity-40 transition-opacity hover:opacity-70"
                  : undefined
              }
            >
              <div className={node.iconClass}>
                <Icon size={22} strokeWidth={2.25} aria-hidden />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-sans text-sm font-extrabold text-[#151A00]">
                  {node.status}
                </p>
                {node.pill ? <StatusPill label={node.pill} /> : null}
              </div>
              <h3 className="font-display text-lg font-black text-[#151A00] mt-1">
                {node.title}
              </h3>
              <p className={node.ruleClass}>{node.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
