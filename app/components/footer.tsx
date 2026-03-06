import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="w-full bg-[#d30200] font-raleway flex flex-col min-h-screen"
      id="kontakt"
    >
      {/* Logo */}
      <div className="">
        <Image
          src="/logor.png"
          alt="Logo"
          width={400}
          height={400}
          className="w-[80px] lg:w-[220px] object-contain"
        />
      </div>

      {/* Główna treść – wypełnia przestrzeń */}
      <div className="flex flex-col lg:flex-row flex-1 px-8 lg:px-12 py-10 lg:py-0 gap-10 lg:gap-0 lg:items-center">
        {/* Lewa – nagłówek + przycisk */}
        <div className="flex flex-col gap-8 lg:w-1/2">
          <h2 className="text-white text-5xl lg:text-6xl xl:text-7xl font-light leading-tight">
            Pokaż się
            <br />w social media
          </h2>
          <button className="inline-flex items-center justify-between w-fit px-7 py-4 border-2 border-white rounded-full text-white text-base font-normal hover:bg-white hover:text-[#d30200] transition-colors">
            <span>Współpracuj z nami</span>
            <span className="ml-6">→</span>
          </button>
        </div>

        {/* Prawa – kontakt + ikony */}
        <div className="flex flex-col gap-6 lg:w-1/2 lg:pl-16">
          <div className="flex flex-col gap-1 text-white text-base lg:text-lg">
            <p>azatorska.simplemedia@gmail.com</p>
            <p>+48 884 822 323</p>
          </div>
          <div className="flex flex-col gap-1 text-white text-base lg:text-lg">
            <p>Węglowa 13,</p>
            <p>15-121 Białystok</p>
          </div>

          {/* Ikony social media */}
          <div className="flex gap-4 mt-2">
            {/* Facebook */}
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#d30200] transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-[#d30200] transition-colors"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Dolny pasek */}
      <div className="border-t border-white/20 px-8 lg:px-12 py-4 flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-0 sm:justify-between text-white text-xs lg:text-sm">
        <p>Aleksandra Zatorska SIMPLE MEDIA</p>
        <p>polityka prywatności </p>
        <p>NIP: 9662206159</p>
        <p>REGON: 541677815</p>
      </div>
    </footer>
  );
};

export default Footer;
