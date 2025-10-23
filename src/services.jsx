import React from 'react';
import { Heart, Home, Laptop, Globe, Video, Droplets, Zap, BarChart3, Scissors, Users2 } from 'lucide-react';

const services = [
  { title: "Health Insurance Solutions", description: "As a licensed and insured broker in multiple states, I provide personalized health insurance plans.", icon: Heart, image: "https://placehold.co/400x250/0891b2/ffffff?text=Health+Insurance", isPremium: true },
  { title: "Flooring Installation", description: "Premium installation of hardwood, carpet, tile, and laminate flooring.", icon: Home, image: "https://placehold.co/400x250/4f46e5/ffffff?text=Flooring+Installation", isPremium: true },
  { title: "Home Tech Setup & Support", description: "Computer repair, tech troubleshooting, smart home automation.", icon: Laptop, image: "https://placehold.co/400x250/0d9488/ffffff?text=Tech+Support", isPremium: false },
  { title: "Digital Presence & Automation", description: "Website design, smart automation, and ongoing digital management.", icon: Globe, image: "https://placehold.co/400x250/7c3aed/ffffff?text=Website+%26+Automation", isPremium: false },
  { title: "Training Content Creation", description: "Professional video and digital content creation for training, education, and business development.", icon: Video, image: "https://placehold.co/400x250/ea580c/ffffff?text=Training+Content", isPremium: false }
];

const Services = () => (
  <section id="services" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className={`bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${service.isPremium ? 'ring-2 ring-blue-500 relative' : ''}`}>
            {service.isPremium && <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">PREMIUM</div>}
            <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center">Get Started →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
