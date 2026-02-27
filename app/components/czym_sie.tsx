"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const services = [
  { title: "Prowadzenie social media", href: "#prowadzenie-social-media" },
  { title: "Tworzenie rolek", href: "#tworzenie-rolek" },
  { title: "Identyfikacja wizualna", href: "#identyfikacja-wizualna" },
  { title: "Projekty kreatywne", href: "#projekty-kreatywne" },
  { title: "Strategia działania", href: "#strategia-dzialania" },
  { title: "Poznajmy się", href: "#poznajmy-sie" },
];

const Czym_sie = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const desktopGridRef = useRef<HTMLDivElement>(null);
  const mobileGridRef = useRef<HTMLDivElement>(null);

  const isDesktopInView = useInView(desktopGridRef, {
    once: true,
    margin: "-80px",
  });
  const isMobileInView = useInView(mobileGridRef, {
    once: true,
    margin: "-80px",
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) video.play();
          else video.pause();
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const ServiceButton = ({
    service,
    index,
    isInView,
    small = false,
  }: {
    service: (typeof services)[0];
    index: number;
    isInView: boolean;
    small?: boolean;
  }) => (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      onClick={() => handleScroll(service.href)}
      className={`group flex w-full items-center justify-between rounded-full border-2 border-black bg-transparent text-left transition-all hover:bg-black hover:text-white ${
        small ? "px-5 py-3 text-sm" : "px-7 py-5 text-base"
      }`}
    >
      <span className="font-normal">{service.title}</span>
      <span className="ml-3">→</span>
    </motion.button>
  );

  return (
    <section className="w-full bg-[#F5F1E8]">
      {/* ── DESKTOP – cała sekcja = h-screen ── */}
      <div className="hidden lg:flex h-screen w-full">
        {/* Lewa – nagłówek + przyciski */}
        <div className="flex-1 flex flex-col justify-between px-16 py-16">
          {/* Nagłówek – przy górze */}
          <div>
            <h2 className="mb-3 text-5xl font-normal leading-tight xl:text-6xl">
              Czym się zajmujemy?
            </h2>
            <p className="text-xl font-normal text-[#E63946]">
              Naszą ofertę dopasowujemy do Twoich potrzeb.
            </p>
          </div>

          {/* Przyciski – przy dole */}
          <div ref={desktopGridRef} className="grid grid-cols-2 gap-9 mb-8">
            {services.map((service, i) => (
              <ServiceButton
                key={service.href}
                service={service}
                index={i}
                isInView={isDesktopInView}
              />
            ))}
          </div>
        </div>

        {/* Prawa – video dokładnie h-screen */}
        <div className="w-[42%] h-full">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
          >
            <source src="/0224(1).mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="lg:hidden px-4 pt-12 pb-16 space-y-6 md:px-8">
        {/* Nagłówek mobile */}
        <div>
          <h2 className="mb-3 text-4xl font-normal leading-tight">
            Czym się zajmujemy?
          </h2>
          <p className="text-xl font-normal text-[#E63946]">
            Naszą ofertę dopasowujemy do Twoich potrzeb.
          </p>
        </div>

        {/* Przyciski mobile */}
        <div
          ref={mobileGridRef}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {services.map((service, i) => (
            <ServiceButton
              key={service.href}
              service={service}
              index={i}
              isInView={isMobileInView}
              small
            />
          ))}
        </div>

        {/* Video mobile */}
        <div className="w-full aspect-[9/16] max-h-[75vh]">
          <video
            className="h-full w-full object-cover rounded-sm"
            loop
            muted
            playsInline
            autoPlay
          >
            <source src="/0224(1).mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Czym_sie;
