import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Ready for Your Transformation?</h2>
      <p className="mb-8">One form connects you to all services.</p>
      <a href="#" className="bg-white text-blue-600 px-10 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-colors">📞 Get Your Free Quote Now</a>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div><Phone className="h-8 w-8 mx-auto mb-2"/><p>(484) 240-9873</p></div>
        <div><Mail className="h-8 w-8 mx-auto mb-2"/><p>hello@samsonsolutions.com</p></div>
        <div><MapPin className="h-8 w-8 mx-auto mb-2"/><p>Greater Lehigh Valley • Multi-State Insurance</p></div>
      </div>
    </div>
  </section>
);

export default Contact;
