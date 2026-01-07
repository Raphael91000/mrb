import { Calendar } from 'lucide-react';

const TREATWELL_LINK = 'https://www.treatwell.fr/salon/mr-barber-94/';

const tarifs = [
  { name: 'Coupe / Shampoing', price: '15' },
  { name: 'Coupe / Shampoing enfants -10 ans', price: '10' },
  { name: 'Coloration', price: '15' },
  { name: 'Défrisage', price: '10' },
  { name: 'Lissage Brésilien', price: '30', note: 'à partir de' },
  { name: 'Barbe', price: '9' },
  { name: 'Teinture Barbe', price: '10' },
];

const soins = [
  { name: 'Soin Visage', price: '25' },
  { name: 'Soin Barbe', price: '7' },
  { name: 'Épilation Barbe', price: '5', note: 'cire ou fil' },
  { name: 'Soin Botox', price: '10', note: 'Kératine' },
];

const formules = [
  { name: 'Formule Express', price: '20', details: 'Coupe / Shampoing / Barbe' },
  { name: 'Formule Premium', price: '35', details: 'Coupe / Shampoing / Soin du visage' },
  {
    name: 'Formule de Luxe',
    price: '70',
    details:
      'Coupe / Shampoing / Soin Botox / Soin Visage / Soin Barbe / Épilation Barbe / Teinture noire Barbe',
  },
  { name: 'Formule Étudiant', price: '-15%', details: 'Sur présentation de la carte étudiante' },
];

interface PriceItemProps {
  name: string;
  price: string;
  note?: string;
  details?: string;
}

function PriceItem({ name, price, note, details }: PriceItemProps) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-neutral-800 hover:border-neutral-600 transition-colors">
      <div className="flex-1">
        <span className="text-white">{name}</span>
        {note && <span className="text-neutral-500 text-sm ml-2">{note}</span>}
        {details && (
          <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
            {details}
          </p>
        )}
      </div>

      <span className="text-white font-bold text-lg ml-4 whitespace-nowrap">
        {price.includes('%') ? price : `${price}€`}
      </span>
    </div>
  );
}

interface ServiceCategoryProps {
  title: string;
  items: PriceItemProps[];
}

function ServiceCategory({ title, items }: ServiceCategoryProps) {
  return (
    <div className="bg-transparent rounded-2xl p-6 md:p-8 border border-white">
      <h3 className="text-2xl font-bold text-white mb-6">
        {title}
      </h3>

      <div className="space-y-1">
        {items.map((item, index) => (
          <PriceItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="prestations" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nos Prestations
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCategory title="Tarifs" items={tarifs} />
          <ServiceCategory title="Soins" items={soins} />
          <ServiceCategory title="Formules" items={formules} />
        </div>

        {/* CTA */}
        <div className="text-center">
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
