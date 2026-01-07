import { MapPin, Phone, Clock, Instagram, Calendar, ExternalLink } from 'lucide-react';

const PHONE_NUMBER = '0755305100';
const TREATWELL_LINK = 'https://www.treatwell.fr/salon/mr-barber-94/';
const INSTAGRAM_LINK = 'https://www.instagram.com/mrbarber94170/';
const TIKTOK_LINK = 'https://www.tiktok.com/@mrbarber94';
const GOOGLE_MAPS_LINK = 'https://www.google.com/maps/place/Mr+Barber+94+-+salon+de+coiffure/@48.8463691,2.4996562,17z/data=!3m1!4b1!4m6!3m5!1s0x47e60dbe784985fb:0x29dad2f3d5f0f7db!8m2!3d48.8463691!4d2.4996562!16s%2Fg%2F11rqv9hk3_?entry=ttu&g_ep=EgoyMDI2MDEwNC4wIKXMDSoASAFQAw%3D%3D';

const contactInfo = [
    {
    icon: <MapPin size={24} />,
    label: 'Adresse',
    value: '178 avenue du Général de Gaulle',
    subValue: '94170 Le Perreux-sur-Marne',
    link: GOOGLE_MAPS_LINK,
  },
  {
    icon: <Phone size={24} />,
    label: 'Telephone',
    value: '07 55 30 51 00',
    link: `tel:${PHONE_NUMBER}`,
  },
  {
    icon: <Clock size={24} />,
    label: 'Horaires',
    value: 'Tous les jours',
    subValue: '10h00 - 20h00',
  },
];

const socialLinks = [
  {
    icon: <Instagram size={24} />,
    label: 'Instagram',
    link: INSTAGRAM_LINK,
    color: 'bg-white hover:bg-neutral-200 text-black',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
    label: 'TikTok',
    link: TIKTOK_LINK,
    color: 'bg-neutral-800 hover:bg-neutral-700 text-white',
  },
  {
    icon: <Calendar size={24} />,
    label: 'Prendre RDV',
    link: TREATWELL_LINK,
    color: 'border-2 border-white hover:bg-white text-white hover:text-black',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Nous trouver</h3>

            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg text-white group-hover:bg-white group-hover:text-black transition-colors">
                  {info.icon}
                </div>
                <div>
                  <p className="text-neutral-500 text-sm uppercase tracking-wider">{info.label}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target={info.link.startsWith('tel:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-white hover:text-neutral-300 transition-colors font-medium text-lg"
                    >
                      {info.value}
                      {info.subValue && <span className="block text-neutral-400">{info.subValue}</span>}
                    </a>
                  ) : (
                    <p className="text-white font-medium text-lg">
                      {info.value}
                      {info.subValue && <span className="block text-neutral-400">{info.subValue}</span>}
                    </p>
                  )}
                </div>
              </div>
            ))}

            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-neutral-300 transition-colors mt-4"
            >
              <span>Voir sur Google Maps</span>
              <ExternalLink size={18} />
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Nous contacter</h3>

            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-3 ${social.color} font-semibold px-6 py-4 rounded-lg transition-all duration-300 hover:scale-105`}
                >
                  {social.icon}
                  <span>{social.label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-transparent rounded-2xl border border-neutral-800/40">
              <p className="text-neutral-300 text-center">
                Besoin d'un renseignement ?<br />
                <span className="text-white font-medium">Appelez-nous ou envoyez un message !</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
