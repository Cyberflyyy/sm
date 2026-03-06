"use client";

import { useRef, useCallback } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const slides = [
  { type: "image", src: "/5.png", alt: "praca 1" },
  { type: "image", src: "/np2.png", alt: "praca 2" },
  { type: "image", src: "/np3.JPG", alt: "praca 3" },
  { type: "image", src: "/np4.jpeg", alt: "praca 4" },
  { type: "image", src: "/np5v1.png", alt: "praca 5" },
  { type: "video", src: "/np6.mp4", alt: "praca 6" },
  { type: "image", src: "/np7.png", alt: "praca 7" },
  { type: "video", src: "/np8.mp4", alt: "praca 8" },
  { type: "video", src: "/03.mp4", alt: "praca 9" },
  { type: "video", src: "/np10.mp4", alt: "praca 10" },
  { type: "video", src: "/np11.mp4", alt: "praca 11" },
  { type: "image", src: "/np12.png", alt: "praca 12" },
] as const;

const Nasze_prace = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      dragFree: false,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })],
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      id="nasze-prace"
      className="w-full bg-white font-raleway py-12 lg:py-16 px-6 lg:px-12"
      ref={sectionRef}
    >
      {/* Nagłówek */}
      <div className="flex items-start justify-between mb-10 lg:mb-12">
        <motion.h2
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-5xl lg:text-7xl font-light text-neutral-900 leading-none"
        >
          Nasze prace
        </motion.h2>
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:flex flex-col items-center gap-2 self-stretch justify-center"
        >
          <p
            className="text-sm text-neutral-500 tracking-wide"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Chcesz zobaczyć więcej? Skontaktuj się z nami!
          </p>
          <span className="text-2xl text-neutral-700 mt-2">↓</span>
        </motion.div>
      </div>

      {/* ── DESKTOP: mozaika ── */}
      <div className="hidden lg:flex w-full gap-4 h-[600px]">
        {/* KOLUMNA 1 */}
        <div className="w-1/3">
          <div className="flex w-full h-[200px] gap-4 pb-4">
            <div className="relative w-[150px] h-full overflow-hidden">
              <Image
                src="/5.png"
                alt="praca 1"
                fill
                className="object-cover"
                sizes="150px"
              />
            </div>
            <div className="relative flex-1 h-full overflow-hidden">
              <Image
                src="/np2.png"
                alt="praca 2"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>
          </div>
          <div className="flex w-full h-[400px] gap-4">
            <div className="relative flex-1 h-full overflow-hidden">
              <Image
                src="/np7.png"
                alt="praca 7"
                fill
                className="object-cover"
                sizes="16vw"
              />
            </div>
            <div className="relative flex-1 h-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/np8.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* KOLUMNA 2 */}
        <div className="w-1/3">
          <div className="flex w-full h-[400px] gap-4 pb-4">
            <div className="relative flex-1 h-full overflow-hidden">
              <Image
                src="/np3.JPG"
                alt="praca 3"
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
            <div className="relative w-[200px] h-full overflow-hidden">
              <Image
                src="/np4.jpeg"
                alt="praca 4"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </div>
          <div className="flex w-full h-[200px] gap-4">
            <div className="relative flex-1 h-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/03.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative flex-1 h-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/np10.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* KOLUMNA 3 */}
        <div className="w-1/3">
          <div className="w-full h-[200px] flex gap-4 pb-4">
            <div className="relative flex-1 h-full overflow-hidden">
              <Image
                src="/np5v1.png"
                alt="praca 5"
                fill
                className="object-cover"
                sizes="16vw"
              />
            </div>
            <div className="relative flex-1 h-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/np6.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="flex w-full h-[400px] gap-4">
            <div className="relative flex-1 h-full overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/np11.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative flex-1 h-full overflow-hidden">
              <Image
                src="/np12.png"
                alt="praca 12"
                fill
                className="object-cover"
                sizes="16vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE: karuzela Embla ── */}
      <div className="lg:hidden">
        <div className="overflow-hidden rounded-sm" ref={emblaRef}>
          <div className="flex gap-3">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="relative shrink-0 overflow-hidden rounded-sm"
                style={{ width: "100%", height: "420px" }}
              >
                {slide.type === "image" ? (
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    className="object-contain"
                    sizes="72vw"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-contain"
                  >
                    <source src={slide.src} type="video/mp4" />
                  </video>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Strzałki */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <button
            onClick={scrollPrev}
            className="w-11 h-11 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-lg"
            aria-label="Poprzedni"
          >
            ←
          </button>
          <button
            onClick={scrollNext}
            className="w-11 h-11 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors text-lg"
            aria-label="Następny"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nasze_prace;
