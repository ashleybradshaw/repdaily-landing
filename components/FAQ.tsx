import { HelpCircle } from "lucide-react";
import { content } from "@/config/content";

export default function FAQ() {
  const { faq } = content;

  return (
    <section id="support" className="w-full bg-[#F8FFE6] py-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center">
          <HelpCircle
            size={32}
            strokeWidth={2.25}
            className="mb-4 text-[#151A00]"
            aria-hidden
          />
          <h2 className="font-display text-4xl md:text-5xl font-black text-[#151A00] text-center">
            {faq.title}
          </h2>
          <p className="font-sans text-sm md:text-base font-extrabold text-[#151A00]/70 text-center mt-2">
            {faq.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto mt-10">
          {faq.items.map((item) => (
            <article
              key={item.title}
              className="bg-[#F8FFE6] p-8 rounded-3xl border border-[#151A00]/10"
            >
              <span className="inline-flex rounded-lg bg-[#151A00] px-3 py-1 text-xs font-black tracking-wide text-[#C9E800]">
                {item.answer}
              </span>
              <h3 className="mt-4 text-lg font-bold text-[#151A00]">{item.title}</h3>
              <p className="mt-2 text-sm text-[#151A00]/80 leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
