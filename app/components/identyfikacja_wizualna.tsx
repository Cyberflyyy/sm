import Image from "next/image";

const IdentyfikacjaWizualna = () => {
  return (
    <section className="w-full bg-[#f0ebe0]">
      <div className="w-full flex min-h-[900px]">
        {/* ── Lewa strona — 50% ── */}
        <div className="w-1/2 flex flex-col px-16 py-16 gap-16">
          <button className="w-fit border border-neutral-800 rounded-full px-6 py-2.5 text-sm hover:bg-neutral-800 hover:text-white transition-colors duration-300 cursor-pointer">
            Identyfikacja wizualna →
          </button>

          <div className="flex flex-col gap-16">
            <div className="flex items-start gap-6">
              <span className="text-6xl font-light text-neutral-300 min-w-[5rem] leading-none">
                01
              </span>
              <div className="flex flex-col gap-3">
                <h3 className="text-3xl font-semibold text-neutral-900">
                  Piękno budzi radość
                </h3>
                <p className="text-lg text-neutral-500 leading-relaxed">
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
                <h3 className="text-3xl font-semibold text-neutral-900">
                  Trudne pytania, łatwe odpowiedzi
                </h3>
                <p className="text-lg text-neutral-500 leading-relaxed">
                  Na podstawie analizy rynku, konkurencji, historii marki oraz
                  preferencji klienta możemy udzielić odpowiedzi w jaki sposób
                  wprowadzić i utrzymać koncepcje wizualną marki.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Prawa strona — 50%, flex column ── */}
        <div className="w-1/2 flex flex-col gap-3 py-10 px-8">
          {/* Górny rząd — dwa zdjęcia obok siebie ze staggerem */}
          <div className="flex gap-3 items-start flex-1">
            {/* Zdjęcie 8 — lewa, niżej (margin top) */}
            <div
              className="relative w-1/2 self-end overflow-hidden group cursor-pointer shadow-sm"
              style={{ height: "340px" }}
            >
              <Image
                src="/8.png"
                alt="TikTok restauracje"
                fill
                sizes="25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-8 left-4 right-4 text-white text-sm font-bold leading-snug drop-shadow">
                na tiktoku testuję restauracje i dzielę się swoim życiem
              </p>
              <span className="absolute bottom-3 left-4 text-white text-sm">
                →
              </span>
            </div>

            {/* Zdjęcie 9 — prawa, wyżej (naturalnie od góry) */}
            <div
              className="relative w-1/2 self-start overflow-hidden group cursor-pointer shadow-sm"
              style={{ height: "340px" }}
            >
              <Image
                src="/9.png"
                alt="Aleksandra"
                fill
                sizes="25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-bold leading-snug drop-shadow">
                mam na imię Aleksandra
              </p>
              <span className="absolute bottom-3 right-4 text-white text-sm">
                →
              </span>
            </div>
          </div>

          {/* Dolny rząd — zdjęcie 10 wyśrodkowane, kwadratowe */}
          <div className="flex justify-center">
            <div
              className="relative overflow-hidden group cursor-pointer shadow-sm"
              style={{ width: "55%", height: "300px" }}
            >
              <Image
                src="/10.png"
                alt="Mural Białystok"
                fill
                sizes="28vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <p className="absolute bottom-8 left-4 right-4 text-white text-sm font-bold leading-snug drop-shadow">
                kocham murale, odkąd nauczycielka w liceum kazała mi zrobić
                prezentacje o wszystkich w Białymstoku, aby zdać
              </p>
              <span className="absolute bottom-3 left-4 text-white text-sm">
                →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdentyfikacjaWizualna;
