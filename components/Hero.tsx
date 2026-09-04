"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedCTA from "@/components/AnimatedCTA";
import PhoneFrame from "@/components/PhoneFrame";

export default function Hero() {
  const [deviceTarget, setDeviceTarget] = useState<string>("#plans");
  const centerPhoneRef = useRef<HTMLDivElement>(null);
  const phoneScrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      setDeviceTarget("https://apps.apple.com");
    } else if (/android/i.test(userAgent)) {
      setDeviceTarget("https://play.google.com");
    } else {
      setDeviceTarget("#plans");
    }
  }, []);

  useEffect(() => {
    const scroller = phoneScrollerRef.current;
    const center = centerPhoneRef.current;
    if (!scroller || !center) return;
    if (window.matchMedia("(min-width: 768px)").matches) return;

    const left = center.offsetLeft - (scroller.clientWidth - center.offsetWidth) / 2;
    scroller.scrollTo({ left, behavior: "auto" });
  }, []);
  return (
    <section className="relative w-full bg-[radial-gradient(ellipse_at_center,_#F8FFE6_0%,_#C9E800_70%,_#C9E800_100%)] pt-28 pb-20 px-6 overflow-x-clip overflow-y-visible">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Position 1: Logo Wordmark */}
        <div className="flex w-full items-center justify-center">
          <Image
            src="/assets/logo-repdaily.svg"
            alt="RepDaily Wordmark Logo"
            width={480}
            height={60}
            className="h-8 sm:h-10 md:h-12 w-auto max-w-[90%] object-contain"
            priority
          />
        </div>

        {/* Position 2: Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-[72px] font-black tracking-tight text-[#151A00] leading-[1.05] sm:leading-none whitespace-normal sm:whitespace-nowrap text-center mt-4 mb-6">
          Push-Ups. Done Daily.
        </h1>

        {/* Position 3: Pill Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#151A00]/20 bg-[#151A00] p-1.5 pr-5 text-[#C9E800] shadow-lg">
          <span className="rounded-full bg-[#C9E800] px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#151A00]">
            NEW
          </span>
          <span className="text-xs font-bold tracking-wide text-white">
            Meet RepDaily 1.5 • PUBLIC BETA
          </span>
        </div>

        {/* Position 4: Primary CTA */}
        <div className="mt-8 mb-12">
          <AnimatedCTA href={deviceTarget} text="Begin today" />
        </div>

        {/* Copy Block Section */}
        <div className="max-w-[780px] mx-auto space-y-4 text-[#151A00]">
          <p className="text-sm md:text-base font-black tracking-wider uppercase">
            SMARTER PUSH-UP TRAINING.
          </p>
          <p className="text-sm md:text-base font-medium leading-relaxed text-[#151A00]/80">
            Set your phone down, hit the deck, and let computer vision track every clean rep.
            No manual logs, no broken counters, just pure daily output tuned to your strength.
          </p>
          <p className="text-sm md:text-base font-medium leading-relaxed text-[#151A00]/80">
            Whether you&apos;re dropping in for a quick 10-rep streak or taking on structured PushPass 24 stages, RepDaily keeps you consistent without the friction.
          </p>
        </div>

        {/* App Store & Google Play SVG Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="inline-block hover:scale-105 transition-transform"
          >
            <Image
              src="/assets/google-store-logo.svg"
              alt="Get it on Google Play"
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </a>

          <a
            href="#"
            className="inline-block hover:scale-105 transition-transform"
          >
            <Image
              src="/assets/apple-store-logo.svg"
              alt="Download on the App Store"
              width={160}
              height={48}
              className="h-12 w-auto"
            />
          </a>
        </div>

        {/* Phone Showcase */}
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

          <div
            ref={phoneScrollerRef}
            className="relative z-10 -mx-6 flex w-[calc(100%+3rem)] items-center gap-4 overflow-x-auto overflow-y-visible snap-x snap-mandatory px-6 py-8 no-scrollbar md:mx-auto md:w-auto md:flex md:items-center md:justify-center md:gap-6 md:overflow-visible"
          >
            <div className="snap-center shrink-0 w-[240px] sm:w-[260px] md:w-auto drop-shadow-[0_20px_35px_rgba(21,26,0,0.35)]">
              <PhoneFrame
                imageSrc="/assets/screens/screen-left.png"
                alt="Strength Test Screen"
                priority
              />
            </div>
            <div
              ref={centerPhoneRef}
              className="snap-center shrink-0 w-[240px] sm:w-[260px] md:w-auto drop-shadow-[0_20px_35px_rgba(21,26,0,0.35)]"
            >
              <PhoneFrame
                imageSrc="/assets/screens/screen-center.png"
                alt="Dashboard Screen"
                priority
              />
            </div>
            <div className="snap-center shrink-0 w-[240px] sm:w-[260px] md:w-auto drop-shadow-[0_20px_35px_rgba(21,26,0,0.35)]">
              <PhoneFrame
                imageSrc="/assets/screens/screen-right.png"
                alt="PushPass 24 Screen"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
