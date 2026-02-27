"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Transition } from "framer-motion";

const Prowadzenie_social = () => {
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
      id="prowadzenie-social-media"
      className="bg-white font-raleway min-h-screen lg:h-screen flex flex-col px-6 md:px-12 lg:px-20"
      ref={sectionRef}
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col h-full py-10">
        {/* Przycisk */}
        <div className="mb-8">
          <motion.button
            {...fadeUp(0)}
            className="inline-flex items-center justify-between min-w-[280px] lg:min-w-[320px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors"
          >
            <span>Prowadzenie social media</span>
            <span className="ml-8">→</span>
          </motion.button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center flex-1 min-h-0">
          {/* Lewa – tekst */}
          <div className="space-y-8 lg:space-y-10">
            <motion.div {...fadeUp(0.15)} className="flex gap-5">
              <div className="text-6xl lg:text-7xl font-light text-black leading-none shrink-0 w-20 lg:w-24">
                01
              </div>
              <div className="space-y-3 pt-1">
                <h2 className="text-2xl lg:text-3xl font-light leading-tight">
                  Podniesiemy zaufanie społeczne
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Estetyczne i ciekawe treści, jasne przekazy i komunikaty,
                  jednoznaczna komunikacja wizualna i aktywność budują zaufanie
                  wśród użytkowników social mediów, a to przekłada się na
                  sprzedaż.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.25)} className="flex gap-5">
              <div className="text-6xl lg:text-7xl font-light text-black leading-none shrink-0 w-20 lg:w-24">
                02
              </div>
              <div className="space-y-3 pt-1">
                <h2 className="text-2xl lg:text-3xl font-light leading-tight">
                  Już nie musisz się martwić
                </h2>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Terminy, scenariusze, zagrywki, publikacje leżą po naszej
                  stronie. Ty możesz skupić się na rozwoju swojego biznesu.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Prawa – zdjęcia tylko na lg+ */}
          <div className="hidden lg:flex relative justify-center items-center h-[650px]">
            {/* Tablet – pojawia się pierwszy */}
            <motion.div
              {...fadeUp(0.2)}
              className="relative w-[700px] md:w-[850px] z-0"
            >
              <Image
                src="/6.png"
                alt="Tablet"
                width={850}
                height={650}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>

            {/* Telefon – pojawia się po tablecie */}
            <motion.div
              {...fadeUp(0.5)}
              className="absolute left-[20%] bottom-[10%] w-[280px] md:w-[320px] z-10"
            >
              <Image
                src="/7.png"
                alt="Phone"
                width={320}
                height={650}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prowadzenie_social;
