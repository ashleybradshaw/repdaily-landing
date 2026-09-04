"use client";

import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { useInView } from "framer-motion";
import { Layers, Rocket, Trophy, Users, type LucideIcon } from "lucide-react";
import { content } from "@/config/content";

let hasCelebratedThisSession = false;

const NODE_ICONS: Record<
  (typeof content.roadmap.nodes)[number]["icon"],
  LucideIcon
> = {
  rocket: Rocket,
  layers: Layers,
  users: Users,
  trophy: Trophy,
};

const NODE_STYLES: Record<
  (typeof content.roadmap.nodes)[number]["icon"],
  { iconClass: string; ruleClass: string }
> = {
  rocket: {
    iconClass:
      "mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#FF8964] text-white shadow-sm",
    ruleClass:
      "font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-2 pb-4 border-b-2 border-[#151A00]/20",
  },
  layers: {
    iconClass:
      "mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#86A000] text-white shadow-sm",
    ruleClass:
      "font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-2 pb-4 border-b-2 border-[#86A000]",
  },
  users: {
    iconClass:
      "mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#151A00]/20 text-[#151A00] shadow-sm",
    ruleClass:
      "font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-2 pb-4 border-b-2 border-[#3B4FFF]",
  },
  trophy: {
    iconClass:
      "mb-4 flex h-12 w-12 items-center justify-center rounded-[4px] bg-[#151A00]/20 text-[#151A00] shadow-sm",
    ruleClass:
      "font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-2 pb-4 border-b-2 border-[#151A00]/20",
  },
};

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
  const { roadmap } = content;

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
          {roadmap.title}
        </h2>
        <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
          {roadmap.subtitle}
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-[1280px] grid-cols-1 gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {roadmap.nodes.map((node) => {
          const Icon = NODE_ICONS[node.icon];
          const styles = NODE_STYLES[node.icon];
          return (
            <article
              key={node.title}
              className={
                "future" in node && node.future
                  ? "opacity-40 transition-opacity hover:opacity-70"
                  : undefined
              }
            >
              <div className={styles.iconClass}>
                <Icon size={22} strokeWidth={2.25} aria-hidden />
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-sans text-sm font-extrabold text-[#151A00]">
                  {node.status}
                </p>
                {"pill" in node && node.pill ? (
                  <StatusPill label={node.pill} />
                ) : null}
              </div>
              <h3 className="font-display text-lg font-black text-[#151A00] mt-1">
                {node.title}
              </h3>
              <p className={styles.ruleClass}>{node.body}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
