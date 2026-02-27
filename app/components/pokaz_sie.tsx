"use client";

import React from "react";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

const Pokaz_sie = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-16">
      {/* ── MOBILE HEADER ── */}
      <div className="flex flex-col items-center gap-4 pt-4 lg:hidden">
        <Image
          src="/logo.png"
          alt="Logo"
          width={400}
          height={400}
          className="h-32 w-auto"
        />
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center text-5xl font-normal leading-tight"
        >
          Pokaż się
          <br />w social media
        </motion.h1>
      </div>

      {/* ── DESKTOP HEADER ── */}
      <div className="relative hidden lg:flex w-full min-h-[220px] items-center justify-center">
        {/* LOGO – lewy górny róg */}
        <div className="absolute top-0 left-0">
          <Image
            src="/logo.png"
            alt="Logo"
            width={400}
            height={400}
            className="h-48 w-auto md:h-52 lg:h-56"
          />
        </div>

        {/* ŚRODEK */}
        <div className="flex flex-col items-start pl-30">
          {/* Linia 1 – "Pokaż się" + strzałka + przycisk */}
          <div className="flex items-center gap-8">
            <motion.span
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-7xl font-normal leading-tight xl:text-8xl"
            >
              Pokaż się
            </motion.span>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <MoveRight size={96} strokeWidth={0.8} className="shrink-0" />
            </motion.div>

            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className="whitespace-nowrap rounded-full border-2 border-black px-8 py-4 text-lg font-normal transition-colors hover:bg-black hover:text-white"
            >
              Współpracuj z nami
            </motion.button>
          </div>

          {/* Linia 2 – "w social media" */}
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="text-7xl font-normal leading-tight xl:text-8xl"
          >
            w social media
          </motion.span>
        </div>
      </div>

      {/* ── IMAGE GRID ── */}
      <div className="mx-auto max-w-7xl mt-8 lg:mt-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {["/1.png", "/2.png", "/3.png", "/4.png"].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.8 + i * 0.15,
                ease: "easeOut",
              }}
              className="aspect-3/4 overflow-hidden rounded-sm"
            >
              <Image
                src={src}
                alt={`Social media image ${i + 1}`}
                width={400}
                height={533}
                className="h-full w-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Przycisk mobile pod zdjęciami */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="mt-8 flex justify-center lg:hidden"
        >
          <button className="whitespace-nowrap rounded-full border-2 border-black px-8 py-4 text-base font-normal transition-colors hover:bg-black hover:text-white">
            Współpracuj z nami
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pokaz_sie;
