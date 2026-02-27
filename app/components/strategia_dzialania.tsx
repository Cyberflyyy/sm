"use client";

import { useRef } from "react";
import { motion, useInView, Transition } from "framer-motion";

const Strategia_dzialania = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    } as Transition,
  });

  return (
    <section
      id="strategia-dzialania"
      className="w-full bg-white font-raleway h-screen flex overflow-hidden"
      ref={sectionRef}
    >
      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex w-full h-full">
        {/* Lewa – 60% */}
        <div className="w-[60%] flex flex-col px-16 py-12 gap-10">
          <motion.button
            {...fadeUp(0)}
            className="inline-flex items-center justify-between min-w-[280px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
          >
            <span>Strategia działania</span>
            <span className="ml-8">→</span>
          </motion.button>

          <div className="flex flex-col gap-10 justify-center flex-1">
            <motion.div {...fadeUp(0.15)} className="flex items-start gap-6">
              <span className="text-6xl lg:text-7xl font-light text-neutral-300 w-20 lg:w-24 leading-none shrink-0">
                01
              </span>
              <div className="flex flex-col gap-3 pt-1">
                <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 leading-tight">
                  Czasem sami już nie wiemy...
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Wtedy szukamy słabych punktów, wyróżnika, analizujemy rynek,
                  potrzeby odbiorców oraz aktualne trendy. Określamy cele i
                  plany rozwoju marki.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="flex items-start gap-6">
              <span className="text-6xl lg:text-7xl font-light text-neutral-300 w-20 lg:w-24 leading-none shrink-0">
                02
              </span>
              <div className="flex flex-col gap-3 pt-1">
                <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 leading-tight">
                  Rozwiązanie
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Na podstawie wcześniejszej analizy szukamy sposobu, aby
                  wyróżnić markę i odnieść sukces. W tym celu tworzymy
                  strategię, czyli plan, w którym krok po kroku rozpiszemy
                  drogę, którą należy podążać.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Prawa – video przyklejony do prawej, h-screen */}
        <motion.div {...fadeUp(0.2)} className="w-[40%] h-full">
          <video
            src="/11.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col px-6 py-10 gap-8 w-full overflow-y-auto">
        <motion.button
          {...fadeUp(0)}
          className="inline-flex items-center justify-between min-w-[260px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
        >
          <span>Strategia działania</span>
          <span className="ml-6">→</span>
        </motion.button>

        <div className="flex flex-col gap-8">
          <motion.div {...fadeUp(0.1)} className="flex items-start gap-4">
            <span className="text-5xl font-light text-neutral-300 w-16 leading-none shrink-0">
              01
            </span>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="text-xl font-light text-neutral-900 leading-tight">
                Czasem sami już nie wiemy...
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Wtedy szukamy słabych punktów, wyróżnika, analizujemy rynek,
                potrzeby odbiorców oraz aktualne trendy. Określamy cele i plany
                rozwoju marki.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="flex items-start gap-4">
            <span className="text-5xl font-light text-neutral-300 w-16 leading-none shrink-0">
              02
            </span>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="text-xl font-light text-neutral-900 leading-tight">
                Rozwiązanie
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Na podstawie wcześniejszej analizy szukamy sposobu, aby wyróżnić
                markę i odnieść sukces. W tym celu tworzymy strategię, czyli
                plan, w którym krok po kroku rozpiszemy drogę, którą należy
                podążać.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Video mobile */}
        <motion.div
          {...fadeUp(0.3)}
          className="w-full aspect-video rounded-sm overflow-hidden"
        >
          <video
            src="/11.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Strategia_dzialania;
