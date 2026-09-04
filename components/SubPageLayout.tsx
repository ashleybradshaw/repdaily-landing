import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import { content } from "@/config/content";

type SubPageLayoutProps = {
  children: React.ReactNode;
};

export default function SubPageLayout({ children }: SubPageLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_center,_#F8FFE6_0%,_#C9E800_70%,_#C9E800_100%)] text-[#151A00] selection:bg-[#151A00] selection:text-[#C9E800]">
      <header className="w-full px-6 py-5 md:px-12 md:py-6">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div />
          <Link href="/" className="justify-self-center">
            <Image
              src="/assets/logo-repdaily.svg"
              alt="RepDaily"
              width={240}
              height={30}
              className="h-6 w-auto object-contain sm:h-8"
              priority
            />
          </Link>
          <div className="justify-self-end">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 rounded-[4px] bg-[#151A00] px-3 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[#C9E800] transition-opacity hover:opacity-80 sm:gap-2 sm:px-4 sm:text-xs"
            >
              <ArrowLeft size={14} strokeWidth={2.5} aria-hidden />
              {content.chrome.backToHomepage}
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-16 font-sans w-full flex-1">
        {children}
      </main>

      <Footer />
    </div>
  );
}
