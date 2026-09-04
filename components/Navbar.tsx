"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import AnimatedCTA from "@/components/AnimatedCTA";
import { content } from "@/config/content";

function scrollToSelector(selector: string) {
  window.setTimeout(() => {
    document.querySelector(selector)?.scrollIntoView({ behavior: "smooth" });
  }, 50);
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { navbar } = content;

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const closeThenScroll = (hash: string) => {
    closeMobileMenu();
    scrollToSelector(hash);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#C9E800]/85 backdrop-blur-md border-b border-[#151A00]/10 transition-all">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        
        {/* Left: App Icon Logo */}
        <Link
          href="/"
          aria-label={navbar.logoAlt}
          className="flex items-center gap-2 group"
          onClick={(event) => {
            if (pathname === "/") {
              event.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
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
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden text-[#151A00] p-2 focus:outline-none"
          aria-label={navbar.menuToggle}
          aria-expanded={mobileMenuOpen}
        >
          <Menu size={28} />
        </button>
      </div>

      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 z-50 h-screen w-screen bg-[#C9E800] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <div className="flex h-full min-h-screen flex-col justify-between p-6 sm:p-8">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                aria-label={navbar.logoAlt}
                className="flex items-center gap-2 group"
                onClick={(event) => {
                  closeMobileMenu();
                  if (pathname === "/") {
                    event.preventDefault();
                    window.setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }, 50);
                  }
                }}
              >
                <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[4px]">
                  <Image
                    src="/assets/logo-icon-repdaily.svg"
                    alt={navbar.logoAlt}
                    width={40}
                    height={40}
                    className="h-full w-full object-contain"
                  />
                </div>
              </Link>
              <button
                type="button"
                onClick={closeMobileMenu}
                className="text-[#151A00] p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col items-center gap-6">
              {navbar.links.map((link) => {
                const isExternal = "external" in link;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={(event) => {
                      if (isExternal) {
                        closeMobileMenu();
                        return;
                      }
                      if (link.href.startsWith("#")) {
                        event.preventDefault();
                        closeThenScroll(link.href);
                      } else {
                        closeMobileMenu();
                      }
                    }}
                    className="text-xl font-extrabold tracking-widest text-[#151A00] hover:opacity-70 transition-opacity"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex w-full items-center justify-center pb-4">
              <AnimatedCTA
                href="#download"
                text={navbar.cta}
                onClick={() => closeThenScroll("#download")}
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
