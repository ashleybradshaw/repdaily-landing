import Image from "next/image";
import Link from "next/link";

const linkClassName = "hover:text-[#151A00] transition-colors";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F8FFE6] py-8 px-8 border-t border-[#151A00]/10">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 text-center text-sm text-[#151A00]/70 md:flex-row md:text-left">
        <div className="flex items-center gap-3 text-[#151A00]">
          <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-[4px] md:h-10 md:w-10">
            <Image
              src="/assets/logo-icon-repdaily.svg"
              alt="RepDaily"
              width={40}
              height={40}
              className="h-full w-full object-contain"
            />
          </div>
          <span>© 2026 - RepDaily Tech</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <a href="mailto:tech@todo.engineering" className={linkClassName}>
            tech@todo.engineering
          </a>
          <span aria-hidden>·</span>
          <Link href="/privacy" className={linkClassName}>
            Privacy Policy
          </Link>
          <span aria-hidden>·</span>
          <Link href="/terms" className={linkClassName}>
            Terms of Use
          </Link>
          <span aria-hidden>·</span>
          <Link href="/support" className={linkClassName}>
            Support & Account Deletion
          </Link>
        </div>

        <a
          href="https://todo.engineering"
          target="_blank"
          rel="noopener noreferrer"
          className={`${linkClassName} font-medium`}
        >
          A product by TODO: Engineering
        </a>
      </div>
    </footer>
  );
}
