import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { RESTAURANT_DETAILS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <h3 className="text-2xl font-display font-bold text-primary">THE ROOFTOP</h3>
          <p className="text-white/60 text-sm leading-relaxed">
            Experience the finest rooftop dining in North Lakhimpur. We serve delicious food with an unforgettable ambience.
          </p>
          <div className="flex gap-4">
            <a href={RESTAURANT_DETAILS.socials.facebook} className="text-white/60 hover:text-primary transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href={RESTAURANT_DETAILS.socials.instagram} className="text-white/60 hover:text-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="/menu" className="hover:text-primary transition-colors">Our Menu</a></li>
            <li><a href="/about" className="hover:text-primary transition-colors">About Us</a></li>
            <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
            <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0" />
              <span>{RESTAURANT_DETAILS.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href={`tel:${RESTAURANT_DETAILS.phone}`} className="hover:text-primary transition-colors">
                {RESTAURANT_DETAILS.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>{RESTAURANT_DETAILS.email}</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div>
          <h4 className="text-white font-bold mb-6">Opening Hours</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex gap-3">
              <Clock className="w-5 h-5 text-primary shrink-0" />
              <div>
                <p className="font-medium text-white">Daily</p>
                <p>11:00 AM - 11:00 PM</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-white/40 text-xs">
        <p>© {new Date().getFullYear()} {RESTAURANT_DETAILS.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
