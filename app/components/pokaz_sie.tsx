import React from "react";
import Image from "next/image";

const Pokaz_sie = () => {
  return (
    <section className="bg-white">
      {/* ── Top bar ── */}
      <div className="flex items-center justify-between px-6 pt-6 pb-2 md:px-10 lg:px-14 lg:pt-10">
        {/* Logo sM! */}
        <span
          className="font-sans font-bold leading-none select-none"
          style={{ fontSize: "clamp(28px, 3vw, 42px)", color: "#e8302a" }}
          aria-label="Simple Media logo"
        >
          sM!
        </span>

        {/* Nagłówek H1 na środku */}
        <h1
          className="font-sans font-bold text-[#1a1a1a] text-center leading-[1.05] tracking-tight flex-1 px-4"
          style={{ fontSize: "clamp(36px, 7vw, 96px)" }}
        >
          Pokaż się{" "}
          <svg
            className="inline-block align-middle"
            style={{ width: "clamp(28px, 5vw, 72px)", height: "clamp(14px, 2.5vw, 36px)", marginBottom: "0.1em" }}
            viewBox="0 0 72 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 18H66M66 18L50 4M66 18L50 32"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <br />
          w social media
        </h1>

        {/* Przycisk CTA */}
        <button
          className="flex-shrink-0 rounded-full border border-[#1a1a1a] bg-transparent px-5 py-2.5 font-sans text-sm text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white md:px-7 md:py-3 md:text-base"
          style={{ borderWidth: "1.5px" }}
        >
          Współpracuj z nami
        </button>
      </div>

      {/* ── Galeria zdjęć ── */}
      <div className="px-6 pb-6 pt-4 md:px-10 lg:px-14 lg:pb-10">
        {/* Desktop: 4 kolumny */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {/* Zdjęcie 1 — czarno-białe */}
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/1.png"
              alt="Kobieta pisząca przy świetle"
              width={400}
              height={533}
              className="h-full w-full object-cover grayscale"
            />
          </div>
          {/* Zdjęcie 2 — czerwone kozaki, kolor zachowany */}
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/2.png"
              alt="Czerwone kozaki w ruchu"
              width={400}
              height={533}
              className="h-full w-full object-cover"
            />
          </div>
          {/* Zdjęcie 3 — czarno-białe */}
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/3.png"
              alt="Kobieta przy biurku z książkami"
              width={400}
              height={533}
              className="h-full w-full object-cover grayscale"
            />
          </div>
          {/* Zdjęcie 4 — czarno-białe */}
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/4.png"
              alt="Kobieta z rękami za głową w plenerze"
              width={400}
              height={533}
              className="h-full w-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Mobile: poziomy scroll */}
        <div className="flex sm:hidden gap-2 overflow-x-auto pb-2 snap-x snap-mandatory">
          {[
            { src: "/1.png", alt: "Kobieta pisząca przy świetle", grayscale: true },
            { src: "/2.png", alt: "Czerwone kozaki w ruchu", grayscale: false },
            { src: "/3.png", alt: "Kobieta przy biurku z książkami", grayscale: true },
            { src: "/4.png", alt: "Kobieta z rękami za głową", grayscale: true },
          ].map((img) => (
            <div
              key={img.src}
              className="snap-start flex-shrink-0 overflow-hidden"
              style={{ width: "72vw", aspectRatio: "3/4" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={533}
                className={`h-full w-full object-cover${img.grayscale ? " grayscale" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pokaz_sie;
