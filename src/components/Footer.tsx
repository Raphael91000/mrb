import { Instagram, Phone, MapPin } from 'lucide-react';

const INSTAGRAM_LINK = 'https://www.instagram.com/mrbarber94170/';
const TIKTOK_LINK = 'https://www.tiktok.com/@mrbarber94';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">
              Mr Barber <span className="text-white">94</span>
            </h3>
            <p className="text-neutral-500 italic">
              "Laissez-nous faire, c'est tout simplement notre metier"
            </p>
          </div>

          <div className="flex items-center gap-4 text-neutral-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-white" />
              <span>Le Perreux-sur-Marne</span>
            </div>
            <div className="w-px h-4 bg-neutral-700" />
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-white" />
              <span>07 55 30 51 00</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href={TIKTOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} Mr Barber 94. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
}
