import React from "react";
import Image from "next/image";

const Prowadzenie_social = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header Button */}
        <div className="mb-16">
          <button className="inline-flex items-center gap-2 px-8 py-4 border-2 border-black rounded-full text-lg font-light hover:bg-black hover:text-white transition-colors">
            Prowadzenie social media
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-12">
            {/* Section 01 */}
            <div className="flex gap-6">
              <div className="text-7xl md:text-8xl font-light text-black leading-none">
                01
              </div>
              <div className="space-y-4 pt-2">
                <h2 className="text-3xl md:text-4xl font-light leading-tight">
                  Podniesiemy zaufanie społeczne
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Estetyczne i ciekawe treści, jasne przekazy i komunikaty,
                  jednoznaczna komunikacja wizualna i aktywność budują zaufanie
                  wśród użytkowników social mediów, a to przekłada się na
                  sprzedaż.
                </p>
              </div>
            </div>

            {/* Section 02 */}
            <div className="flex gap-6">
              <div className="text-7xl md:text-8xl font-light text-black leading-none">
                02
              </div>
              <div className="space-y-4 pt-2">
                <h2 className="text-3xl md:text-4xl font-light leading-tight">
                  Już nie musisz się martwić
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Terminy, scenariusze, zagrywki, publikacje leżą po naszej
                  stronie. Ty możesz skupić się na rozwoju swojego biznesu.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Device Mockups */}
          <div className="relative flex justify-center items-center h-[650px]">
            {/* Tablet (Background) */}
            <div className="relative w-[700px] md:w-[850px] z-0">
              <Image
                src="/6.png"
                alt="Tablet"
                width={850}
                height={650}
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            {/* Phone (Foreground - Overlapping) */}
            <div className="absolute left-[20%] bottom-[10%] w-[280px] md:w-[320px] z-10">
              <Image
                src="/7.png"
                alt="Phone"
                width={320}
                height={650}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prowadzenie_social;
