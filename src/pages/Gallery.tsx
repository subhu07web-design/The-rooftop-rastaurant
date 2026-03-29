import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';

export default function Gallery() {
  const images = [
    { src: 'https://i.postimg.cc/50nz6Djt/rooftop-image4.jpg', title: 'Rooftop Ambience' },
    { src: 'https://delivery.pixelbin.io/predictions/outputs/30d/sr/upscale/019d3782-1701-7eef-97dd-13274d6db845/result_0.jpeg', title: 'Rooftop Dining' },
    { src: 'https://delivery.pixelbin.io/predictions/outputs/30d/sr/upscale/019d3784-2db7-7bb9-9775-98cc2109d6fc/result_0.jpeg', title: 'Rooftop Atmosphere' },
    { src: 'https://i.postimg.cc/6qBN11h0/rooftop-image5.webp', title: 'Sunset View' },
    { src: 'https://i.postimg.cc/mD2wXYF0/rooftop-image-6.webp', title: 'City Skyline' },
    { src: 'https://i.postimg.cc/Y2TP9PFq/rooftop-image-7.webp', title: 'Rooftop Evening' },
    { src: 'https://i.postimg.cc/MTSTq5Dc/rooftop-img-8.jpg', title: 'Rooftop Night' },
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
