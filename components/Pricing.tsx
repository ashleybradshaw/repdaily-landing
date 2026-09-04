import Image from "next/image";
import { content } from "@/config/content";

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
  const { pricing } = content;

  return (
    <section id="plans" className="w-full bg-[#F8FFE6] py-24">
      <h2 className="font-display text-4xl md:text-5xl font-black text-[#151A00] text-center">
        {pricing.title}
      </h2>
      <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
        {pricing.subtitle}
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
            {pricing.free.title}
          </h3>
          <p className="font-sans text-xs md:text-sm font-bold text-[#151A00] mt-1">
            {pricing.free.tagline}
          </p>
          <p className="font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-3 pb-6 border-b border-[#151A00]/20">
            {pricing.free.body}
          </p>
          <ul className="mt-6 space-y-4 text-xs md:text-sm">
            {pricing.free.perks.map((perk) => (
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
            {pricing.paid.title}
          </h3>
          <p className="font-sans text-xs md:text-sm font-bold text-[#151A00] mt-1">
            {pricing.paid.tagline}
          </p>
          <p className="font-sans text-xs md:text-sm font-medium text-[#151A00]/80 leading-relaxed mt-3 pb-6 border-b border-[#151A00]/20">
            {pricing.paid.body}
          </p>
          <ul className="mt-6 space-y-4 text-xs md:text-sm">
            {pricing.paid.perks.map((perk) => (
              <CheckItem
                key={perk.label}
                detail={"detail" in perk ? perk.detail : undefined}
              >
                {perk.label}
              </CheckItem>
            ))}
          </ul>

          <div className="mt-6 border-t border-[#151A00]/20 pt-6">
            <ul className="space-y-4 text-xs md:text-sm">
              {pricing.paid.futurePerks.map((perk) => (
                <li key={perk} className="flex items-start gap-2 text-[#151A00]">
                  <span aria-hidden className="shrink-0 font-black leading-snug">
                    ✓
                  </span>
                  <span>
                    <span className="font-bold">{perk}</span>
                    <span className="mt-1.5 block w-fit rounded-full bg-[#FF8964] px-2.5 py-0.5 text-[10px] font-extrabold text-white">
                      {pricing.futureBadge}
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
