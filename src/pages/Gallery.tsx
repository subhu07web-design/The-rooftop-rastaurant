import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Gallery() {
  const images = [
    { src: 'https://picsum.photos/seed/food1/800/600', title: 'Signature Starters' },
    { src: 'https://picsum.photos/seed/ambience1/800/600', title: 'Rooftop View' },
    { src: 'https://picsum.photos/seed/food2/800/600', title: 'Main Course' },
    { src: 'https://picsum.photos/seed/ambience2/800/600', title: 'Night Vibe' },
    { src: 'https://picsum.photos/seed/food3/800/600', title: 'Refreshing Drinks' },
    { src: 'https://picsum.photos/seed/ambience3/800/600', title: 'Outdoor Seating' },
    { src: 'https://picsum.photos/seed/food4/800/600', title: 'Buffet Spread' },
    { src: 'https://picsum.photos/seed/ambience4/800/600', title: 'Event Setup' },
  ];

  return (
    <div className="pt-32 pb-20">
      <SEO title="Gallery - The Rooftop Restaurant" description="Take a visual tour of The Rooftop Restaurant. See our food, ambience, and rooftop views." />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Our Gallery</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            A glimpse into the atmosphere and flavors that await you at The Rooftop Restaurant.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-display text-xl font-bold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
