import { useEffect, useState } from 'react';
import {
  Star,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/Mr+Barber+94+-+salon+de+coiffure/@48.8463691,2.4996562,17z/data=!4m8!3m7!1s0x47e60dbe784985fb:0x29dad2f3d5f0f7db!8m2!3d48.8463691!4d2.4996562!9m1!1b1!16s%2Fg%2F11rqv9hk3_?entry=ttu';


const reviews = [
  {
    name: 'Walid Mal',
    rating: 5,
    text: "C’est rare de trouver un coiffeur qui maîtrise son art, je recommande 10/10.",
    date: 'Il y a 2 semaines',
  },
  {
    name: 'Rizbo71',
    rating: 5,
    text: "J’aime toujours passer chez ce coiffeur durant mes vacances à Granville.",
    date: 'Il y a 5 mois',
  },
  {
    name: 'Telli Walid',
    rating: 5,
    text: "Nous ajoutons un salon et une merveilleuse coupe de cheveux, un nouveau traitement, je le recommande.",
    date: 'Il y a 3 mois',
  },
  {
    name: 'Jerry Kindts',
    rating: 4,
    text: "Très bien coiffé en répondant à mes attentes. Seul bémol de l’attente. Coiffeur souriant et agréable.",
    date: 'Il y a 8 mois',
  },
  {
    name: 'Mehdi K.',
    rating: 5,
    text: "Meilleur barbier du coin ! Toujours une coupe parfaite, ambiance sympa et prix corrects.",
    date: 'Il y a 2 semaines',
  },
  {
    name: 'Thomas L.',
    rating: 5,
    text: "Service impeccable, le barber prend son temps pour bien comprendre ce qu’on veut.",
    date: 'Il y a 1 mois',
  },
  {
    name: 'Youssef A.',
    rating: 5,
    text: "Très professionnel, accueil chaleureux. Je recommande.",
    date: 'Il y a 1 mois',
  },
  {
    name: 'Alexandre M.',
    rating: 5,
    text: "Excellent rapport qualité-prix. Le soin visage est un vrai plus.",
    date: 'Il y a 2 mois',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-neutral-600'
          }
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(reviews.length - 4, 0);

  const prev = () =>
    setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () =>
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  const visibleReviews = reviews.slice(index, index + 4);

  return (
    <section id="avis" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Avis Clients
          </h2>

          <div className="flex items-center justify-center gap-2 text-neutral-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={22}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-xl font-semibold text-white ml-2">
              4.7
            </span>
            <span>sur Google</span>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="relative mb-12">

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute -left-16 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            onClick={next}
            className="absolute -right-16 top-1/2 -translate-y-1/2 text-white opacity-70 hover:opacity-100 transition"
          >
            <ChevronRight size={36} />
          </button>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {visibleReviews.map((review, i) => (
              <div
                key={i}
                className={`
                  border border-white rounded-xl p-6 bg-transparent
                  ${i === 0 ? 'aspect-square flex flex-col justify-between' : ''}
                `}
              >
                <StarRating rating={review.rating} />

                <p
                  className={`text-neutral-300 leading-relaxed mb-4 ${
                    i === 0 ? 'text-base' : 'text-sm'
                  }`}
                >
                  “{review.text}”
                </p>

                <div>
                  <p className="text-white font-semibold">
                    {review.name}
                  </p>
                  <p className="text-neutral-500 text-xs">
                    {review.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={GOOGLE_MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-black font-semibold px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <span>Laisser un avis sur Google</span>
            <ExternalLink size={20} />
          </a>
        </div>

      </div>
    </section>
  );
}
