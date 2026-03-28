import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Clock, MapPin, Users, Utensils, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RESTAURANT_DETAILS, MENU_ITEMS, REVIEWS } from '../constants';
import { formatPrice, cn } from '../lib/utils';
import SEO from '../components/SEO';

export default function Home() {
  const featuredDishes = MENU_ITEMS.slice(0, 3);

  return (
    <div className="pt-20">
      <SEO />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/gps-cs-s/AHVAwepfG0wZFjGR21YUuoJIVHg8WHOMFvPjf7E4uz-FM5rX1ej7TSiv1oB6revXuLdg-hpS-T5yhMkc56b0clgGViK2ocCkak3pPyee4vh9Qc9jvQS2AWsSEwmx4DQbd64-FuakIPsE=s1360-w1360-h1020-rw" 
            alt="The Rooftop Restaurant Front Banner" 
            className="w-full h-full object-cover opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 leading-tight">
              Elevate Your Dining <br />
              <span className="text-primary italic">Experience</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
              Experience the finest rooftop dining in North Lakhimpur. Delicious food, stunning views, and a vibe like no other.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className="bg-primary text-black px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-accent transition-all hover:scale-105">
                Order Now <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="glass px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                Book a Table
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Friendly Atmosphere</h3>
              <p className="text-white/60 text-sm">Perfect for families, couples, and friends to hang out and enjoy.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Utensils className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Delicious Buffet</h3>
              <p className="text-white/60 text-sm">Wide range of options from Indian to Chinese cuisines.</p>
            </motion.div>
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl text-center space-y-4"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Affordable Luxury</h3>
              <p className="text-white/60 text-sm">Premium experience at prices that won't break the bank.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Dishes</h2>
              <p className="text-white/60">Our chef's special recommendations for you.</p>
            </div>
            <Link to="/menu" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View Full Menu <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <div key={dish.id} className="glass rounded-3xl overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{dish.name}</h3>
                    <span className="text-primary font-bold">{formatPrice(dish.price)}</span>
                  </div>
                  <p className="text-white/60 text-sm mb-6 line-clamp-2">{dish.description}</p>
                  <Link to="/menu" className="w-full block text-center py-3 border border-primary/30 rounded-xl text-primary font-bold hover:bg-primary hover:text-black transition-all">
                    Order Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">What Our Guests Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review) => (
              <div key={review.id} className="glass p-8 rounded-3xl relative">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={cn("w-4 h-4", i < review.rating ? "text-primary fill-primary" : "text-white/20")} />
                  ))}
                </div>
                <p className="text-white/80 italic mb-6">"{review.comment}"</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold">{review.author}</span>
                  <span className="text-white/40 text-xs">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info & Map */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold">Visit Us Today</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-white/60">{RESTAURANT_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Timings</h4>
                    <p className="text-white/60">{RESTAURANT_DETAILS.timings}</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold">Contact</h4>
                    <p className="text-white/60">{RESTAURANT_DETAILS.phone}</p>
                  </div>
                </div>
              </div>
              <a 
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(RESTAURANT_DETAILS.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-black px-8 py-4 rounded-full font-bold hover:bg-accent transition-all"
              >
                Get Directions
              </a>
            </div>
            <div className="h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.043537243343!2d94.1015!3d27.2345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDE0JzA0LjIiTiA5NMKwMDYnMDUuNCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
