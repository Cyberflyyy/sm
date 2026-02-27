"use client";

import { useRef } from "react";
import { motion, useInView, Transition } from "framer-motion";
import Image from "next/image";

const Projekty_kreatywne = () => {
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
      id="projekty-kreatywne"
      className="w-full flex h-screen bg-black overflow-hidden font-raleway"
      ref={sectionRef}
    >
      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex w-full h-full">
        {/* Lewa – czarne tło + biała karta */}
        <div className="w-[40%] h-full bg-black flex items-stretch pt-8">
          {/* rounded-tr-2xl – tylko prawy górny róg */}
          <div className="flex-1 bg-white rounded-tr-2xl flex flex-col justify-between px-16 py-12">
            <motion.button
              {...fadeUp(0)}
              className="inline-flex items-center justify-between min-w-[280px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
            >
              <span>Projekty kreatywne</span>
              <span className="ml-8">→</span>
            </motion.button>

            <motion.div {...fadeUp(0.2)} className="flex flex-col gap-8">
              <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 leading-snug">
                Chcesz zrealizować spot reklamowy, ulotkę, film krótkometrażowy
                lub projekt innego rodzaju?
              </h2>
              <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                Skontaktuj się z nami,
                <br />
                znajdziemy rozwiązanie.
              </p>
            </motion.div>

            <div />
          </div>
        </div>

        {/* Prawa – zdjęcie */}
        <motion.div {...fadeUp(0.1)} className="w-[60%] h-full relative">
          <Image
            src="/14.png"
            alt="Projekty kreatywne"
            fill
            sizes="60vw"
            quality={100}
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col w-full h-full bg-black overflow-y-auto">
        <div className="bg-white rounded-tr-2xl mx-0 mt-4 flex flex-col gap-8 px-8 py-10">
          <motion.button
            {...fadeUp(0)}
            className="inline-flex items-center justify-between min-w-[260px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
          >
            <span>Projekty kreatywne</span>
            <span className="ml-6">→</span>
          </motion.button>

          <motion.div {...fadeUp(0.2)} className="flex flex-col gap-5">
            <h2 className="text-2xl font-light text-neutral-900 leading-snug">
              Chcesz zrealizować spot reklamowy, ulotkę, film krótkometrażowy
              lub projekt innego rodzaju?
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Skontaktuj się z nami,
              <br />
              znajdziemy rozwiązanie.
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.25)}
          className="flex-1 relative min-h-[300px] mb-4 mt-3"
        >
          <Image
            src="/14.png"
            alt="Projekty kreatywne"
            fill
            sizes="100vw"
            quality={100}
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projekty_kreatywne;
