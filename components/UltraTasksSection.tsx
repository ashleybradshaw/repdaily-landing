"use client";

import {
  BoxesIcon,
  ClockArrowUpIcon,
  SparklesIcon,
  WaypointsIcon,
  useAnimatedIcon,
  type AnimatedIcon,
} from "@/components/icons/AnimateIcons";

const TASKS: {
  icon: AnimatedIcon;
  title: string;
  subhead: string;
  body: string;
}[] = [
  {
    icon: WaypointsIcon,
    title: "POWERPATH 10K",
    subhead: "The 10,000 rep lifetime milestone.",
    body: "Pure cumulative graft. No daily minimums and no penalties for rest. Bank reps at your own pace from Couch Potato to Absolute Unit.",
  },
  {
    icon: ClockArrowUpIcon,
    title: "EXPLOSIVE 20",
    subhead: "Beat the clock.",
    body: "20 clean push-ups as fast as you can. Computer vision validates every extension as you race to unlock Gold, Silver, and Bronze medals.",
  },
  {
    icon: BoxesIcon,
    title: "MAX PUSHUPS",
    subhead: "1 Minute, One Session.",
    body: "60 seconds of max effort. Lock in as many reps as possible before time runs out to claim high-volume badges.",
  },
  {
    icon: SparklesIcon,
    title: "TROPHY CABINET",
    subhead: "Earned, never given.",
    body: "Collect 17 unique achievement badges marking real performance milestones—from First Blood (Rep #1) to elite territory.",
  },
];

function TaskCard({
  icon: Icon,
  title,
  subhead,
  body,
}: (typeof TASKS)[number]) {
  const { ref, onMouseEnter, onMouseLeave } = useAnimatedIcon();

  return (
    <article
      className="bg-[#F8FFE6] p-8 rounded-3xl border border-[#151A00]/10 transition-colors hover:border-[#151A00]/25"
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

export default function UltraTasksSection() {
  return (
    <section id="ultra-tasks" className="w-full bg-[#F8FFE6] py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#151A00] text-center">
            Ultra. Tasks.
          </h2>
          <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
            Long-term challenges designed to reward consistency and peak speed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1280px] mx-auto mt-12">
          {TASKS.map((task) => (
            <TaskCard key={task.title} {...task} />
          ))}
        </div>
      </div>
    </section>
  );
}
