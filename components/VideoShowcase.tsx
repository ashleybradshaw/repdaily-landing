"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { content } from "@/config/content";

export default function VideoShowcase() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const video3Ref = useRef<HTMLVideoElement>(null);
  const [primary, freeRep, speed] = content.videoShowcase.cards;

  useEffect(() => {
    const videos = [video1Ref.current, video2Ref.current, video3Ref.current];

    videos.forEach((video) => {
      if (video) video.muted = true;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            void video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.35 }
    );

    videos.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#F8FFE6] pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="h-[420px]">
              <div className="relative w-full h-full overflow-hidden rounded-[4px] bg-[#151A00]">
                <video
                  ref={video1Ref}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-[4px]"
                >
                  <source
                    src="/video/repdaily-video-actor-a-session-over-1.mp4"
                    type="video/mp4"
                  />
                  {content.videoShowcase.unsupported}
                </video>
                <div className="absolute inset-0 bg-[#C9E800]/25 mix-blend-multiply pointer-events-none z-10 rounded-[4px]" />
                <div
                  className="absolute inset-0 z-20 rounded-[4px] bg-gradient-to-t from-[#151A00]/85 to-transparent pointer-events-none"
                  aria-hidden
                />
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-x-0 bottom-0 z-30 p-6 sm:p-8"
                >
                  <span className="bg-[#C9E800] text-[#151A00] text-[10px] font-black px-2.5 py-0.5 rounded-[4px] uppercase tracking-wider inline-block mb-2">
                    {primary.badge}
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-black text-white tracking-tight">
                    {primary.title}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm font-semibold text-[#F8FFE6]/80 mt-1 max-w-[420px]">
                    {primary.body}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="h-[200px]">
              <div className="relative w-full h-full overflow-hidden rounded-[4px] bg-[#151A00]">
                <video
                  ref={video2Ref}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-[4px]"
                >
                  <source
                    src="/video/repdaily-video-actor-a-session-over-2.mp4"
                    type="video/mp4"
                  />
                  {content.videoShowcase.unsupported}
                </video>
                <div className="absolute inset-0 bg-[#C9E800]/25 mix-blend-multiply pointer-events-none z-10 rounded-[4px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151A00]/85 via-[#151A00]/20 to-transparent z-20 pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 right-4 z-30 pointer-events-none"
                >
                  <span className="bg-[#C9E800] text-[#151A00] text-[9px] font-black px-2 py-0.5 rounded-[4px] uppercase tracking-wider inline-block mb-1.5">
                    {freeRep.badge}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-black text-white tracking-tight leading-snug">
                    {freeRep.title}
                  </h3>
                </motion.div>
              </div>
            </div>
            <div className="h-[200px]">
              <div className="relative w-full h-full overflow-hidden rounded-[4px] bg-[#151A00]">
                <video
                  ref={video3Ref}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover rounded-[4px]"
                >
                  <source
                    src="/video/repdaily-video-actor-a-session-over-3.mp4"
                    type="video/mp4"
                  />
                  {content.videoShowcase.unsupported}
                </video>
                <div className="absolute inset-0 bg-[#C9E800]/25 mix-blend-multiply pointer-events-none z-10 rounded-[4px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151A00]/85 via-[#151A00]/20 to-transparent z-20 pointer-events-none" />
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="absolute bottom-4 left-4 right-4 z-30 pointer-events-none"
                >
                  <span className="bg-[#C9E800] text-[#151A00] text-[9px] font-black px-2 py-0.5 rounded-[4px] uppercase tracking-wider inline-block mb-1.5">
                    {speed.badge}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-black text-white tracking-tight leading-snug block">
                    {speed.title}
                  </h3>
                  <p className="font-sans text-xs font-semibold text-[#F8FFE6]/80 block mt-0.5">
                    {speed.body}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
