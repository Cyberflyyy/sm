"use client";

import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";

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

const VideoCard = ({
  src,
  style,
  className,
}: {
  src: string;
  style?: React.CSSProperties;
  className?: string;
}) => (
  <motion.div
    variants={itemVariants}
    className={`shadow-xl overflow-hidden group cursor-pointer ${className ?? ""}`}
    style={style}
  >
    <video
      key={src}
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
      className="transition-transform duration-500 group-hover:scale-105"
    >
      <source src={src} type="video/mp4" />
    </video>
  </motion.div>
);

const Tworzenie_rolek = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="tworzenie-rolek"
      className="w-full bg-white font-raleway h-screen flex flex-col"
      ref={sectionRef}
    >
      {/* ── DESKTOP ── */}
      <motion.div
        className="hidden lg:flex w-full h-full"
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
            <span>Tworzenie rolek</span>
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
                  Wystarczy uśmiech
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Strategia nagrywek i scenariusz, nagrania, profesjonalny
                  montaż, audio, napisy, grafiki to nasze zadanie! Ty zadbaj o
                  to, aby dobrze zaprezentować markę z pomocą specjalistów.
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
                  Publikacja
                </h3>
                <p className="text-base lg:text-lg text-gray-700 leading-relaxed">
                  Nie musisz się tym zajmować, możesz oddać to w nasze ręce.
                  Zadbamy o odpowiedni opis, hashtagi, nakładkę i termin
                  publikacji.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Prawa – 50%, dwa filmy */}
        <div className="w-1/2 flex items-center justify-center gap-10 py-8 px-6">
          {/* Film 1 – węższy i dłuższy */}
          <VideoCard
            src="/v1.mp4"
            className="self-start"
            style={{
              width: "calc(40% - 20px)",
              height: "75%",
              marginTop: "20px",
            }}
          />
          {/* Film 2 – szerszy i krótszy */}
          <VideoCard
            src="/5.mp4"
            className="self-end"
            style={{
              width: "calc(55% - 20px)",
              height: "63%",
              marginBottom: "20px",
            }}
          />
        </div>
      </motion.div>

      {/* ── MOBILE ── */}
      <motion.div
        className="lg:hidden flex flex-col px-6 py-10 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.button
          variants={itemVariants}
          className="inline-flex items-center justify-between min-w-[260px] px-7 py-5 border-2 border-black rounded-full text-base font-normal hover:bg-black hover:text-white transition-colors w-fit"
        >
          <span>Tworzenie rolek</span>
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
                Wystarczy uśmiech
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Strategia nagrywek i scenariusz, nagrania, profesjonalny montaż,
                audio, napisy, grafiki to nasze zadanie! Ty zadbaj o to, aby
                dobrze zaprezentować markę z pomocą specjalistów.
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
                Publikacja
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Nie musisz się tym zajmować, możesz oddać to w nasze ręce.
                Zadbamy o odpowiedni opis, hashtagi, nakładkę i termin
                publikacji.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Filmy mobile */}
        <div className="flex gap-6 items-start">
          <VideoCard
            src="/v1.mp4"
            className=""
            style={{ width: "42%", height: "340px" }}
          />
          <VideoCard
            src="/5.mp4"
            className=""
            style={{ width: "52%", height: "285px", marginTop: "60px" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Tworzenie_rolek;
