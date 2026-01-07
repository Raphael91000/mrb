import { Scissors, Sparkles, Crown, Calendar } from 'lucide-react';

const TREATWELL_LINK = 'https://www.treatwell.fr/salon/mr-barber-94/';

const tarifs = [
  { name: 'Coupe / Shampoing', price: '15' },
  { name: 'Coupe / Shampoing enfants -10 ans', price: '10' },
  { name: 'Coloration', price: '15' },
  { name: 'Defrisage', price: '10' },
  { name: 'Lissage Bresilien', price: '30', note: 'a partir de' },
  { name: 'Barbe', price: '9' },
  { name: 'Teinture Barbe', price: '10' },
];

const soins = [
  { name: 'Soin Visage', price: '25' },
  { name: 'Soin Barbe', price: '7' },
  { name: 'Epilation Barbe', price: '5', note: 'cire ou fil' },
  { name: 'Soin Botox', price: '10', note: 'Keratine' },
];

const formules = [
  { name: "Formule Express'", price: '20', details: 'Coupe/Shampoing/Barbe' },
  { name: 'Formule Premium', price: '35', details: 'Coupe/Shampoing/Soin du visage' },
  { name: 'Formule de Luxe', price: '70', details: 'Coupe/Shampoing/Soin Botox/Soin Visage/Soin Barbe/Epilation Barbe/Teinture noire Barbe' },
  { name: 'Formule Etudiant', price: '-15%', details: 'sur presentation de la carte Etudiante' },
];

interface PriceItemProps {
  name: string;
  price: string;
  note?: string;
  details?: string;
}

function PriceItem({ name, price, note, details }: PriceItemProps) {
  return (
    <div className="flex justify-between items-start py-3 border-b border-neutral-800 group hover:border-neutral-600 transition-colors">
      <div className="flex-1">
        <span className="text-white transition-colors">{name}</span>
        {note && <span className="text-neutral-500 text-sm ml-2">{note}</span>}
        {details && <p className="text-neutral-500 text-sm mt-1">{details}</p>}
      </div>
      <span className="text-white font-bold text-lg ml-4">
        {price.includes('%') ? price : `${price}€`}
      </span>
    </div>
  );
}

interface ServiceCategoryProps {
  title: string;
  icon: React.ReactNode;
  items: PriceItemProps[];
}

function ServiceCategory({ title, icon, items }: ServiceCategoryProps) {
  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-neutral-800 hover:border-neutral-700 transition-colors">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-white/10 rounded-lg text-white">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Nos Prestations</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <ServiceCategory title="Tarifs" icon={<Scissors size={24} />} items={tarifs} />
          <ServiceCategory title="Soins" icon={<Sparkles size={24} />} items={soins} />
          <ServiceCategory title="Formules" icon={<Crown size={24} />} items={formules} />
        </div>

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
