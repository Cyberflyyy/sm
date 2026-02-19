import Image from "next/image";

const Projekty_kreatywne = () => {
  return (
    <section className="w-full flex h-[800px] bg-black overflow-hidden">
      {/* ── Lewa strona 40% — czarne tło + biała karta z marginesem ── */}
      <div className="w-[40%] h-full bg-black flex items-stretch p-6 pr-0">
        {/* Biała karta — zaokrąglone wszystkie rogi oprócz prawych dolnych ── */}
        <div className="flex-1 bg-white rounded-3xl flex flex-col justify-between px-12 py-12">
          <button className="w-fit border border-neutral-800 rounded-full px-6 py-2.5 text-sm hover:bg-neutral-800 hover:text-white transition-colors duration-300 cursor-pointer">
            Projekty kreatywne →
          </button>

          <div className="flex flex-col gap-10">
            <h2 className="text-4xl font-serif font-semibold text-neutral-900 leading-snug">
              Chcesz zrealizować spot reklamowy, ulotkę, film krótkometrażowy
              lub projekt innego rodzaju?
            </h2>
            <p className="text-lg text-neutral-500 leading-relaxed">
              Skontaktuj się z nami,
              <br />
              znajdziemy rozwiązanie.
            </p>
          </div>

          <div />
        </div>
      </div>

      {/* ── Prawa strona 60% — zdjęcie wypełnia całość ── */}
      <div className="w-[60%] h-full relative">
        <Image
          src="/14.png"
          alt="Projekty kreatywne"
          fill
          sizes="60vw"
          quality={100}
          className="object-cover object-center"
          priority
        />
      </div>
    </section>
  );
};

export default Projekty_kreatywne;
