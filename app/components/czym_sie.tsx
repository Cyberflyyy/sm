"use client";

import React, { useRef, useEffect } from "react";

const services = [
  { title: "Prowadzenie social media" },
  { title: "Tworzenie rolek" },
  { title: "Identyfikacja wizualna" },
  { title: "Projekty kreatywne" },
  { title: "Strategia działania" },
  { title: "Poznajmy się" },
];

const Czym_sie = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-[#f5f2ec] px-6 py-12 md:px-10 lg:px-14 lg:py-16">
      <div className="flex flex-col lg:flex-row lg:items-stretch lg:gap-12">

        {/* ── Lewa kolumna ── */}
        <div className="flex flex-col lg:w-[58%]">
          {/* Nagłówek */}
          <h2 className="font-serif text-[clamp(36px,5.5vw,72px)] font-bold text-[#1a1a1a] leading-[1.05] mb-3">
            Czym się zajmujemy?
          </h2>
          <p className="font-sans text-base text-[#e8302a] mb-10 lg:mb-14">
            Naszą ofertę dopasowujemy do Twoich potrzeb.
          </p>

          {/* Siatka przycisków 2×3 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto">
            {services.map((service) => (
              <button
                key={service.title}
                className="flex items-center justify-between rounded-full border border-[#1a1a1a] bg-transparent px-7 py-3.5 font-sans text-[15px] text-[#1a1a1a] text-left transition-colors hover:bg-[#1a1a1a] hover:text-white"
                style={{ borderWidth: "1.5px", minWidth: "240px" }}
              >
                <span>{service.title}</span>
                <span className="ml-3">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Prawa kolumna — wideo ── */}
        <div
          className="mt-10 lg:mt-0 lg:w-[42%] overflow-hidden"
          style={{ maxHeight: "560px", aspectRatio: "3/4" }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
            aria-label="Kobieta pracująca na laptopie"
          >
            <source src="/5.mp4" type="video/mp4" />
          </video>
        </div>

      </div>
    </section>
  );
};

export default Czym_sie;
