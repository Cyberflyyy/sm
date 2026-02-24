import Image from "next/image";

const IdentyfikacjaWizualna = () => {
  return (
    <section className="w-full bg-[#f0ebe0]">
      <div className="w-full flex min-h-[860px] px-10 py-12 gap-8">

        {/* ── Lewa strona ── */}
        <div className="w-[45%] flex flex-col justify-between py-4">
          {/* Przycisk u góry */}
          <div>
            <button className="w-fit border border-neutral-800 rounded-full px-6 py-2.5 text-sm hover:bg-neutral-800 hover:text-white transition-colors duration-300 cursor-pointer font-sans">
              Identyfikacja wizualna →
            </button>
          </div>

          {/* Punkty 01 i 02 na środku/dole */}
          <div className="flex flex-col gap-14 mt-16">
            <div className="flex items-start gap-5">
              <span className="text-5xl font-light text-neutral-300 min-w-[4.5rem] leading-none">
                01
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-neutral-900 leading-snug">
                  Piękno budzi radość
                </h3>
                <p className="text-base text-neutral-500 leading-relaxed">
                  Dbałość o spójną estetykę, plan i znajomość celu pozwala
                  osiągnąć oczekiwany wygląd strony social media, a to podstawa
                  budowania sympatii wśród użytkowników.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <span className="text-5xl font-light text-neutral-300 min-w-[4.5rem] leading-none">
                02
              </span>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-semibold text-neutral-900 leading-snug">
                  Trudne pytania, łatwe odpowiedzi
                </h3>
                <p className="text-base text-neutral-500 leading-relaxed">
                  Na podstawie analizy rynku, konkurencji, historii marki oraz
                  preferencji klienta możemy udzielić odpowiedzi w jaki sposób
                  wprowadzić i utrzymać koncepcje wizualną marki.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Prawa strona — siatka zdjęć ── */}
        <div className="w-[55%] flex flex-col gap-4">

          {/* Górny rząd: duże lewe + małe prawe, wyrównane do dołu */}
          <div className="flex gap-4 items-end">
            {/* Zdjęcie 8 — duże, lewa kolumna */}
            <div
              className="relative overflow-hidden group cursor-pointer shadow-sm"
              style={{ width: "52%", height: "380px" }}
            >
              <Image
                src="/8.png"
                alt="TikTok restauracje"
                fill
                sizes="25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-8 left-4 right-4 text-white text-sm font-bold leading-snug">
                na tiktoku testuję restauracje i dzielę się swoim życiem
              </p>
              <span className="absolute bottom-3 left-4 text-white text-sm">→</span>
            </div>

            {/* Zdjęcie 9 — mniejsze, prawa kolumna, wyżej (krótsze) */}
            <div
              className="relative overflow-hidden group cursor-pointer shadow-sm"
              style={{ width: "48%", height: "300px" }}
            >
              <Image
                src="/9.png"
                alt="Aleksandra"
                fill
                sizes="22vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold leading-snug">
                mam na imię Aleksandra
              </p>
            </div>
          </div>

          {/* Dolny rząd: zdjęcie 10 po prawej stronie */}
          <div className="flex justify-end">
            <div
              className="relative overflow-hidden group cursor-pointer shadow-sm"
              style={{ width: "64%", height: "280px" }}
            >
              <Image
                src="/10.png"
                alt="Mural Białystok"
                fill
                sizes="28vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold leading-snug">
                kocham murale, odkąd nauczycielka w liceum kazała mi zrobić
                prezentacje o wszystkich w Białymstoku, aby zdać
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IdentyfikacjaWizualna;
