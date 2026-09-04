"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import AnimatedCTA from "@/components/AnimatedCTA";
import { content } from "@/config/content";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { navbar } = content;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#C9E800]/85 backdrop-blur-md border-b border-[#151A00]/10 transition-all">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Left: App Icon Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[4px] md:h-10 md:w-10">
            <Image
              src="/assets/logo-icon-repdaily.svg"
              alt={navbar.logoAlt}
              width={40}
              height={40}
              className="h-full w-full object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navbar.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={"external" in link ? "_blank" : undefined}
              rel={"external" in link ? "noopener noreferrer" : undefined}
              className="text-xs font-extrabold tracking-widest text-[#151A00] hover:opacity-70 transition-opacity"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Smart CTA Button */}
        <div className="hidden md:flex items-center">
          <AnimatedCTA href={navbar.ctaHref} text={navbar.cta} />
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#151A00] p-2 focus:outline-none"
          aria-label={navbar.menuToggle}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#C9E800] border-b border-[#151A00]/10 px-6 py-6 flex flex-col gap-5 shadow-xl">
          {navbar.links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={"external" in link ? "_blank" : undefined}
              rel={"external" in link ? "noopener noreferrer" : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-extrabold tracking-widest text-[#151A00] py-1 border-b border-[#151A00]/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="w-full flex items-center justify-center text-center mx-auto mt-6">
            <AnimatedCTA
              href={navbar.ctaHref}
              text={navbar.cta}
              onClick={() => setMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
