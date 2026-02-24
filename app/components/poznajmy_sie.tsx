import React from "react";
import Image from "next/image";

const Poznajmy_sie = () => {
  return (
    <section className="w-full bg-[#f5f2ec] px-6 py-14 md:px-10 lg:px-14 lg:py-20">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:gap-12">

        {/* ── Lewa kolumna ── */}
        <div className="lg:w-[55%] flex flex-col mt-10 lg:mt-0">

          {/* Przycisk CTA */}
          <div>
            <button
              className="rounded-full bg-transparent font-sans text-[14px] text-[#1a1a1a] transition-colors hover:bg-[#1a1a1a] hover:text-white"
              style={{
                border: "1.5px solid #1a1a1a",
                padding: "12px 28px",
              }}
            >
              Poznajmy się →
            </button>
          </div>

          {/* Nagłówek */}
          <h2
            className="font-serif font-bold text-[#1a1a1a] leading-[1.05] mt-14 mb-6"
            style={{ fontSize: "clamp(48px, 6vw, 80px)" }}
          >
            Nazywam się
            <br />
            Aleksandra
          </h2>

          {/* Opis */}
          <p
            className="font-sans text-[#1a1a1a] leading-[1.7]"
            style={{ fontSize: "clamp(14px, 1.2vw, 16px)", maxWidth: "480px" }}
          >
            Jestem właścicielką SIMPLE MEDIA. To dla mnie ważne, że wyróżnia
            nas <strong>kreatywne</strong> podejście zamiast schematów
            &ldquo;kopiuj-wklej&rdquo;. Dbam o to, aby tak{" "}
            <strong>zostało</strong>.
          </p>
        </div>

        {/* ── Prawa kolumna — polaroid ── */}
        <div className="lg:w-[45%] flex justify-center lg:justify-end">
          <div
            className="bg-white shadow-xl"
            style={{
              padding: "16px 16px 52px 16px",
              transform: "rotate(-2deg)",
              maxWidth: "320px",
              width: "100%",
            }}
          >
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <Image
                src="/6.png"
                alt="Aleksandra — właścicielka Simple Media"
                fill
                sizes="(max-width: 1024px) 80vw, 320px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Poznajmy_sie;
