"use client";

import Image from "next/image";
import {
  CalendarHeartIcon,
  CameraIcon,
  ScanLineIcon,
  useAnimatedIcon,
  type AnimatedIcon,
} from "@/components/icons/AnimateIcons";

const STEPS: {
  icon: AnimatedIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: CameraIcon,
    title: "Set your phone down.",
    body: "Place your phone on the floor with the front camera facing up. Quick 30-second range check gets you ready.",
  },
  {
    icon: CalendarHeartIcon,
    title: "Start a session.",
    body: "Choose open FreeRep, structured PushPass 24 stages, or speed-attack UltraTasks. Train your way.",
  },
  {
    icon: ScanLineIcon,
    title: "We track the rest.",
    body: "Real-time computer vision counts every full-extension rep automatically. Nothing recorded, nothing uploaded.",
  },
];

function StepCard({
  icon: Icon,
  title,
  body,
}: (typeof STEPS)[number]) {
  const { ref, onMouseEnter, onMouseLeave } = useAnimatedIcon();

  return (
    <article onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="mb-4 inline-flex items-center justify-center rounded-[4px] p-3 bg-[#151A00]">
        <Icon ref={ref} size={24} color="#C9E800" className="pointer-events-none" />
      </div>
      <h3 className="text-lg font-bold text-[#151A00]">{title}</h3>
      <p className="mt-2 text-sm text-[#151A00]/80 leading-relaxed">{body}</p>
    </article>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-[#C9E800] py-20">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <Image
          src="/assets/pushup-line-art.svg"
          alt=""
          width={214}
          height={99}
          className="w-64 mx-auto mb-4"
          aria-hidden
        />

        <p className="text-xs font-extrabold tracking-[0.2em] text-[#151A00] text-center">
          HOW REPDAILY WORKS.
        </p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#151A00] text-center mt-1">
          SMALL SETUP. BIG CLARITY.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mt-12">
          {STEPS.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
