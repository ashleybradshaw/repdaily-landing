"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

type AnimatedCTAProps = {
  href: string;
  text?: string;
  onClick?: () => void;
  className?: string;
};

const perimeterLoop = {
  top: ["0%", "0%", "100%", "100%", "0%"],
  left: ["0%", "100%", "100%", "0%", "0%"],
};

export default function AnimatedCTA({
  href,
  text = "Begin today",
  onClick,
  className = "",
}: AnimatedCTAProps) {
  const reduceMotion = useReducedMotion();
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      onClick={onClick}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group relative inline-flex overflow-hidden rounded-[10px] bg-[#151A00] shadow-[0_15px_30px_-8px_rgba(21,26,0,0.5)] transition-all duration-300 hover:shadow-[0_20px_40px_-5px_rgba(21,26,0,0.7)] active:scale-95 ${className}`}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,#C9E800_0%,rgba(201,232,0,0)_72%)] blur-sm"
        initial={{ top: "0%", left: "0%" }}
        animate={reduceMotion ? { top: "0%", left: "50%" } : perimeterLoop}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.35, 0.5, 0.85, 1],
        }}
      />
      <span className="relative z-10 inline-flex items-center justify-center px-8 py-3.5 font-sans text-sm font-extrabold tracking-wider uppercase text-[#C9E800]">
        {text}
      </span>
    </Link>
  );
}
