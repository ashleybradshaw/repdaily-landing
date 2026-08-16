export default function VideoShowcase() {
  return (
    <section className="w-full bg-[#F8FFE6] pb-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7">
            <div className="h-[420px] bg-[#1E2403]/10 border-2 border-dashed border-[#151A00]/20 rounded-[4px] flex items-center justify-center p-8">
              <p className="text-2xl font-bold tracking-widest text-red-500/80">
                VIDEO PLACE HOLDER
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="h-[200px] bg-[#1E2403]/10 border-2 border-dashed border-[#151A00]/20 rounded-[4px] flex items-center justify-center p-6">
              <p className="text-xl font-bold tracking-widest text-red-500/80">
                VIDEO PLACE HOLDER
              </p>
            </div>
            <div className="h-[200px] bg-[#1E2403]/10 border-2 border-dashed border-[#151A00]/20 rounded-[4px] flex items-center justify-center p-6">
              <p className="text-xl font-bold tracking-widest text-red-500/80">
                VIDEO PLACE HOLDER
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
