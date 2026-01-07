import { useEffect, useState } from 'react';
import { Phone, Calendar, Instagram } from 'lucide-react';

const PHONE_NUMBER = '0755305100';
const TREATWELL_LINK = 'https://www.treatwell.fr/salon/mr-barber-94/';
const INSTAGRAM_LINK = 'https://www.instagram.com/mrbarber94170/';
const TIKTOK_LINK = 'https://www.tiktok.com/@mrbarber94';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="accueil"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 lg:px-16 py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6">

          {/* TEXT COLUMN */}
          <div
            className={`md:col-span-6 md:col-start-1 text-left text-white transition-all duration-700 ${
              mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
            }`}
          >
            <h1 className="text-6xl font-bold uppercase text-white mb-4 font-mono">
              Mr Barber 94
            </h1>

            <p className="mt-4 text-neutral-300 text-lg md:text-xl italic max-w-lg leading-relaxed">
  <span className="block">
    Laissez-nous faire, c&apos;est tout simplement
  </span>
  <span className="block">
    notre métier
  </span>
</p>


            <div className="mt-6 text-neutral-400 text-sm max-w-md opacity-80">
              <p>178 avenue du Général de Gaulle — Le Perreux-sur-Marne</p>
              <p className="mt-1 text-white font-medium">
                Ouvert de 10h à 20h
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
              <a
                href={TREATWELL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform duration-200"
              >
                <Calendar size={20} className="mr-2" />
                Prendre RDV
              </a>

              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 border border-white text-white px-5 py-3 rounded-lg hover:bg-white hover:text-black transition-colors duration-200"
              >
                <Phone size={18} />
                Appeler
              </a>
            </div>

            <div className="mt-6 flex gap-4">
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <Instagram size={28} />
              </a>

              <a
                href={TIKTOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* IMAGE COLUMN */}
<div className="hidden md:block md:col-span-6 md:col-start-7 relative">
  <img
    src="/wahl.png"
    alt=""
    aria-hidden="true"
    className="
      absolute
      right-[-4rem]
      bottom-[-22rem]
      w-[38rem]
      max-w-none
      opacity-95
      pointer-events-none
    "
    style={{
      maskImage: 'linear-gradient(to left, black 75%, transparent)',
    }}
  />
</div>



        </div>
      </div>
    </section>
  );
}
