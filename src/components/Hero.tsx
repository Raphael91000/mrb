import { Phone, Calendar, Instagram } from 'lucide-react';

const PHONE_NUMBER = '0755305100';
const TREATWELL_LINK = 'https://www.treatwell.fr/salon/mr-barber-94/';
const INSTAGRAM_LINK = 'https://www.instagram.com/mrbarber94170/';
const TIKTOK_LINK = 'https://www.tiktok.com/@mrbarber94';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="mb-4">
            <img src="/logoo.png" alt="Mr Barber 94" className="mx-auto h-32 md:h-48 object-contain" />
          </h1>
              <p className="text-xl md:text-2xl text-neutral-400 italic font-light max-w-2xl mx-auto">
                "Laissez-nous faire, c'est tout simplement notre métier"
              </p>
        </div>

        <div className="mb-12 text-neutral-400">
          <p className="text-lg">Le Perreux-sur-Marne</p>
           <p className="text-lg">178 avenue du Général de Gaulle</p>
           <p className="text-lg mt-2 text-white font-medium">Ouvert de 10h à 20h</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="flex items-center justify-center gap-3 bg-white hover:bg-neutral-200 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Phone size={22} />
            <span>Appeler</span>
          </a>

          <a
            href={TREATWELL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 border-2 border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Calendar size={22} />
            <span>Prendre RDV</span>
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>
          <a
            href={TIKTOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            aria-label="TikTok"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
            </svg>
          </a>
        </div>
      </div>

      {/* scroll indicator removed to keep pages uniform */}
    </section>
  );
}
