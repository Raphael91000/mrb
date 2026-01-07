import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#prestations', label: 'Prestations' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#avis', label: 'Avis' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="grid grid-cols-12 items-center h-16 md:h-24">

          {/* LOGO — optical alignment */}
          <div className="col-span-6 col-start-1">
            <a href="#accueil" className="inline-block">
              <img
                src="/logoo@2x.webp"
                alt="Mr Barber 94"
                className="h-14 md:h-20 w-auto -translate-x-1 md:-translate-x-2"

          
                
              />
            </a>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex col-span-6 col-start-7 justify-end gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white font-medium tracking-wide hover:text-neutral-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* MOBILE HAMBURGER */}
          <div className="flex md:hidden col-span-6 col-start-7 justify-end">
            <button
              onClick={() => setOpen(true)}
              className="text-white p-2 rounded-full border border-white/30 hover:bg-white/10 transition"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md">
          <div className="px-4 sm:px-6 md:px-8 lg:px-16">
            <div className="grid grid-cols-12 items-center h-16">
              <div className="col-span-6 col-start-1">
                <img
                  src="/logoo@2x.webp"
                  alt="Mr Barber 94"
                  className="h-14 w-auto -translate-x-1"
                />
              </div>

              <div className="col-span-6 col-start-7 flex justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="text-white p-2 rounded-full border border-white/30 hover:bg-white/10 transition"
                >
                  <X size={30} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center h-[calc(100%-4rem)] gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-white text-2xl font-semibold tracking-wide hover:text-neutral-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
