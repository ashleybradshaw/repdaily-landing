import Image from "next/image";

const FREE_PERKS = [
  "Unlimited FreeRep open sessions",
  "Full PowerPath 10K progression access",
  "Basic 7-day streaks & workout history",
  "Camera auto-counting & calibration",
];

const PRO_PERKS = [
  { label: "All Free Plan features included" },
  {
    label: "PushPass 24",
    detail: "Structured stage progression (Stages 1-24)",
  },
  {
    label: "Unlimited UltraTasks",
    detail: "Explosive 20 & Max Load time attacks",
  },
  { label: "Complete 17-badge trophy cabinet tracking" },
  { label: "Cancel anytime." },
];

const FUTURE_PERKS = [
  "Train with friends & shared challenges",
  "Local & global leaderboards",
];

function CheckItem({
  children,
  detail,
}: {
  children: string;
  detail?: string;
}) {
  return (
    <li className="flex items-start gap-2 text-[#151A00]">
      <span aria-hidden className="shrink-0 font-black leading-snug">
        ✓
      </span>
      <span>
        <span className="font-bold">{children}</span>
        {detail ? (
          <span className="mt-0.5 block font-medium text-[#151A00]/65">
            {detail}
          </span>
        ) : null}
      </span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section id="plans" className="w-full bg-[#F8FFE6] py-24">
      <h2 className="font-display text-4xl md:text-5xl font-black text-[#151A00] text-center">
        Subscription built around you.
      </h2>
      <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
        Start free. Go further when you&apos;re ready.
      </p>

      <div className="max-w-[1000px] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 px-6">
        <article>
          <div className="mb-4 h-8 w-8 overflow-hidden rounded-[4px]">
            <Image
              src="/assets/logo-icon-repdaily.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>
          <h3 className="font-display text-lg font-black tracking-wide text-[#151A00]">
            FREE MEMBER.
          </h3>
          <p className="font-sans text-xs md:text-sm font-bold text-[#151A00] mt-1">
            Great place to start, try the app.
          </p>
          <p className="font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-3 pb-6 border-b border-[#151A00]/20">
            Essential push-up tracking for everyday training. No pressure, no
            cost, every rep counts towards your 10K PowerPath total.
          </p>
          <ul className="mt-6 space-y-4 text-xs md:text-sm">
            {FREE_PERKS.map((perk) => (
              <CheckItem key={perk}>{perk}</CheckItem>
            ))}
          </ul>
        </article>

        <article>
          <div className="mb-4 h-8 w-8 overflow-hidden rounded-[4px]">
            <Image
              src="/assets/logo-icon-repdaily.svg"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>
          <h3 className="font-display text-lg font-black tracking-wide text-[#151A00]">
            PAID MEMBER
          </h3>
          <p className="font-sans text-xs md:text-sm font-bold text-[#151A00] mt-1">
            Ready to step it up? (7 Day&apos;s Free)
          </p>
          <p className="font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-3 pb-6 border-b border-[#151A00]/20">
            Complete training automation. Unlock structured PushPass 24 stages,
            time-attack UltraTasks, and deep rep-velocity insights.
          </p>
          <ul className="mt-6 space-y-4 text-xs md:text-sm">
            {PRO_PERKS.map((perk) => (
              <CheckItem key={perk.label} detail={perk.detail}>
                {perk.label}
              </CheckItem>
            ))}
          </ul>

          <div className="mt-6 border-t border-[#151A00]/20 pt-6">
            <ul className="space-y-4 text-xs md:text-sm">
              {FUTURE_PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-[#151A00]">
                  <span aria-hidden className="shrink-0 font-black leading-snug">
                    ✓
                  </span>
                  <span>
                    <span className="font-bold">{perk}</span>
                    <span className="mt-1.5 block w-fit rounded-full bg-[#FF8964] px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                      2026 - Late
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
