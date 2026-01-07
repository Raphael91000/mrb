import { Calendar } from 'lucide-react';

const TREATWELL_LINK = 'https://www.treatwell.fr/salon/mr-barber-94/';

const galleryImages = [
  { url: '/coupe1.jpeg', alt: 'Taper fade' },
  { url: '/coupe2.jpeg', alt: 'degradé bas homme' },
  { url: '/coupe3.jpeg', alt: 'coupe + barbe' },
];

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos Réalisations</h2>
          <p className="text-neutral-400 text-lg">Découvrez notre savoir-faire</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl text-white mb-8 font-light">
            Envie du même style ? <span className="font-semibold">Venez nous voir</span>
          </p>
          <a
            href={TREATWELL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-neutral-200 text-black font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Calendar size={22} />
            <span>Prendre RDV</span>
          </a>
        </div>
      </div>
    </section>
  );
}
