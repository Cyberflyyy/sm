"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const IdentyfikacjaWizualna = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="identyfikacja-wizualna"
      className="w-full bg-[#f0ebe0] font-raleway"
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
            <span>Identyfikacja wizualna</span>
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
                  Piękno budzi radość
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Dbałość o spójną estetykę, plan i znajomość celu pozwala
                  osiągnąć oczekiwany wygląd strony social media, a to podstawa
                  budowania sympatii wśród użytkowników.
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
                  Trudne pytania, łatwe odpowiedzi
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Na podstawie analizy rynku, konkurencji, historii marki oraz
                  preferencji klienta możemy udzielić odpowiedzi w jaki sposób
                  wprowadzić i utrzymać koncepcje wizualną marki.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Prawa – zdjęcia */}
        <div className="w-1/2 flex flex-col gap-3 py-8 px-8 h-full">
          <div className="flex gap-3 flex-1 min-h-0">
            <motion.div
              variants={itemVariants}
              className="relative w-1/2 self-start overflow-hidden group cursor-pointer shadow-sm"
              style={{ height: "100%" }}
            >
              <Image
                src="/8.png"
                alt="TikTok restauracje"
                fill
                sizes="25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative w-1/2 ml-3 self-end overflow-hidden group cursor-pointer shadow-sm"
              style={{ height: "90%" }}
            >
              <Image
                src="/9.png"
                alt="Aleksandra"
                fill
                sizes="25vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center"
            style={{ height: "38%" }}
          >
            <div className="relative w-[55%] overflow-hidden group cursor-pointer shadow-sm h-full">
              <Image
                src="/10.png"
                alt="Mural Białystok"
                fill
                sizes="28vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ── MOBILE ── */}
      <motion.div
        className="lg:hidden flex flex-col px-6 py-10 gap-8 min-h-screen pb-16"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.button
          variants={itemVariants}
          className="inline-flex items-center justify-between min-w-[260px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
        >
          <span>Identyfikacja wizualna</span>
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
                Piękno budzi radość
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Dbałość o spójną estetykę, plan i znajomość celu pozwala
                osiągnąć oczekiwany wygląd strony social media, a to podstawa
                budowania sympatii wśród użytkowników.
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
                Trudne pytania, łatwe odpowiedzi
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Na podstawie analizy rynku, konkurencji, historii marki oraz
                preferencji klienta możemy udzielić odpowiedzi w jaki sposób
                wprowadzić i utrzymać koncepcje wizualną marki.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Zdjęcia mobile – bez napisów */}
        <div className="flex flex-col gap-3">
          <div className="flex gap-3">
            <motion.div
              variants={itemVariants}
              className="relative flex-1 overflow-hidden cursor-pointer shadow-sm"
              style={{ height: "220px" }}
            >
              <Image
                src="/8.png"
                alt="TikTok"
                fill
                sizes="50vw"
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="relative flex-1 overflow-hidden cursor-pointer shadow-sm"
              style={{ height: "240px" }}
            >
              <Image
                src="/9.png"
                alt="Aleksandra"
                fill
                sizes="50vw"
                className="object-cover object-top transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="relative w-full overflow-hidden cursor-pointer shadow-sm"
            style={{ height: "300px" }}
          >
            <Image
              src="/10.png"
              alt="Mural"
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default IdentyfikacjaWizualna;
