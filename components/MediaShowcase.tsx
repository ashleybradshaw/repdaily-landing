import Image from "next/image";

const GRID_PHOTOS = [
  { src: "/assets/grid-photos/photo-1.webp", alt: "Athlete training on the floor" },
  { src: "/assets/grid-photos/photo-2.webp", alt: "Push-up session in progress" },
  { src: "/assets/grid-photos/photo-3.webp", alt: "RepDaily training environment" },
  { src: "/assets/grid-photos/photo-4.webp", alt: "Focused push-up form" },
  { src: "/assets/grid-photos/photo-5.webp", alt: "Daily training moment" },
  { src: "/assets/grid-photos/photo-6.webp", alt: "Athletes showing up to train" },
] as const;

export default function MediaShowcase() {
  return (
    <section className="w-full bg-[#C9E800] pb-16">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <p className="tracking-[0.2em] font-extrabold text-xs text-[#151A00] mb-6 text-center">
          TRACK EVERY REP AUTOMATICALLY.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 max-w-[1280px] mx-auto">
          {GRID_PHOTOS.map((photo) => (
            <Image
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              width={414}
              height={464}
              className="rounded-[4px] h-48 w-full object-cover contrast-125 saturate-50"
            />
          ))}
        </div>

        <div className="rounded-[4px] overflow-hidden relative max-w-[1280px] mx-auto mt-6 min-h-[22rem] sm:min-h-[28rem]">
          <Image
            src="/assets/banner-showup.webp"
            alt=""
            fill
            sizes="1280px"
            className="object-cover object-center"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#151A00]/90 to-transparent"
            aria-hidden
          />
          <div className="relative z-10 flex min-h-[22rem] flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[28rem]">
            <h2 className="text-4xl md:text-6xl font-black text-[#C9E800]">
              SHOW UP. PUSH UP.
            </h2>
            <p className="text-xs md:text-sm tracking-wider font-extrabold text-white mt-2 max-w-3xl">
              SOMETIMES, YOU JUST WANT TO KEEP GOING. REPDAILY TURNS RAW EFFORT
              INTO TRACKED PROGRESS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
