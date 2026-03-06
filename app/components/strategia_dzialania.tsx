"use client";

import { useRef } from "react";
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

const Strategia_dzialania = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="strategia-dzialania"
      className="w-full bg-white font-raleway"
      ref={sectionRef}
    >
      {/* ── DESKTOP ── */}
      <motion.div
        className="hidden lg:flex w-full h-screen overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Lewa – 60% */}
        <div className="w-[60%] flex flex-col px-16 py-12 gap-10">
          <motion.button
            variants={itemVariants}
            className="inline-flex items-center justify-between min-w-[280px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
          >
            <span>Strategia działania</span>
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
                  Czasem sami już nie wiemy...
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Wtedy szukamy słabych punktów, wyróżnika, analizujemy rynek,
                  potrzeby odbiorców oraz aktualne trendy. Określamy cele i
                  plany rozwoju marki.
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

        {/* Prawa – video */}
        <motion.div variants={itemVariants} className="w-[40%] h-full">
          <video
            src="/11.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      </motion.div>

      {/* ── MOBILE ── */}
      <motion.div
        className="lg:hidden flex flex-col px-6 py-10 gap-8 w-full pb-12"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.button
          variants={itemVariants}
          className="inline-flex items-center justify-between min-w-[260px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
        >
          <span>Strategia działania</span>
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
                Czasem sami już nie wiemy...
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Wtedy szukamy słabych punktów, wyróżnika, analizujemy rynek,
                potrzeby odbiorców oraz aktualne trendy. Określamy cele i plany
                rozwoju marki.
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

        {/* Video – ukryte na mobile zgodnie z Twoją prośbą */}
        {/* <motion.div variants={itemVariants} className="w-full aspect-video overflow-hidden">
          <video src="/11.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Strategia_dzialania;
