"use client";

import { useRef } from "react";
import { motion, useInView, Transition } from "framer-motion";
import Image from "next/image";

const Poznajmy_sie = () => {
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
      id="poznajmy-sie"
      className="w-full bg-white font-raleway h-screen flex flex-col"
      ref={sectionRef}
    >
      {/* ── DESKTOP ── */}
      <div className="hidden lg:flex w-full h-full px-16 py-12 items-center gap-12">
        {/* Lewa – 55% */}
        <div className="w-[55%] flex flex-col justify-between h-full py-4">
          <motion.button
            {...fadeUp(0)}
            className="inline-flex items-center justify-between min-w-[280px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
          >
            <span>Poznajmy się</span>
            <span className="ml-8">→</span>
          </motion.button>

          <motion.div {...fadeUp(0.15)} className="flex flex-col gap-8">
            <h2 className="text-5xl xl:text-6xl font-serif font-semibold text-[#1a1a1a] leading-tight">
              Nazywam się
              <br />
              Aleksandra
            </h2>
            <p className="text-base lg:text-lg text-gray-700 leading-relaxed max-w-[480px]">
              Jestem właścicielką SIMPLE MEDIA. To dla mnie ważne, że wyróżnia
              nas <strong>kreatywne</strong> podejście zamiast schematów
              &ldquo;kopiuj-wklej&rdquo;. Dbam o to, aby tak{" "}
              <strong>zostało</strong>.
            </p>
          </motion.div>

          <div />
        </div>

        {/* Prawa – 45% */}
        <div className="w-[45%] flex justify-center items-center h-full">
          <motion.div
            {...fadeUp(0.2)}
            className="relative overflow-hidden"
            style={{
              transform: "rotate(8deg)",
              width: "480px",
              height: "640px",
            }}
          >
            <Image
              src="/15.png"
              alt="Aleksandra — właścicielka Simple Media"
              fill
              sizes="480px"
              className="object-cover object-top"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden flex flex-col px-6 py-10 gap-8 h-full overflow-y-auto">
        <motion.button
          {...fadeUp(0)}
          className="inline-flex items-center justify-between min-w-[260px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
        >
          <span>Poznajmy się</span>
          <span className="ml-6">→</span>
        </motion.button>

        <motion.div {...fadeUp(0.1)} className="flex justify-center">
          <div
            className="relative overflow-hidden"
            style={{
              transform: "rotate(8deg)",
              width: "260px",
              height: "346px",
            }}
          >
            <Image
              src="/15.png"
              alt="Aleksandra"
              fill
              sizes="260px"
              className="object-cover object-top"
              priority
            />
          </div>
        </motion.div>

        <motion.div {...fadeUp(0.2)} className="flex flex-col gap-5">
          <h2 className="text-4xl font-serif font-semibold text-[#1a1a1a] leading-tight">
            Nazywam się
            <br />
            Aleksandra
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            Jestem właścicielką SIMPLE MEDIA. To dla mnie ważne, że wyróżnia nas{" "}
            <strong>kreatywne</strong> podejście zamiast schematów
            &ldquo;kopiuj-wklej&rdquo;. Dbam o to, aby tak{" "}
            <strong>zostało</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Poznajmy_sie;
