const Strategia_dzialania = () => {
  return (
    <section className="w-full bg-white h-[900px] flex overflow-hidden">
      {/* ── Lewa strona — 60% ── */}
      <div className="w-[60%] flex flex-col px-16 py-16 gap-16">
        <button className="w-fit border border-neutral-800 rounded-full px-6 py-2.5 text-sm hover:bg-neutral-800 hover:text-white transition-colors duration-300 cursor-pointer">
          Strategia działania →
        </button>

        <div className="flex flex-col gap-14">
          {/* Punkt 01 */}
          <div className="flex items-start gap-6">
            <span className="text-6xl font-light text-neutral-300 min-w-[5rem] leading-none">
              01
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold text-neutral-900">
                Czasem sami już nie wiemy...
              </h3>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Wtedy szukamy słabych punktów, wyróżnika, analizujemy rynek,
                potrzeby odbiorców oraz aktualne trendy. Określamy cele i plany
                rozwoju marki.
              </p>
            </div>
          </div>

          {/* Punkt 02 */}
          <div className="flex items-start gap-6">
            <span className="text-6xl font-light text-neutral-300 min-w-[5rem] leading-none">
              02
            </span>
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl font-semibold text-neutral-900">
                Rozwiązanie
              </h3>
              <p className="text-lg text-neutral-500 leading-relaxed">
                Na podstawie wcześniejszej analizy szukamy sposobu, aby wyróżnić
                markę i odnieść sukces. W tym celu tworzymy strategię, czyli
                plan, w którym krok po kroku rozpiszemy drogę, którą należy
                podążać.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Prawa strona — 40%, film od góry do dołu, do prawej krawędzi ── */}
      <div className="w-[40%] relative  ">
        <video
          src="/11.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute right-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Strategia_dzialania;
