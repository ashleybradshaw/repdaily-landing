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
import { content } from "@/config/content";

const FEATURE_ICONS: Record<
  (typeof content.features.items)[number]["icon"],
  AnimatedIcon
> = {
  smartphone: SmartphoneIcon,
  sliders: SlidersHorizontalIcon,
  audio: AudioLinesIcon,
  chart: ChartNoAxesCombinedIcon,
  bookmark: BookmarkCheckIcon,
  zap: ZapIcon,
};

function FeatureCard({
  icon: Icon,
  title,
  subhead,
  body,
}: {
  icon: AnimatedIcon;
  title: string;
  subhead: string;
  body: string;
}) {
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
  const { features } = content;

  return (
    <section id="features" className="w-full bg-[#F8FFE6] py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#151A00] text-center">
            {features.title}
          </h2>
          <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
            {features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1280px] mx-auto mt-12">
          {features.items.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={FEATURE_ICONS[feature.icon]}
              title={feature.title}
              subhead={feature.subhead}
              body={feature.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
