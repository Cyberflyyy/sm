"use client";

import React, { useRef, useEffect } from "react";

const Czym_sie = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const services = [
    { title: "Prowadzenie social media", icon: "→" },
    { title: "Tworzenie rolek", icon: "→" },
    { title: "Identyfikacja wizualna", icon: "→" },
    { title: "Projekty kreatywne", icon: "→" },
    { title: "Strategia działania", icon: "→" },
    { title: "Poznajmy się", icon: "→" },
  ];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#F5F1E8] px-4 py-16 md:px-8 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <div className="space-y-8 md:space-y-12">
          <div>
            <h2 className="mb-4 font-sans text-4xl font-normal leading-tight md:text-5xl lg:text-6xl">
              Czym się zajmujemy?
            </h2>
            <p className="text-xl font-normal text-[#E63946] md:text-2xl">
              Naszą ofertę dopasowujemy do Twoich potrzeb.
            </p>
          </div>

          {/* Service Buttons Grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
            {services.map((service, index) => (
              <button
                key={index}
                className="group flex items-center justify-between rounded-full border-2 border-black bg-transparent px-6 py-4  text-left transition-all hover:bg-black hover:text-white "
              >
                <span className="text-base font-normal md:text-lg">
                  {service.title}
                </span>
                <span className="ml-2 text-xl">{service.icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Video */}
        <div className="relative h-[500px]  md:h-[600px] lg:h-[700px]">
          <video
            ref={videoRef}
            className="h-full w-full object-cover"
            loop
            muted
            playsInline
          >
            <source src="/5.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Czym_sie;
