"use client";

import {
  BoxesIcon,
  ClockArrowUpIcon,
  SparklesIcon,
  WaypointsIcon,
  useAnimatedIcon,
  type AnimatedIcon,
} from "@/components/icons/AnimateIcons";
import { content } from "@/config/content";

const TASK_ICONS: Record<
  (typeof content.ultraTasks.items)[number]["icon"],
  AnimatedIcon
> = {
  waypoints: WaypointsIcon,
  clock: ClockArrowUpIcon,
  boxes: BoxesIcon,
  sparkles: SparklesIcon,
};

function TaskCard({
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
  const { ultraTasks } = content;

  return (
    <section id="ultra-tasks" className="w-full bg-[#F8FFE6] py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#151A00] text-center">
            {ultraTasks.title}
          </h2>
          <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
            {ultraTasks.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1280px] mx-auto mt-12">
          {ultraTasks.items.map((task) => (
            <TaskCard
              key={task.title}
              icon={TASK_ICONS[task.icon]}
              title={task.title}
              subhead={task.subhead}
              body={task.body}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
