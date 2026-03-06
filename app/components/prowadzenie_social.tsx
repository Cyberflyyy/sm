"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Prowadzenie_social = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="prowadzenie-social-media"
      className="bg-white font-raleway w-full flex"
      ref={sectionRef}
    >
      {/* ── DESKTOP ── */}
      <motion.div
        className="hidden lg:flex w-full h-screen"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Lewa – 50% */}
        <div className="w-1/2 flex flex-col px-16 py-12 gap-10">
          <motion.button
            variants={itemVariants}
            className="inline-flex items-center justify-between min-w-[280px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
          >
            <span>Prowadzenie social media</span>
            <span className="ml-8">→</span>
          </motion.button>

          <div className="flex flex-col gap-10 justify-center flex-1">
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-6"
            >
              <span className="text-6xl lg:text-7xl font-light text-neutral-300 w-20 lg:w-24 leading-none shrink-0">
                01
              </span>
              <div className="flex flex-col gap-3 pt-1">
                <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 leading-tight">
                  Podniesiemy zaufanie społeczne
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Estetyczne i ciekawe treści, jasne przekazy i komunikaty,
                  jednoznaczna komunikacja wizualna i aktywność budują zaufanie
                  wśród użytkowników social mediów, a to przekłada się na
                  sprzedaż.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-start gap-6"
            >
              <span className="text-6xl lg:text-7xl font-light text-neutral-300 w-20 lg:w-24 leading-none shrink-0">
                02
              </span>
              <div className="flex flex-col gap-3 pt-1">
                <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 leading-tight">
                  Już nie musisz się martwić
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Terminy, scenariusze, zagrywki, publikacje leżą po naszej
                  stronie. Ty możesz skupić się na rozwoju swojego biznesu.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Prawa – zdjęcie */}
        <div className="w-1/2 flex justify-center items-center h-full px-8">
          <motion.div
            variants={itemVariants}
            className="relative w-full h-full"
          >
            <Image
              src="/tablettelefon.png"
              alt="Tablet i telefon"
              fill
              sizes="50vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      {/* ── MOBILE ── */}
      <motion.div
        className="lg:hidden flex flex-col px-6 py-10 gap-8 min-h-screen"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.button
          variants={itemVariants}
          className="inline-flex items-center justify-between min-w-[260px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
        >
          <span>Prowadzenie social media</span>
          <span className="ml-6">→</span>
        </motion.button>

        <div className="flex flex-col gap-8">
          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <span className="text-5xl font-light text-neutral-300 w-16 leading-none shrink-0">
              01
            </span>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="text-xl font-light text-neutral-900 leading-tight">
                Podniesiemy zaufanie społeczne
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Estetyczne i ciekawe treści, jasne przekazy i komunikaty,
                jednoznaczna komunikacja wizualna i aktywność budują zaufanie
                wśród użytkowników social mediów, a to przekłada się na
                sprzedaż.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-start gap-4"
          >
            <span className="text-5xl font-light text-neutral-300 w-16 leading-none shrink-0">
              02
            </span>
            <div className="flex flex-col gap-2 pt-1">
              <h3 className="text-xl font-light text-neutral-900 leading-tight">
                Już nie musisz się martwić
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Terminy, scenariusze, zagrywki, publikacje leżą po naszej
                stronie. Ty możesz skupić się na rozwoju swojego biznesu.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Zdjęcie mobile */}
        <motion.div
          variants={itemVariants}
          className="relative w-full"
          style={{ height: "300px" }}
        >
          <Image
            src="/tablettelefon.png"
            alt="Tablet i telefon"
            fill
            sizes="100vw"
            className="object-contain object-center"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Prowadzenie_social;
