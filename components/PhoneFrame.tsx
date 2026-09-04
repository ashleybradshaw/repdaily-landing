import Image from "next/image";

type PhoneFrameProps = {
  imageSrc: string;
  alt: string;
  priority?: boolean;
  preload?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
};

export default function PhoneFrame({
  imageSrc,
  alt,
  priority = false,
  preload,
  loading,
  fetchPriority,
}: PhoneFrameProps) {
  return (
    <div className="aspect-[9/19.5] w-full shrink-0 rounded-[36px] border-2 border-[#333D05] bg-[#1A1F02] p-[6px] shadow-[0_25px_50px_-12px_rgba(21,26,0,0.4)] sm:rounded-[44px] sm:p-[8px] md:w-[280px]">
      <div className="relative h-full w-full overflow-hidden rounded-[30px] bg-black sm:rounded-[38px]">
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 767px) 240px, 280px"
          className="object-cover"
          preload={preload ?? priority}
          priority={priority}
          loading={loading}
          fetchPriority={fetchPriority}
        />
      </div>
    </div>
  );
}
