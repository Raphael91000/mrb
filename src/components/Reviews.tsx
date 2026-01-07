import { Star, ExternalLink } from 'lucide-react';

const GOOGLE_MAPS_LINK = 'https://www.google.com/maps/place/Mr+Barber+94+-+salon+de+coiffure/@48.8463691,2.4996562,17z/data=!3m1!4b1!4m6!3m5!1s0x47e60dbe784985fb:0x29dad2f3d5f0f7db!8m2!3d48.8463691!4d2.4996562!16s%2Fg%2F11rqv9hk3_?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D';

const reviews = [
  {
    name: 'Mehdi K.',
    rating: 5,
    text: 'Meilleur barbier du coin ! Toujours une coupe parfaite, ambiance sympa et prix corrects. Je recommande les yeux fermes.',
    date: 'Il y a 2 semaines',
  },
  {
    name: 'Thomas L.',
    rating: 5,
    text: "Service impeccable, le barber prend son temps pour bien comprendre ce qu'on veut. Resultat toujours au top !",
    date: 'Il y a 1 mois',
  },
  {
    name: 'Youssef A.',
    rating: 5,
    text: 'Tres professionnel, accueil chaleureux. La formule Premium vaut vraiment le coup. J\'y retourne chaque mois.',
    date: 'Il y a 1 mois',
  },
  {
    name: 'Alexandre M.',
    rating: 5,
    text: "Excellent rapport qualite-prix. Le soin visage est un vrai plus. L'endroit est propre et moderne.",
    date: 'Il y a 2 mois',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-600'}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="avis" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Avis Clients</h2>
          <div className="flex items-center justify-center gap-2 text-neutral-400">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-xl font-semibold text-white ml-2">4.7</span>
            <span>sur Google</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold text-lg">{review.name}</h4>
                  <p className="text-neutral-500 text-sm">{review.date}</p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-neutral-300 leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>

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
