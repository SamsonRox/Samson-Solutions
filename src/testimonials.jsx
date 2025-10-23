import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Sarah Johnson', text: 'Samson found me the perfect health insurance plan that saved me hundreds per month.', rating: 5 },
  { name: 'Robert Chen', text: 'Fixed my computer and set up remote support for my elderly parents.', rating: 5 },
  { name: 'Lisa Martinez', text: 'Beautiful hardwood floors installed perfectly.', rating: 5 }
];

const Testimonials = () => (
  <section className="py-20 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="flex mb-4">
              {[...Array(t.rating)].map((_, j) => <Star key={j} className="h-5 w-5 text-yellow-400 fill-current" />)}
            </div>
            <p className="text-gray-600 italic mb-4">"{t.text}"</p>
            <p className="font-bold text-gray-900">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
