import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../constants';
import { toast } from 'sonner';
import SEO from '../components/SEO';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
  };

  return (
    <div className="pt-32 pb-20">
      <SEO title="Contact Us - The Rooftop Restaurant" description="Get in touch with The Rooftop Restaurant. Find our address, phone number, and location in North Lakhimpur." />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Get In Touch</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            Have questions or want to book a table for a special event? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass p-8 rounded-3xl space-y-4">
                <MapPin className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-lg">Address</h3>
                <p className="text-white/60 text-sm leading-relaxed">{RESTAURANT_DETAILS.address}</p>
              </div>
              <div className="glass p-8 rounded-3xl space-y-4">
                <Phone className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-lg">Phone</h3>
                <a href={`tel:${RESTAURANT_DETAILS.phone}`} className="text-white/60 text-sm hover:text-primary transition-colors block">
                  {RESTAURANT_DETAILS.phone}
                </a>
              </div>
              <div className="glass p-8 rounded-3xl space-y-4">
                <Mail className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-lg">Email</h3>
                <p className="text-white/60 text-sm">{RESTAURANT_DETAILS.email}</p>
              </div>
              <div className="glass p-8 rounded-3xl space-y-4">
                <Clock className="w-8 h-8 text-primary" />
                <h3 className="font-bold text-lg">Hours</h3>
                <p className="text-white/60 text-sm">{RESTAURANT_DETAILS.timings}</p>
              </div>
            </div>

            {/* Map */}
            <div className="h-[300px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass p-8 md:p-12 rounded-[40px] border border-white/10"
          >
            <h2 className="text-2xl font-display font-bold mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/40">Name</label>
                  <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-white/40">Email</label>
                  <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all" placeholder="your@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/40">Subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all">
                  <option className="bg-secondary">General Inquiry</option>
                  <option className="bg-secondary">Table Booking</option>
                  <option className="bg-secondary">Event Hosting</option>
                  <option className="bg-secondary">Feedback</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-white/40">Message</label>
                <textarea required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary outline-none transition-all h-32" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-black py-4 rounded-xl font-bold hover:bg-accent transition-all flex items-center justify-center gap-2">
                <Send className="w-5 h-5" /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
