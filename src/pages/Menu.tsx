import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, ShoppingBag, X, CheckCircle2 } from 'lucide-react';
import { MENU_ITEMS } from '../constants';
import { MenuItem, CartItem } from '../types';
import { formatPrice, cn } from '../lib/utils';
import { toast } from 'sonner';
import SEO from '../components/SEO';

interface MenuProps {
  addToCart: (item: MenuItem) => void;
  cart: CartItem[];
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, delta: number) => void;
}

export default function Menu({ addToCart, cart, removeFromCart, updateQuantity }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    message: ''
  });

  const categories = [
    'All', 
    'Starters', 
    'Veg Main Course', 
    'Non Veg Main Course', 
    'Breads', 
    'Rice', 
    'Biryani', 
    'Veg Fried Rice', 
    'Non Veg Fried Rice', 
    'Noodles', 
    'Pasta', 
    'Snacks', 
    'Maggi', 
    'Rolls', 
    'Drinks (Beverages)'
  ];
  
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    console.log('Current form data state:', formData);
    
    const orderData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      message: formData.message,
      product: cart.map(item => `${item.name} (x${item.quantity})`).join(', '),
      price: cartTotal,
      quantity: cart.reduce((sum, item) => sum + item.quantity, 0),
      timestamp: new Date().toLocaleString()
    };

    console.log('Submitting order data:', orderData);

    try {
      // Using URLSearchParams for better compatibility with Google Apps Script doPost(e)
      // which often expects form-encoded data in e.parameter.
      const params = new URLSearchParams();
      Object.entries(orderData).forEach(([key, value]) => {
        params.append(key, value.toString());
      });

      await fetch('https://script.google.com/macros/s/AKfycbyAlzz3-N82AKiQAwi-l8YPcy1lFHaC-55urhGGLEYmeKuQBCyBpJNIjripdcisqo_Zlg/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });
      
      setOrderComplete(true);
      toast.success("Order placed successfully!");
      // Reset form
      setFormData({ name: '', phone: '', email: '', address: '', message: '' });
    } catch (error) {
      console.error('Error submitting order:', error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <SEO title="Our Menu - The Rooftop Restaurant" description="Explore our delicious menu featuring Indian, Chinese, and refreshing beverages at The Rooftop Restaurant." />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Our Menu</h1>
          <p className="text-white/60 max-w-2xl mx-auto">
            From spicy starters to refreshing beverages, explore our curated selection of dishes prepared with love and fresh ingredients.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all",
                activeCategory === cat 
                  ? "bg-primary text-black" 
                  : "glass text-white/60 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((item) => {
            const inCart = cart.find(c => c.id === item.id);
            return (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass rounded-3xl overflow-hidden group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {item.category}
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <span className="text-primary font-bold">{formatPrice(item.price)}</span>
                  </div>
                  <p className="text-white/40 text-xs mb-6 line-clamp-2">{item.description}</p>
                  
                  <div className="mt-auto">
                    {inCart ? (
                      <div className="flex items-center justify-between bg-white/5 rounded-xl p-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-primary"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="font-bold">{inCart.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-primary"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <button 
                        onClick={() => {
                          addToCart(item);
                          toast.success(`${item.name} added to cart`);
                        }}
                        className="w-full py-3 bg-primary/10 text-primary rounded-xl font-bold hover:bg-primary hover:text-black transition-all flex items-center justify-center gap-2"
                      >
                        <Plus className="w-4 h-4" /> Add to Cart
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Cart Panel */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40 w-[90%] max-w-md"
          >
            <div className="bg-primary text-black p-4 rounded-2xl shadow-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-black/20 p-2 rounded-lg">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase opacity-60">Your Order</p>
                  <p className="font-bold">{cart.length} Items • {formatPrice(cartTotal)}</p>
                </div>
              </div>
              <button 
                onClick={() => setIsCheckoutOpen(true)}
                className="bg-black text-white px-6 py-2 rounded-xl font-bold hover:bg-black/80 transition-all"
              >
                Checkout
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Checkout Modal */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass w-full max-w-lg rounded-3xl p-8 relative z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setIsCheckoutOpen(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>

              {orderComplete ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <h2 className="text-3xl font-display font-bold">Order Received!</h2>
                  <p className="text-white/60">
                    Thank you for ordering from The Rooftop Restaurant. Your food will be ready soon.
                  </p>
                  <button 
                    onClick={() => {
                      setIsCheckoutOpen(false);
                      setOrderComplete(false);
                      // Reset cart would happen in App.tsx
                    }}
                    className="bg-primary text-black px-8 py-3 rounded-full font-bold"
                  >
                    Back to Menu
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-display font-bold mb-6">Complete Your Order</h2>
                  
                  <div className="space-y-4 mb-8">
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex gap-3 items-center">
                          <span className="text-primary font-bold">{item.quantity}x</span>
                          <span>{item.name}</span>
                        </div>
                        <span className="text-white/60">{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                    <div className="pt-4 border-t border-white/10 flex justify-between items-center font-bold text-lg">
                      <span>Total Amount</span>
                      <span className="text-primary">{formatPrice(cartTotal)}</span>
                    </div>
                  </div>

                  <form onSubmit={handleCheckout} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-white/40">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-white/40">Phone Number</label>
                        <input 
                          required 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" 
                          placeholder="+91 00000 00000" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-white/40">Email Address</label>
                        <input 
                          required 
                          type="email" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" 
                          placeholder="john@example.com" 
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-white/40">Delivery Address</label>
                      <textarea 
                        required 
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all h-20" 
                        placeholder="Your full address..."
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase text-white/40">Special Message/Notes</label>
                      <textarea 
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all h-20" 
                        placeholder="Any special instructions for your order?"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-primary text-black py-4 rounded-xl font-bold hover:bg-accent transition-all mt-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? 'Processing...' : 'Place Order'}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
