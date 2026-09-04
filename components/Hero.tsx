import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import { content } from "@/config/content";

export default function Hero() {
  const { hero } = content;
  const [leftPhone, centerPhone, rightPhone] = hero.phones;

  return (
    <section className="relative w-full bg-[radial-gradient(ellipse_at_center,_#F8FFE6_0%,_#C9E800_70%,_#C9E800_100%)] pt-28 pb-20 px-6 overflow-x-clip overflow-y-visible">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Position 1: Logo Wordmark */}
        <div className="flex w-full items-center justify-center">
          <Image
            src="/assets/logo-repdaily.svg"
            alt={hero.logoAlt}
            width={480}
            height={60}
            className="h-8 sm:h-10 md:h-12 w-auto max-w-[90%] object-contain"
            priority
          />
        </div>

        {/* Position 2: Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-[72px] font-black tracking-tight text-[#151A00] leading-[1.05] sm:leading-none whitespace-normal sm:whitespace-nowrap text-center mt-4 mb-6">
          {hero.headline}
        </h1>

        {/* Position 3: Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#151A00]/20 bg-[#151A00] p-1.5 pr-5 text-[#C9E800] shadow-lg">
          <span className="rounded-full bg-[#C9E800] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#151A00]">
            {hero.pillLabel}
          </span>
          <span className="text-xs font-bold tracking-wide text-white">
            {hero.pillText}
          </span>
        </div>

        {/* Copy Block Section */}
        <div className="max-w-[780px] mx-auto mt-8 space-y-4 text-[#151A00]">
          <p className="text-sm md:text-base font-black tracking-wider uppercase">
            {hero.kicker}
          </p>
          {hero.body.map((paragraph) => (
            <p
              key={paragraph}
              className="text-sm md:text-base font-medium leading-relaxed text-[#151A00]/80"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* App Store & Google Play SVG Badges */}
        <div
          id="download"
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={hero.playStore.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform"
          >
            <Image
              src="/assets/google-store-logo.svg"
              alt={hero.playStore.alt}
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </a>

          <a
            href={hero.appStore.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:scale-105 transition-transform"
          >
            <Image
              src="/assets/apple-store-logo.svg"
              alt={hero.appStore.alt}
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Phone Showcase — CSS scroll-snap + justify-center (no layout reads) */}
        <div className="relative mx-auto mt-12 w-full max-w-[1000px]">
          {/* Mobile: single centered wave behind phones */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden md:hidden"
          >
            <Image
              src="/assets/soundwave-bg.svg"
              alt=""
              width={415}
              height={365}
              className="h-auto w-[88%] max-w-[420px] object-contain opacity-80"
            />
          </div>

          {/* Desktop: dual flanking waves */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-0 hidden w-[38%] max-w-[380px] items-center overflow-hidden md:flex"
          >
            <Image
              src="/assets/soundwave-bg.svg"
              alt=""
              width={415}
              height={365}
              className="h-auto w-full object-contain object-left opacity-80"
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[38%] max-w-[380px] items-center justify-end overflow-hidden md:flex"
          >
            <Image
              src="/assets/soundwave-bg.svg"
              alt=""
              width={415}
              height={365}
              className="-scale-x-100 h-auto w-full object-contain object-right opacity-80"
            />
          </div>

          <div className="relative z-10 -mx-6 flex w-[calc(100%+3rem)] items-center justify-center gap-4 overflow-x-auto overflow-y-visible overscroll-x-contain snap-x snap-mandatory px-6 py-8 no-scrollbar md:mx-auto md:w-auto md:gap-6 md:overflow-visible">
            <div className="snap-center shrink-0 w-[240px] sm:w-[260px] md:w-auto drop-shadow-[0_20px_35px_rgba(21,26,0,0.35)]">
              <PhoneFrame imageSrc={leftPhone.src} alt={leftPhone.alt} />
            </div>
            <div className="snap-center shrink-0 w-[240px] sm:w-[260px] md:w-auto drop-shadow-[0_20px_35px_rgba(21,26,0,0.35)]">
              <PhoneFrame
                imageSrc={centerPhone.src}
                alt={centerPhone.alt}
                priority={true}
                loading="eager"
                fetchPriority="high"
              />
            </div>
            <div className="snap-center shrink-0 w-[240px] sm:w-[260px] md:w-auto drop-shadow-[0_20px_35px_rgba(21,26,0,0.35)]">
              <PhoneFrame imageSrc={rightPhone.src} alt={rightPhone.alt} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
