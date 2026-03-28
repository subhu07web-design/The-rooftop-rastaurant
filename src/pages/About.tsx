import React from 'react';
import { motion } from 'motion/react';
import { Award, Heart, ShieldCheck, Users } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="pt-32 pb-20">
      <SEO title="About Us - The Rooftop Restaurant" description="Learn about the story and vision behind The Rooftop Restaurant in North Lakhimpur." />
      
      <div className="container mx-auto px-4">
        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">Our Story</h1>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                Founded with a passion for great food and breathtaking views, The Rooftop Restaurant has become a landmark in North Lakhimpur for those seeking a premium yet affordable dining experience.
              </p>
              <p>
                Our journey started with a simple idea: to create a space where the sky meets the plate. We believe that dining is not just about the food, but about the memories created around the table.
              </p>
              <p>
                From our carefully curated menu featuring local favorites and global classics to our warm, friendly service, every detail is designed to make you feel at home while you're above the world.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://picsum.photos/seed/restaurant-about/800/800" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-3xl hidden md:block">
              <p className="text-4xl font-display font-bold text-primary">4.1</p>
              <p className="text-xs uppercase tracking-widest text-white/60">Google Rating</p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Heart, title: "Made with Love", desc: "Every dish is prepared with the freshest ingredients and passion." },
            { icon: Users, title: "Community First", desc: "A place where the local community gathers and celebrates." },
            { icon: ShieldCheck, title: "Quality Assured", desc: "Highest standards of hygiene and food safety in everything we do." },
            { icon: Award, title: "Best Experience", desc: "Committed to providing the best rooftop vibe in Assam." }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl space-y-4"
            >
              <item.icon className="w-10 h-10 text-primary" />
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
