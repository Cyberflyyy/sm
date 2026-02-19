import React from "react";
import Image from "next/image";

const Pokaz_sie = () => {
  return (
    <section className="min-h-screen bg-white px-4 py-8 md:px-8 lg:px-16">
      {/* Top Bar - Logo left, Button right */}
      <div className="mb-20 flex items-start justify-between md:mb-24">
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="h-32 w-auto md:h-38 lg:h-48"
        />

        <div className="mb-12 flex flex-col items-center justify-center gap-6 md:mb-16 lg:flex-row lg:gap-8">
          <h1 className="text-center font-raleway text-5xl font-normal leading-tight md:text-6xl lg:text-7xl xl:text-8xl">
            Pokaż się
            <br />
            <p className="font-raleway">w social media</p>
          </h1>

          <svg
            className="hidden h-10 w-20 lg:block"
            viewBox="0 0 80 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 20H70M70 20L55 5M70 20L55 35"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <button className="rounded-full border-2 border-black px-6 py-3 text-base font-normal transition-colors hover:bg-black hover:text-white md:px-8 md:py-4 md:text-lg">
          Współpracuj z nami
        </button>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl">
        {/* Centered Header with Arrow */}

        {/* Image Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/1.png"
              alt="Social media image 1"
              width={400}
              height={533}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/2.png"
              alt="Social media image 2"
              width={400}
              height={533}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/3.png"
              alt="Social media image 3"
              width={400}
              height={533}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              src="/4.png"
              alt="Social media image 4"
              width={400}
              height={533}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pokaz_sie;
