export default function Navbar() {
  const navLinks = [
    { href: '#accueil', label: 'Accueil' },
    { href: '#prestations', label: 'Prestations' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#avis', label: 'Avis' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-full px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-24">

          {/* LOGO → ACCUEIL */}
          <a href="#accueil" className="flex-shrink-0">
            <img
              src="/logoo@2x.webp"
              alt="Mr Barber 94 Logo"
              className="
                h-14
                md:h-20
                w-auto
                -ml-4
                md:-ml-14
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white font-medium transition-colors hover:text-neutral-300"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>
      </div>
    </nav>
  );
}
