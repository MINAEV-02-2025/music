// components/Services.jsx
import { Music, Smartphone, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Music size={32} className="text-orange-400" />,
      title: '60 million of songs',
      description: 'Un catalogue énorme à découvrir à tout moment.',
    },
    {
      icon: <Smartphone size={32} className="text-orange-400" />,
      title: 'Music in your pocket',
      description: 'Emmène ta musique partout avec toi.',
    },
    {
      icon: <Star size={32} className="text-orange-400" />,
      title: 'Best sound quality',
      description: 'Une qualité sonore exceptionnelle, sans compromis.',
    },
  ];

  return (
    <section className="py-16 bg-white text-indigo-900">
      <div className="container mx-auto px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-indigo-50 rounded-2xl shadow hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
