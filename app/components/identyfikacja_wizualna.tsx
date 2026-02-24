import Image from "next/image";

const IdentyfikacjaWizualna = () => {
  return (
    <section className="w-full bg-[#f0ebe0]">
      {/* Desktop layout */}
      <div className="hidden lg:flex w-full min-h-[820px] px-12 py-14 gap-10">

        {/* ── Lewa strona ── */}
        <div className="w-[44%] flex flex-col py-2">
          {/* Przycisk u góry — duży, szeroka pigułka */}
          <button className="w-fit border-2 border-neutral-800 rounded-full px-10 py-4 text-base hover:bg-neutral-800 hover:text-white transition-colors duration-300 cursor-pointer font-sans tracking-wide">
            Identyfikacja wizualna →
          </button>

          {/* Punkty 01 i 02 — wyśrodkowane pionowo */}
          <div className="flex flex-col gap-16 mt-auto mb-auto pt-16">
            <div className="flex items-start gap-6">
              <span className="text-6xl font-light text-neutral-300 min-w-[5rem] leading-none">
                01
              </span>
              <div className="flex flex-col gap-3">
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

            <div className="flex items-start gap-6">
              <span className="text-6xl font-light text-neutral-300 min-w-[5rem] leading-none">
                02
              </span>
              <div className="flex flex-col gap-3">
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
        <div className="w-[56%] flex flex-col gap-4">

          {/* Górny rząd: duże lewe (niżej) + mniejsze prawe (wyżej) */}
          <div className="flex gap-4 items-end">
            {/* Zdjęcie 8 — duże, wyrównane do dołu */}
            <div
              className="relative overflow-hidden group cursor-pointer shadow-sm flex-shrink-0"
              style={{ width: "50%", height: "390px" }}
            >
              <Image
                src="/8.png"
                alt="TikTok restauracje"
                fill
                sizes="28vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-8 left-4 right-4 text-white text-sm font-bold leading-snug">
                na tiktoku testuję restauracje i dzielę się swoim życiem
              </p>
              <span className="absolute bottom-3 left-4 text-white text-sm">→</span>
            </div>

            {/* Zdjęcie 9 — mniejsze, wyrównane do dołu (krótsze = wyżej startuje) */}
            <div
              className="relative overflow-hidden group cursor-pointer shadow-sm flex-shrink-0"
              style={{ width: "50%", height: "310px" }}
            >
              <Image
                src="/9.png"
                alt="Aleksandra"
                fill
                sizes="28vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-5 left-4 right-4 text-white text-base font-bold leading-snug">
                mam na imię Aleksandra
              </p>
            </div>
          </div>

          {/* Dolny rząd: zdjęcie 10 wyrównane do lewej krawędzi prawej kolumny
              (zaczyna się pod zdjęciem 9, wypełnia szerokość kolumny) */}
          <div className="flex justify-end">
            <div
              className="relative overflow-hidden group cursor-pointer shadow-sm"
              style={{ width: "50%", height: "290px" }}
            >
              <Image
                src="/10.png"
                alt="Mural Białystok"
                fill
                sizes="28vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-5 left-4 right-4 text-white text-sm font-bold leading-snug">
                kocham murale, odkąd nauczycielka w liceum kazała mi zrobić
                prezentacje o wszystkich w Białymstoku, aby zdać
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile / tablet layout */}
      <div className="flex flex-col lg:hidden px-6 py-10 gap-10">

        {/* Przycisk */}
        <button className="w-fit border-2 border-neutral-800 rounded-full px-8 py-3 text-base hover:bg-neutral-800 hover:text-white transition-colors duration-300 cursor-pointer font-sans tracking-wide">
          Identyfikacja wizualna →
        </button>

        {/* Zdjęcia — dwa w rzędzie, trzecie pod spodem */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="relative overflow-hidden flex-1 shadow-sm" style={{ height: "260px" }}>
              <Image src="/8.png" alt="TikTok restauracje" fill sizes="50vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold leading-snug">
                na tiktoku testuję restauracje i dzielę się swoim życiem
              </p>
            </div>
            <div className="relative overflow-hidden flex-1 shadow-sm" style={{ height: "220px", alignSelf: "flex-end" }}>
              <Image src="/9.png" alt="Aleksandra" fill sizes="50vw" className="object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold leading-snug">
                mam na imię Aleksandra
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden w-full shadow-sm" style={{ height: "220px" }}>
            <Image src="/10.png" alt="Mural Białystok" fill sizes="100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-bold leading-snug">
              kocham murale, odkąd nauczycielka w liceum kazała mi zrobić prezentacje o wszystkich w Białymstoku, aby zdać
            </p>
          </div>
        </div>

        {/* Tekst 01 i 02 */}
        <div className="flex flex-col gap-10">
          <div className="flex items-start gap-4">
            <span className="text-5xl font-light text-neutral-300 min-w-[4rem] leading-none">01</span>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-neutral-900">Piękno budzi radość</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Dbałość o spójną estetykę, plan i znajomość celu pozwala osiągnąć oczekiwany wygląd strony social media, a to podstawa budowania sympatii wśród użytkowników.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-5xl font-light text-neutral-300 min-w-[4rem] leading-none">02</span>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-semibold text-neutral-900">Trudne pytania, łatwe odpowiedzi</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">
                Na podstawie analizy rynku, konkurencji, historii marki oraz preferencji klienta możemy udzielić odpowiedzi w jaki sposób wprowadzić i utrzymać koncepcje wizualną marki.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentyfikacjaWizualna;
