"use client";

const missionText =
  "Building the next generation of young tech innovators to create a powerful network in the longevity industry.";

export function MissionMarquee() {
  // Repeat the text enough times to fill the marquee seamlessly
  const repeats = 6;

  return (
    <section className="w-full overflow-hidden border-t border-white/5 bg-black/60 py-5 select-none">
      <div className="mission-marquee-track flex whitespace-nowrap">
        {Array.from({ length: repeats }).map((_, i) => (
          <span key={i} className="inline-flex items-center shrink-0 px-8">
            <span className="text-lg md:text-2xl font-bold tracking-wide">
              <span className="text-orange-400">MISSION:</span>{" "}
              <span className="text-white/90">{missionText}</span>
            </span>
            <span className="mx-8 text-orange-400/60 text-xl">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}
